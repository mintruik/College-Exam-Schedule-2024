document.addEventListener("DOMContentLoaded", () => {
  const searchType = document.getElementById("searchType");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const sessionFilter = document.getElementById("sessionFilter");
  const resultsContainer = document.getElementById("results");
  const resetBtn = document.getElementById("resetBtn");
  const programSemFilter = document.getElementById("programSemFilter");
  const programSemester = document.getElementById("programSemester");

  // Create datalist for autocomplete
  const createDatalist = () => {
    // Remove existing datalist if any
    const existingDatalist = document.getElementById("searchSuggestions");
    if (existingDatalist) {
      existingDatalist.remove();
    }

    const datalist = document.createElement("datalist");
    datalist.id = "searchSuggestions";

    // Get unique values based on selected search type
    const selectedType = searchType.value;
    const searchValue = searchInput.value.toLowerCase();
    const selectedSemester = programSemester.value;

    // Filter values based on current input
    let filteredValues = College_Data
      .filter(item => {
        const value = item[capitalizeFirstLetter(selectedType)]?.toLowerCase() || '';
        const matchesSemester = selectedType !== 'programme' || 
                              selectedSemester === 'all' || 
                              item.Sem.toString() === selectedSemester;
        return value.includes(searchValue) && matchesSemester;
      })
      .map(item => item[capitalizeFirstLetter(selectedType)]);

    // Get unique values
    const uniqueValues = [...new Set(filteredValues)];

    uniqueValues.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      datalist.appendChild(option);
    });

    document.body.appendChild(datalist);
    searchInput.setAttribute("list", "searchSuggestions");
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function filterResults() {
    const searchType = document.getElementById('searchType').value;
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const sessionFilter = document.getElementById('sessionFilter').value;
    const semesterFilter = document.getElementById('programSemester').value;
    
    let filteredData = College_Data.filter(exam => {
        const sessionMatch = sessionFilter === 'all' || exam.Session === sessionFilter;
        let searchMatch = false;
        let semesterMatch = true;

        if (searchType === 'subject') {
            searchMatch = exam.Subject.toLowerCase().includes(searchValue);
        } else if (searchType === 'programme') {
            searchMatch = exam.Programme.toLowerCase().includes(searchValue);
            // Semester filter sirf tab apply hoga jab programme search type ho
            if (semesterFilter !== 'all') {
                semesterMatch = exam.Sem.toString() === semesterFilter;
            }
        } else if (searchType === 'sem') {
            searchMatch = exam.Sem.toString().toLowerCase().includes(searchValue);
        }

        return searchMatch && sessionMatch && semesterMatch;
    });

    displayResults(filteredData);
  }

  function displayResults(exams) {
    resultsContainer.innerHTML = "";

    if (exams.length === 0) {
      resultsContainer.innerHTML = `
                <div class="no-results">
                    <p>No exams found matching your search criteria.</p>
                </div>
            `;
      return;
    }

    exams.forEach((exam) => {
      const examCard = document.createElement("div");
      examCard.className = "exam-card";
      examCard.innerHTML = `
                <h3>${exam.Subject}</h3>
                <div class="exam-info">
                    <p>
                        <span>Programme:</span>
                        <span>${exam.Programme}</span>
                    </p>
                    <p>
                        <span>Semester:</span>
                        <span>${exam.Sem}</span>
                    </p>
                    <p>
                        <span>Date:</span>
                        <span>${exam.Date}</span>
                    </p>
                    <p>
                        <span>Session:</span>
                        <span class="session-tag session-${exam.Session.toLowerCase()}">${
        exam.Session
      }</span>
                    </p>
                    <p>
                        <span>Paper ID:</span>
                        <span>${exam.PaperId}</span>
                    </p>
                </div>
            `;
      resultsContainer.appendChild(examCard);
    });
  }

  function resetAll() {
    searchInput.value = "";
    sessionFilter.value = "all";
    searchType.value = "programme";
    programSemester.value = "all";
    programSemFilter.style.display = "block";
    createDatalist();
    displayResults(College_Data);
  }

  // Update suggestions when search type changes
  searchType.addEventListener("change", () => {
    createDatalist();
    searchInput.value = "";
    
    if (searchType.value === "programme") {
      programSemFilter.style.display = "block";
    } else {
      programSemFilter.style.display = "none";
    }
  });

  // Event listeners
  searchBtn.addEventListener("click", filterResults);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      filterResults();
    } else {
      // Real-time filtering as user types
      if (searchInput.value.length >= 2) {
        filterResults();
      }
    }
  });
  sessionFilter.addEventListener("change", filterResults);
  resetBtn.addEventListener("click", resetAll);

  // Add new event listeners
  searchInput.addEventListener("input", () => {
    createDatalist(); // Update suggestions in real-time
    if (searchType.value === "programme" && searchInput.value) {
      updateSemesterOptions(searchInput.value);
    }
    // Real-time filtering
    if (searchInput.value.length >= 2) {
      filterResults();
    }
  });

  programSemester.addEventListener("change", filterResults);

  // Initialize autocomplete
  createDatalist();

  // Initialize with all data
  displayResults(College_Data);

  // Function to update semester options based on selected programme
  function updateSemesterOptions(programme) {
    if (!programme) return;
    
    // Get unique semesters for the selected programme
    const semesters = [...new Set(
      College_Data
        .filter(exam => exam.Programme.toLowerCase() === programme.toLowerCase())
        .map(exam => exam.Sem)
    )].sort((a, b) => a - b);

    // Update semester dropdown
    programSemester.innerHTML = '<option value="all">All Semesters</option>';
    semesters.forEach(sem => {
      const option = document.createElement('option');
      option.value = sem;
      option.textContent = `Semester ${sem}`;
      programSemester.appendChild(option);
    });
  }

  // Initialize with programme search
  searchType.value = "programme";
  programSemFilter.style.display = "block";
  createDatalist();
  displayResults(College_Data);
});

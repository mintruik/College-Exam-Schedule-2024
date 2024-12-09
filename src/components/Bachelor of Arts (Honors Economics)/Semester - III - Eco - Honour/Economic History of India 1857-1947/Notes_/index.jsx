import React, { useState } from 'react';
import './index.css';
import { unit1Flowcharts, unit2Flowcharts, flowchartTitles } from './flowchart';

const EconomicHistoryNotes = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [showFlowchart, setShowFlowchart] = useState(false);

  const notes = {
    unit1: {
      title: "Unit I - Introduction to Economic History",
      content: [
        "1. Why Study Economic History? 📚🕰️",
        "- 📖 **Learn from the Past:** Understand how economies grew and declined",
        "- ⚠️ **Find Mistakes:** Learn what went wrong to avoid repeating it",
        "- 🛠️ **Policy Making:** Helps shape better economic policies today",
        "- 💸 **British Impact:** Know how India's economy was exploited",
        "- 🇮🇳 **National Pride:** Understand India's struggles and achievements",

        "2. Problems in Interpreting India's Past 🕰️🔍",
        "- 📊 **No Proper Data:** Limited stats during British rule",
        "- 📝 **Biased Records:** British historians favored colonial rule",
        "- 🤷 **Conflicting Views:** Indian and British historians disagreed",
        "- 💼 **Focus on British Gain:** Policies analyzed only for British benefit",
        "- 📂 **Scattered Info:** Lack of unified data from rural areas or princely states",

        "3. Indian Economy on the Eve of Independence (1947) 🇮🇳⚠️",
        "- 📉 **Stagnant Economy:** No growth, backward agriculture, poverty",
        "- 💸 **Exploitation:** Drain of Wealth (Dadabhai Naoroji) → British drained resources",
        
        "🌾 Agriculture:",
        "- Heavy taxes (Zamindari system) → Poverty",
        "- 🌾 Famines → Repeated food shortages",
        
        "🏭 Industrial Backwardness:",
        "- India → Supplier of raw materials",
        "- ❌ No industries; imports flooded Indian markets",
        "- 🚂 **Infrastructure:** Railways, ports built for British trade, not for Indian welfare",
        "- 😞 **Unemployment & Poverty:** Widespread poverty and joblessness",

        "4. Indian Economy in the Mid-19th Century 🚜📉",
        "- 🌾 **Agrarian Economy:** Farming focus but farmers suffered heavy taxes",
        "- 🧵 **Decline of Handicrafts:** Machine-made British goods replaced Indian products",
        "- 🏭 **Deindustrialization:** Skilled artisans lost jobs as industries (like textiles) collapsed",
        "- 💰 **Cash Crops:** Farmers forced to grow indigo, jute, cotton → Food shortages",
        
        "📜 Land Revenue Systems:",
        "- 🕵️‍♂️ **Zamindari:** Landlords collected taxes",
        "- ����‍🌾 **Ryotwari:** Direct tax on farmers",
        "- 🏘️ **Mahalwari:** Village-based tax system",

        "5. Growth of the Empire and Administration in Colonial India 🇬🇧",
        "Growth of British Empire 🌍",
        "- 🏴 **East India Company (EIC):** Trade → Political conquest",
        
        "⚔️ Key Battles:",
        "- **Plassey (1757)** 🛡️ → British gained Bengal",
        "- **Buxar (1764)** ⚔️ → Full British control",
        
        "📜 Expansion Policies:",
        "- ❌ **Doctrine of Lapse:** Annexed states without heirs",
        "- 🛡️ **Subsidiary Alliance:** Indian rulers forced to accept British troops",
        
        "Administration Systems 🏛️",
        "- 🏢 **Centralized Rule:** Strong British control",
        "- 👮 **Police & Military:** Used to suppress revolts",
        "- ⚖️ **Judiciary:** British laws replaced Indian traditions",
        "- 🛠️ **Civil Services:** Jobs reserved mostly for British officers",
        "- 💰 **Economic Exploitation:** Policies made for British profit",

        "6. Impact of British Policies ⚠️🌍",
        "- 😞 **Poverty:** Widespread poverty and economic inequality",
        "- 🌾 **Famines:** Food shortages → Famines like Bengal Famine (1943)",
        "- 🔗 **Loss of Self-Sufficiency:** India relied on British imports",
        "- 🚂 **Infrastructure:** Railways, ports → Built for British trade, not public benefit",
        
        "✊ Rise of Nationalism:",
        "- 🇮🇳 Exploitation → Rise of freedom movements",
        "- 🧑‍🤝‍🧑 Leaders like Gandhi, Indian National Congress (INC) emerged",

        "✨ Key Words to Remember 📝",
        "- 💸 **Drain of Wealth:** Dadabhai Naoroji",
        "- 📜 **Zamindari System:** Tax system benefiting landlords",
        "- 🏭 **Deindustrialization:** Collapse of Indian industries",
        "- ❌ **Doctrine of Lapse:** British annexation policy",
        "- 🌾 **Commercialization of Agriculture:** Growing cash crops over food",

        "🚀 Quick Revision (Super-Fast Notes!)",
        "- 📚 Why Study? → Learn, fix mistakes, better policies, pride",
        "- 🔍 Problems → No data, bias, British-focused views",
        "- ⚠️ Eve of Independence → Poverty, no industries, famines",
        "- 🌾 Mid-19th Century → Agriculture, handicrafts decline, cash crops",
        "- 👑 British Rule → Centralized power, key battles (Plassey, Buxar), unfair taxes",
        "- ⚠️ Impact → Poverty, famines, nationalism rise, infrastructure for British use",

        "💡 Tips for Exam:",
        "- Focus on keywords 📝 (Drain of Wealth, Zamindari, Plassey, etc.)",
        "- Include quick examples (like Bengal Famine or Doctrine of Lapse) for bonus marks! ✨"
      ]
    },
    unit2: {
      title: "Unit II - Transformation of Traditional Village Economy",
      content: [
        "1. Transformation of the Traditional Village Economy 🏡🔄",
        "- 🛠️ **Shift in Economy:** Villages changed from self-sufficient units → became part of British economic policies",
        "- 💰 **Focus on Cash Crops:** British wanted raw materials for their industries",
        "- 🏭 **Decline of Local Industries:** Traditional crafts and small industries collapsed",
        
        "⚖️ New Land Revenue Systems:",
        "- 📝 **Zamindari:** Landlords collected taxes → Farmers suffered",
        "- 🌾 **Ryotwari:** Farmers paid directly to the British",
        "- 💸 **Money-Based Economy:** Farmers had to sell crops to pay taxes in cash",
        "- 👣 **Fun Note:** Villages lost their self-sufficiency and became tools for British profit",

        "2. Commercialization of Agriculture 🌾💰",
        "🧐 What is it?",
        "- 🧺 **Growing Crops for Sale:** Farmers started growing cash crops (indigo, cotton, tea, jute) → Not food crops",
        "- 🚢 **Export-Oriented:** Crops were grown to supply raw materials to British industries",
        
        "🛠️ Causes ⚠️",
        "- 💵 **Heavy Taxes:** Farmers forced to grow cash crops to earn money for taxes",
        "- 🚂 **Infrastructure:** Railways and ports were built to transport crops for British trade",
        "- 📜 **Land Revenue Policies:** British forced farmers to prioritize commercial crops",
        
        "⚠️ Consequences ❌",
        "- 🌾 **Food Shortage:** Farmers grew cash crops → Less land for food → Famines",
        "- 😞 **Farmer Poverty:** High costs, low prices → Farmers couldn't earn enough",
        "- 💼 **Rural Inequality:** Landlords grew richer; small farmers suffered",
        "- 🇬🇧 **British Benefit:** All profits went to Britain → Exploitation continued",
        "- 👣 **Fun Note:** Commercial crops = Cash for British 💸 but hunger for India 😞",

        "3. Emergence of Agricultural Labour as a Category 👨‍🌾👩‍🌾",
        "- 🧑‍🌾 **Decline of Farmers:** Small farmers lost their land → Became landless laborers",
        "- 🏚️ **Debt Trap:** Farmers borrowed money → Couldn't repay → Lost land",
        "- 💼 **Demand for Labour:** Large landlords needed workers to grow cash crops",
        "- 🚶 **Shift to Daily Wages:** People worked for low wages on others' lands",
        
        "⚠️ Exploitation:",
        "- Laborers had no rights",
        "- Paid very low wages → Extreme poverty",
        "- 👣 **Fun Note:** From landowners 🌾 to wage workers 💸 — a sad shift for Indian farmers",

        "4. Movement of Agricultural Wages and Prices 📉📊",
        "💰 Falling Wages:",
        "- 🧑‍🌾 **Surplus Labor:** Too many workers, not enough jobs",
        "- 😔 **Poverty:** Landless farmers worked for anything to survive",
        "- 📊 **Rising Prices:** Prices of food and essential goods increased → Poor farmers could not afford them",
        "- 🚫 **Unfair Trade:** British traders controlled prices, exploiting farmers",
        "- 👣 **Fun Note:** Wages low ⬇️, prices high ⬆️ = Farmers suffered the most",

        "5. Problems of Rural Indebtedness 💸📉",
        "😟 Endless Debt Cycle:",
        "- Farmers borrowed from moneylenders",
        "- 💵 High interest → Farmers couldn't repay → More loans",
        "- 🏚️ **Land Loss:** Many farmers lost land to moneylenders",
        "- 📉 **Poverty Spread:** Debt pushed farmers into extreme poverty",
        "- 👨‍⚖️ **No Protection:** British laws favored moneylenders, not farmers",
        "- 💼 **Exploitation:** Landlords and traders profited → Farmers suffered",
        "- 👣 **Fun Note:** Farmers borrowed money 💸 but paid with their lives 😞",

        "✨ Quick Recap 🚀📝",
        "- 🏡 Village Economy → Self-sufficient villages → British economic tools",
        "- 🌾 Commercialization of Agriculture → Cash crops, food shortage, poverty",
        "- 👨‍🌾 Agricultural Labour → Farmers → Landless laborers",
        "- 📊 Wages and Prices → Wages low, prices high → Farmer misery",
        "- 💸 Rural Indebtedness → Debt trap, land loss, endless poverty",

        "📊 Visual Flowchart: Village Economy Transformation",
        "```",
        "Traditional Self-Sufficient Villages",
        "            ⬇️",
        "    British Economic Control",
        "            ⬇️",
        "┌─────────────────────────────┐",
        "│       Major Changes:        │",
        "│ • Land Revenue Systems      │",
        "│ • Cash Crops > Food Crops   │",
        "│ • Decline of Local Industry │",
        "└─────────────────────────────���",
        "            ⬇️",
        "     Impact on Farmers",
        "┌────────────────────────────┐",
        "│    Farmer Challenges:       │",
        "│ • Loss of Land             │",
        "│ • Becoming Laborers        │",
        "│ • Low Wages                │",
        "│ • Debt Trap               │",
        "└─────────────────────────────┘",
        "            ⬇️",
        "       Consequences",
        "┌─────────────────────────────┐",
        "│     Final Outcomes:         │",
        "│ • Rural Poverty            │",
        "│ • Food Shortages           │",
        "│ • Economic Exploitation    │",
        "└─────────────────────────────┘",
        "```",
        
        "💡 How to Use This Flowchart:",
        "- 📝 Perfect for exam answers to show cause-and-effect",
        "- 🎯 Helps remember the sequence of events",
        "- 📊 Shows clear connection between British policies and outcomes",
        "- ✨ Bonus marks for visual presentation!",

        "💡 Tips to Score Well ✨🖊️",
        "- Use keywords like Zamindari, cash crops, rural debt, surplus labor",
        "- Add quick examples like Indigo plantations for Commercialization 🌾",
      ]
    },
    unit3: {
      title: "Unit III - Economic Transformations",
      content: [
        "Transformation of the Indian economy under colonial rule",
        "Development of railways and infrastructure",
        "Changes in trade patterns and monetary system"
      ]
    },
    unit4: {
      title: "Unit IV - Late Colonial Period",
      content: [
        "Economic conditions in the late colonial period",
        "Nationalist economic thinking",
        "Impact of World Wars on Indian economy"
      ]
    }
  };

  const handleUnitClick = (unit) => {
    setSelectedUnit(selectedUnit === unit ? null : unit);
  };

  // Helper function to format text with bold markdown
  const formatText = (text) => {
    return text.split('**').map((part, index) => 
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  const renderFlowcharts = (unitFlowcharts) => (
    <div className="flowcharts-section">
      {Object.entries(unitFlowcharts).map(([key, chart]) => (
        <div key={key} className="flowchart-block">
          <h4 className="flowchart-heading">{flowchartTitles[key]}</h4>
          {chart.map((line, index) => (
            <pre key={index} className="flowchart-line">{line}</pre>
          ))}
          {key !== 'summary' && <div className="flowchart-separator">________________________</div>}
        </div>
      ))}
    </div>
  );

  return (
    <div className="notes-container">
      <h2>Economic History of India (1857-1947) Notes</h2>
      
      <div className="units-container">
        {Object.keys(notes).map((unit) => (
          <div key={unit} className="unit-section">
            <button 
              className={`unit-button ${selectedUnit === unit ? 'active' : ''}`}
              onClick={() => handleUnitClick(unit)}
            >
              {notes[unit].title}
              <span className="toggle-icon">{selectedUnit === unit ? '−' : '+'}</span>
            </button>
            
            {selectedUnit === unit && (
              <div className="unit-notes">
                <button 
                  className="flowchart-toggle-button"
                  onClick={() => setShowFlowchart(!showFlowchart)}
                >
                  {showFlowchart ? 'Hide Flowcharts' : 'Show Flowcharts'} 📊
                </button>
                
                {showFlowchart && renderFlowcharts(
                  selectedUnit === 'unit1' ? unit1Flowcharts : unit2Flowcharts
                )}

                <ul>
                  {notes[unit].content.map((point, index) => (
                    <li 
                      key={index}
                      className={point.startsWith('-') ? 'sub-point' : 'main-point'}
                    >
                      {formatText(point)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EconomicHistoryNotes;

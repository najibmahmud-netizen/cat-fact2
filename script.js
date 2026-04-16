/ PURE FUNCTION
async function getCatFact() {
  try {
    // 1. Fetch the data
    const response = await fetch("https://catfact.ninja/fact");
    
    // 2. Parse the JSON (This was missing!)
    const data = await response.json();
    
    // 3. Return the specific fact string from the object
    return data.fact; 
  } catch (error) {
    console.error("Error fetching cat fact:", error);
    throw error; // Pass the error to the UI logic to handle
  }
}

// DOM CODE
if (typeof document !== "undefined") {
  // Use unique IDs or check for existence carefully
  const homeBtn = document.getElementById("homeBtn");
  const factsBtn = document.getElementById("btn");
  const factText = document.getElementById("fact");

  // Home Page logic
  if (homeBtn && factText) {
    homeBtn.addEventListener("click", () => {
      factText.textContent = "Welcome to the Cat Facts Explorer! We hope you find some paws-itive information here.";
    });
  }

  // Facts Page logic
  if (factsBtn && factText) {
    factsBtn.addEventListener("click", async () => {
      factText.textContent = "Loading...";
      try {
        const fact = await getCatFact();
        factText.textContent = fact;
      } catch (error) {
        factText.textContent = "Failed to load cat fact. Maybe the API is down?";
      }
    });
  }
}

// Export for Jest
if (typeof module !== "undefined") {
  module.exports = { getCatFact };
}
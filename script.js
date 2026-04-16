// PURE FUNCTION
async function getCatFact() {
  // We use the stable ninja API to avoid CORS and 503 errors
  fetch("https://catfact.ninja/fact")
  .then(res => res.json())
  .then(data => console.log(data.fact));
  
  return data.fact || data[0].text; 
}

// DOM CODE
if (typeof document !== "undefined") {
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

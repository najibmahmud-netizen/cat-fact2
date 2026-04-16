// FUNCTION TO FETCH CAT FACT
async function getCatFact() {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();

    return data.fact || "No fact found";
  } catch (error) {
    return "Error loading fact 😿";
  }
}

// DOM CODE
if (typeof document !== "undefined") {

  const homeBtn = document.getElementById("homeBtn");
  const factBtn = document.getElementById("factBtn");
  const factText = document.getElementById("fact");

  // Home button logic
  if (homeBtn && factText) {
    homeBtn.addEventListener("click", () => {
      factText.textContent =
        "Welcome to the Cat Facts Explorer! We hope you find some paws-itive information here.";
    });
  }

  // Fetch fact button logic (IMPORTANT FIX)
  if (factBtn && factText) {
    factBtn.addEventListener("click", async () => {
      factText.textContent = "Loading...";

      const fact = await getCatFact();
      factText.textContent = fact;
    });
  }
}

// export for testing
if (typeof module !== "undefined") {
  module.exports = { getCatFact };
}

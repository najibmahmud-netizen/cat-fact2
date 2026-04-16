// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("JS LOADED");

  // Get elements
  const btn = document.getElementById("factBtn");
  const factText = document.getElementById("factText");

  // Safety check (prevents null errors)
  if (!btn) {
    console.error("Button with id 'factBtn' not found!");
    return;
  }

  if (!factText) {
    console.error("Element with id 'factText' not found!");
    return;
  }

  // Fetch function (PURE + reusable)
  async function getCatFact() {
    try {
      const res = await fetch("https://catfact.ninja/fact");

      // If API fails
      if (!res.ok) {
        throw new Error("Failed to fetch cat fact");
      }

      const data = await res.json();

      return data.fact;
    } catch (error) {
      console.error("API Error:", error);
      return "Could not load cat fact. Try again.";
    }
  }

  // Button click event
  btn.addEventListener("click", async () => {
    console.log("clicked");

    // Loading state
    factText.textContent = "Loading cat fact...";
    // Get fact
    const fact = await getCatFact();

    // Display fact
    factText.textContent = fact;
  });
});
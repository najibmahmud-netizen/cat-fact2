async function getCatFact() {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    return data.fact;
  } catch {
    return "Error loading fact.";
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("factBtn");
    const fact = document.getElementById("fact");
    const status = document.getElementById("status");

    if (btn) {
      btn.addEventListener("click", async () => {
        status.textContent = "Loading...";
        fact.textContent = "";

        const newFact = await getCatFact();

        fact.textContent = newFact;
        status.textContent = "";
      });
    }
  });
}

if (typeof module !== "undefined") {
  module.exports = { getCatFact };
}

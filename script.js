
// importing the function from script.js
const { getCatFact } = require("./script");

// we mock fetch so it doesn't call the real API
global.fetch = jest.fn();

describe("getCatFact function", () => {

  // run before each test
  beforeEach(() => {
    fetch.mockClear();
  });

  test("should return a cat fact", async () => {

    // fake API response
    fetch.mockResolvedValue({
      json: async () => ({
        fact: "Cats sleep most of the day."
      })
    });

    const result = await getCatFact();

    expect(result).toBe("Cats sleep most of the day.");
  });

  test("should handle different API format", async () => {

    // sometimes API might return array format
    fetch.mockResolvedValue({
      json: async () => ([
        { text: "Cats have 9 lives (not really)." }
      ])
    });

    const result = await getCatFact();

    expect(result).toBe("Cats have 9 lives (not really).");
  });

  test("should fail gracefully when API breaks", async () => {

    // simulate API error
    fetch.mockRejectedValue(new Error("Network Error"));

    try {
      await getCatFact();
    } catch (error) {
      expect(error).toBeDefined();
    }

  });

});
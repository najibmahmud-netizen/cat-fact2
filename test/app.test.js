
// import function
const { getCatFact } = require("../script");

// mock fetch globally
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test("fetches cat fact using fact field", async () => {

  // match API format: { fact: "..." }
  fetch.mockResolvedValue({
    json: async () => ({
      fact: "Cats sleep a lot"
    })
  });

  const fact = await getCatFact();

  expect(fact).toBe("Cats sleep a lot");
});

test("fetches cat fact using array fallback", async () => {

  // match fallback format: [{ text: "..." }]
  fetch.mockResolvedValue({
    json: async () => ([
      { text: "Cats sleep a lot" }
    ])
  });

  const fact = await getCatFact();

  expect(fact).toBe("Cats sleep a lot");
});
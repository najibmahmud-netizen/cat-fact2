const { getCatFact } = require("../script");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ fact: "Cats sleep 70% of their lives." }),
  })
);

test("returns a cat fact", async () => {
  const fact = await getCatFact();
  expect(fact).toBeDefined();
});

// At the top of test/app.test.js
const { getCatFact } = require("../script");



global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ text: "Cats sleep a lot" }]), 
  })
);

test("fetches cat fact", async () => {
  const fact = await getCatFact();
  expect(fact).toBe("Cats sleep a lot");
});
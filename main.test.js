const { JSDOM } = require("jsdom");
const {
  toBeInTheDocument,
  toBeEmptyDOMElement,
  toHaveStyle
} = require("@testing-library/jest-dom/matchers");

expect.extend({ toBeInTheDocument, toBeEmptyDOMElement, toHaveStyle });

const LEVELS = {
  one: "level_one",
  two: "level_two",
  three: "level_three"
};

let document = null;
let window = null;
beforeEach(async () => {
  const jsDom = await JSDOM.fromFile("index.html", {
    resources: "usable",
    runScripts: "dangerously",
    url: `file://${__dirname}/`
  });
  await new Promise((res) => {
    jsDom.window.onload = res;
  });
  window = jsDom.window;
  document = jsDom.window.document;
});

afterEach(() => {
  document = null;
  window = null;
});

describe(LEVELS.one, () => {
  it("Liz Rios' favourite fruit", () => {
    const expected = "apple";
    const actual = window.lizRiosFavFruit();
    expect(expected).toBe(actual);
  });
  it("Marie David's 2nd friend", () => {
    const expected = "Rena Lawrence";
    const actual = window.marieDavid2ndFriend();
    expect(expected).toBe(actual);
  });
});
describe(LEVELS.two, () => {
  it("Cooper Brady's message shown", () => {
    const expected = "Hello, Cooper Brady! You have 5 unread messages.";
    const actual = document.querySelector("#message").innerText;
    expect(expected).toBe(actual);
  });
  it("Find person by email", () => {
    const expected = "carversalinas@comtent.com";
    const actual = window.findPersonByEmail("carversalinas@comtent.com");
    expect(expected).toBe(actual.email);
  });
});
describe(LEVELS.three, () => {
  it("Find mango lovers", () => {
    const expected = [
      "Coleen Calderon",
      "Carver Salinas",
      "Marie David",
      "Jennifer Montoya",
      "Porter Jennings"
    ];
    const actual = window.getMangoLovers();
    expect(expected).toEqual(actual);
  });
  it.skip("bonus task not yet marked", () => {});
});

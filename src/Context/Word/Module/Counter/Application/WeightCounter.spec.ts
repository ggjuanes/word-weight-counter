import { expect } from "chai";
import WordStub from "../Domain/WordStub";
import WeightCounter from "./WeightCounter";

/**
 * @TODO: mock WeightSelectorJson
 * increate test coverage
 */
describe("WeightCounter", () => {
  it("when empty string sent, then it should return 0", () => {
    const weightCounter = new WeightCounter();

    expect(weightCounter.count(WordStub.empty())).to.equal(0);
  });

  it("when sent Attitude, then it should return 100", () => {
    const weightCounter = new WeightCounter();

    expect(weightCounter.count(WordStub.create("Attitude"))).to.equal(100);
  });
});

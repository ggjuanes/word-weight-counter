import { expect } from "chai";
import * as mocha from "mocha";
import IWeightSelector from "../Domain/IWeightSelector";
import Letter from "../Domain/Letter";
import WordStub from "../Domain/WordStub";
import WeightCounter from "./WeightCounter";

class WeightSelectorStub implements IWeightSelector {
  public getWeightFor(letter: Letter): number {
    return letter.getValue().charCodeAt(0);
  }
}

describe("WeightCounter", () => {
  it("when empty string sent, then it should return 0", () => {
    const weightCounter = new WeightCounter(new WeightSelectorStub());

    expect(weightCounter.count(WordStub.empty())).to.equal(0);
  });

  it("when sent Attitude, then it should return 100", () => {
    const weightCounter = new WeightCounter(new WeightSelectorStub());

    expect(weightCounter.count(WordStub.create("Attitude"))).to.equal(836);
  });
});

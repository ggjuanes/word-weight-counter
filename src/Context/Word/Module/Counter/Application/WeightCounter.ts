import { inject, injectable } from "inversify";
import "reflect-metadata";
import IWeightCounter from "../Domain/IWeightCounter";
import IWeightSelector from "../Domain/IWeightSelector";
import Letter from "../Domain/Letter";
import Word from "../Domain/Word";
import SERVICES from "../Infrastructure/DependencyInjection/services";
import WeightSelectorJson from "../Infrastructure/WeightSelectorJson";

@injectable()
export default class WeightCounter implements IWeightCounter {
  private weightSelector: IWeightSelector;

  constructor(@inject(SERVICES.IWeightSelector) weightSelector: IWeightSelector) {
    this.weightSelector = weightSelector;
  }

  public count(word: Word): number {
    let weight = 0;
    const wordString = word.getValue();

    for (const letter of wordString) {
      weight += this.weightSelector.getWeightFor(new Letter(letter));
    }

    return weight;
  }
}

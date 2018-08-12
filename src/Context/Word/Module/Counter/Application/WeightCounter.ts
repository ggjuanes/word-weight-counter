import IWeightSelector from "../Domain/IWeightSelector";
import Letter from "../Domain/Letter";
import Word from "../Domain/Word";
import WeightSelectorJson from "../Infrastructure/WeightSelectorJson";

export default class WeightCounter {
  private weightSelector: IWeightSelector;

  constructor() {
    /** @TODO: add inversify to remove this dependency */
    this.weightSelector = new WeightSelectorJson();
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

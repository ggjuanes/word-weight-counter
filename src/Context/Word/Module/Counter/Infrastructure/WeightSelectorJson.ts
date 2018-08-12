import { injectable } from "inversify";
import "reflect-metadata";
import alphabet from "../../../../../../data/alphabet.json";
import IWeightSelector from "../Domain/IWeightSelector";
import Letter from "../Domain/Letter";

@injectable()
export default class WeightSelectorJson implements IWeightSelector {
  public getWeightFor(letter: Letter): number {
    return alphabet.letters[letter.getValue().toUpperCase()];
  }
}

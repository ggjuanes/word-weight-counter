import Letter from "./Letter";

export default interface IWeightSelector {
  getWeightFor(letter: Letter): number;
}

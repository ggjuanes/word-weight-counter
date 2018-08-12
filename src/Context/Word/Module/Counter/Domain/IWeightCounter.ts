import Word from "./Word";

export default interface IWeightCounter {
  count(word: Word): number;
}

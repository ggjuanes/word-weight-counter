import WeightCounter from "./Context/Word/Module/Counter/Application/WeightCounter";
import Word from "./Context/Word/Module/Counter/Domain/Word";

const weightCounter = new WeightCounter();

if (process.argv.length <= 2) {
  // tslint:disable-next-line:no-console
  console.log("Word is requred");
  process.exit(-1);
}
const word = new Word(process.argv[2]);
const amount = weightCounter.count(word);

// tslint:disable-next-line:no-console
console.log("Amount for the word (" + word.getValue() + ") is: " + amount);

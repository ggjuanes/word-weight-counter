import container from "../../../../Shared/Infrastructure/DependencyInjection/container";
import WeightCounter from "../Application/WeightCounter";
import IWeightCounter from "../Domain/IWeightCounter";
import Word from "../Domain/Word";
import SERVICES from "./DependencyInjection/services";

const weightCounter = container.get<IWeightCounter>(SERVICES.IWeightCounter);

interface IProcess {
    argv: [];
    exit(code?: number): void;
}
declare var process: IProcess;

if (process.argv.length <= 2) {
  // tslint:disable-next-line:no-console
  console.log("Word is requred");
  process.exit(-1);
}
const word = new Word(process.argv[2]);
const amount = weightCounter.count(word);

// tslint:disable-next-line:no-console
console.log("Amount for the word (" + word.getValue() + ") is: " + amount);

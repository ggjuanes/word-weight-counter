import * as faker from "faker";
import Letter from "./Letter";

export default class LetterStub {
  public static create(letter: string): Letter {
    return new Letter(letter);
  }

  public static random(): Letter {
    return LetterStub.create(faker.lorem.word().substring(0, 1));
  }
}

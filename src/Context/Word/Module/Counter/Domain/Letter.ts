import StringValueObject from "./StringValueObject";

export default class Letter extends StringValueObject {
  constructor(letter: string) {
    if (letter.length > 1) {
      throw Error("Only one character allowed.");
    }

    super(letter);
  }
}

import StringValueObjectStub from "./StringValueObjectStub";
import Word from "./Word";

export default class WordStub {
  public static create(word: string): Word {
    return new Word(word);
  }

  public static random(): Word {
    return WordStub.create(StringValueObjectStub.random().getValue());
  }

  public static empty(): Word {
    return WordStub.create("");
  }
}

import * as faker from "faker";
import StringValueObject from "./StringValueObject";

export default class StringValueObjectStub {
  public static create(value: string): StringValueObject {
    return new StringValueObject(value);
  }

  public static random(): StringValueObject {
    return StringValueObjectStub.create(faker.lorem.word());
  }

  public static empty(): StringValueObject {
    return StringValueObjectStub.create("");
  }
}

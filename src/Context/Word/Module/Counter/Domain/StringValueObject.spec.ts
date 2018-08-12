import { expect } from "chai";
import * as faker from "faker";
import StringValueObject from "./StringValueObject";
import StringValueObjectStub from "./StringValueObjectStub";

describe("StringValueObject", () => {
  it("when empty string sent, then it should set to empty string", () => {
    const stringValueObject = StringValueObjectStub.empty();

    expect(stringValueObject.getValue()).to.equal("");
  });

  it("when value string sent, then it should set to the string", () => {
    const wordString = "TEST";

    const stringValueObject = new StringValueObject(wordString);

    expect(stringValueObject.getValue()).to.equal(wordString);
  });
});

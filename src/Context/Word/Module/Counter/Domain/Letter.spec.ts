import { expect } from "chai";
import * as mocha from "mocha";
import Letter from "./Letter";
import StringValueObjectStub from "./StringValueObjectStub";

describe("Letter", () => {
  it("if more than one character is sent, then exception is thrown", () => {
    let errorThrown = false;
    try {
      const letter = new Letter(StringValueObjectStub.random().getValue());
    } catch (error) {
      errorThrown = true;
    }

    // tslint:disable-next-line:no-unused-expression
    expect(errorThrown).to.be.true;
  });

  it("string with only one character should create the object", () => {
    const letter = new Letter("a");

    expect(letter.getValue()).to.equal("a");
  });
});

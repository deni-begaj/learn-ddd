// Value Object
export class MessageText {
  constructor(readonly value: string) {
    if (!value.trim()) throw new Error("Empty message");
    Object.freeze(this);
  }

  equals(other: MessageText) {
    return this.value === other.value;
  }
}

// Example Validating
const helloMsg = new MessageText("Hello");
console.log("Value objects Equal:", helloMsg.equals(new MessageText("Hello"))); // true

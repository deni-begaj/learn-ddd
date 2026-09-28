import { Message } from "./message.ts"
import { MessageText } from "./message-text.ts"

// Entity + Aggregate Root
export class Ticket {
  constructor(
    readonly id: string,
    private closed: boolean,
    private messages: Message[],
  ) { }

  editMessage(id: string, text: MessageText) {
    if (this.closed) throw new Error("Ticket closed");

    const message = this.messages.find(m => m.id === id);
    if (!message) throw new Error("Message not found");

    message.editText(text);
  }
}

// Example: Edit Message
const message = new Message("message-42", new MessageText("The problem is open"));
const ticket = new Ticket("12", false, [message]);
ticket.editMessage("message-42", new MessageText("The problem is fixed"));
console.log("Edited message:", message.getText().value);

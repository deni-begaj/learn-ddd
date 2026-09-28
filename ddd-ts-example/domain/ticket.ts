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

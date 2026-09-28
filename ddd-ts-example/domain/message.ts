import { MessageText } from "./message-text.ts";
import { Attachment } from "./attachment.ts";

// Entity
export class Message {
  constructor(
    readonly id: string,
    private text: MessageText,
    private attachments: Attachment[] = [],
  ) { }

  editText(text: MessageText) {
    this.text = text;
  }

  getText() {
    return this.text;
  }
}

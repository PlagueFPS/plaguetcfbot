import type * as CFRichTextTypes from "@contentful/rich-text-types";
import type { Entry, EntryFields } from "contentful";

export interface TypeDiscordCommandsFields {
    title: EntryFields.Symbol;
    body: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeDiscordCommands = Entry<TypeDiscordCommandsFields>;

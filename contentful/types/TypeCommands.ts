import type * as CFRichTextTypes from "@contentful/rich-text-types";
import type { Entry, EntryFields } from "contentful";

export interface TypeCommandsFields {
    title: EntryFields.Symbol;
    body: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeCommands = Entry<TypeCommandsFields>;

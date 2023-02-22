import type * as CFRichTextTypes from "@contentful/rich-text-types";
import type { Entry, EntryFields } from "contentful";

export interface TypeBotInfoFields {
    title: EntryFields.Symbol;
    body: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeBotInfo = Entry<TypeBotInfoFields>;

import type * as CFRichTextTypes from "@contentful/rich-text-types";
import type { Entry, EntryFields } from "contentful";

export interface TypeContactFields {
    title: EntryFields.Symbol;
    body: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeContact = Entry<TypeContactFields>;

import type * as CFRichTextTypes from "@contentful/rich-text-types";
import type { Entry, EntryFields } from "contentful";

export interface TypeUpdateFields {
    title: EntryFields.Symbol;
    date: EntryFields.Date;
    body: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeUpdate = Entry<TypeUpdateFields>;

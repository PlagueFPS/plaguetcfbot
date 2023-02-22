import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeGeneralPagesFields {
    title: EntryFields.Symbol;
    description: EntryFields.Symbol;
    featuredImage: Asset;
    images?: Asset[];
}

export type TypeGeneralPages = Entry<TypeGeneralPagesFields>;

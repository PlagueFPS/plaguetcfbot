import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeTcfbotFields {
    title: EntryFields.Symbol;
    description: EntryFields.Symbol;
    featuredImage: Asset;
}

export type TypeTcfbot = Entry<TypeTcfbotFields>;

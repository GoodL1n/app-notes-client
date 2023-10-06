import { Tag } from "./tag.model";

export interface Note{
    title: string;
    content: string;
    tags?: Tag[];
}
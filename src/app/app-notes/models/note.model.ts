import { Reminder } from "./reminder.model";
import { Tag } from "./tag.model";

export interface Note{
    title: string;
    content?: string;
    tags?: Tag[];
    reminder?: Reminder;
}
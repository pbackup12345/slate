import { Path, Text } from '..';
/**
 * `Mark` objects represent formatting that is applied to text in a Slate
 * document. They appear in leaf text nodes in the document, as well as in
 * annotations on the root value object.
 */
export interface Mark {
    [key: string]: any;
}
export declare namespace Mark {
    /**
     * Check if a mark exists in a set of marks.
     */
    const exists: (mark: Mark, marks: Mark[]) => boolean;
    /**
     * Check if a value implements the `Mark` interface.
     */
    const isMark: (value: any) => value is Mark;
    /**
     * Check if a value is an array of `Mark` objects.
     */
    const isMarkSet: (value: any) => value is Mark[];
    /**
     * Check if a mark matches set of properties.
     */
    const matches: (mark: Mark, props: Partial<Mark>) => boolean;
}
/**
 * `MarkEntry` tuples are returned when iterating through the marks in a text
 * node. They include the index of the mark in the text node's marks array, as
 * well as the text node and its path in the root node.
 */
export declare type MarkEntry = [Mark, number, Text, Path];
/**
 * `MarkMatch` values are used as shorthands for matching mark objects.
 */
export declare type MarkMatch = Partial<Mark> | ((entry: MarkEntry) => boolean);
//# sourceMappingURL=mark.d.ts.map
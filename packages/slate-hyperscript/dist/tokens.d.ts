import { Mark, Path, Text } from 'slate';
/**
 * All tokens inherit from a single constructor for `instanceof` checking.
 */
export declare class Token {
}
/**
 * Anchor tokens represent the selection's anchor point.
 */
export declare class AnchorToken extends Token {
    focused: boolean;
    marks: Mark[] | null;
    offset?: number;
    path?: Path;
    constructor(props?: {
        focused?: boolean;
        marks?: Mark[] | null;
        offset?: number;
        path?: Path;
    });
}
/**
 * Focus tokens represent the selection's focus point.
 */
export declare class FocusToken extends Token {
    focused: boolean;
    marks: Mark[] | null;
    offset?: number;
    path?: Path;
    constructor(props?: {
        focused?: boolean;
        marks?: Mark[] | null;
        offset?: number;
        path?: Path;
    });
}
/**
 * Annotation tokens represent an edge of an annotation range.
 */
export declare class AnnotationToken extends Token {
    key: string;
    props: {};
    constructor(props: {
        key: string;
    });
}
/**
 * Add an anchor token to the end of a text node.
 */
export declare const addAnchorToken: (text: Text, token: AnchorToken) => void;
/**
 * Get the offset if a text node has an associated anchor token.
 */
export declare const getAnchorOffset: (text: Text) => [number, AnchorToken] | undefined;
/**
 * Add a focus token to the end of a text node.
 */
export declare const addFocusToken: (text: Text, token: FocusToken) => void;
/**
 * Get the offset if a text node has an associated focus token.
 */
export declare const getFocusOffset: (text: Text) => [number, FocusToken] | undefined;
/**
 * Add an annotation token to the end of a text node.
 */
export declare const addAnnotationToken: (text: Text, token: AnnotationToken) => void;
/**
 * Get the offset if a text node has an associated focus token.
 */
export declare const getAnnotationOffsets: (text: Text) => Record<number, AnnotationToken> | undefined;
//# sourceMappingURL=tokens.d.ts.map
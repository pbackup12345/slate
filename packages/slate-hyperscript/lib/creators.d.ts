import { Element, Descendant, Node, Range, Text, Value } from 'slate';
import { AnchorToken, FocusToken, Token } from './tokens';
/**
 * Create an anchor token.
 */
export declare function createAnchor(tagName: string, attributes: {
    [key: string]: any;
}, children: any[]): AnchorToken;
/**
 * Create an annotation token, or two.
 */
export declare function createAnnotation(tagName: string, attributes: {
    [key: string]: any;
}, children: any[]): (Node | Token)[];
/**
 * Create an anchor and a focus token.
 */
export declare function createCursor(tagName: string, attributes: {
    [key: string]: any;
}, children: any[]): Token[];
/**
 * Create an `Element` object.
 */
export declare function createElement(tagName: string, attributes: {
    [key: string]: any;
}, children: any[]): Element;
/**
 * Create a focus token.
 */
export declare function createFocus(tagName: string, attributes: {
    [key: string]: any;
}, children: any[]): FocusToken;
/**
 * Create a fragment.
 */
export declare function createFragment(tagName: string, attributes: {
    [key: string]: any;
}, children: any[]): Descendant[];
/**
 * Create a `Text` object with a mark applied.
 */
export declare function createMark(tagName: string, attributes: {
    [key: string]: any;
}, children: any[]): Text;
/**
 * Create a `Selection` object.
 */
export declare function createSelection(tagName: string, attributes: {
    [key: string]: any;
}, children: any[]): Range;
/**
 * Create a `Text` object.
 */
export declare function createText(tagName: string, attributes: {
    [key: string]: any;
}, children: any[]): Text;
/**
 * Create a top-level `Value` object.
 */
export declare function createValue(tagName: string, attributes: {
    [key: string]: any;
}, children: any[]): Value;
//# sourceMappingURL=creators.d.ts.map
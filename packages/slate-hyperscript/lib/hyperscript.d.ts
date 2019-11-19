import { createAnchor, createCursor, createAnnotation, createElement, createFocus, createFragment, createMark, createSelection, createText, createValue } from './creators';
/**
 * `HyperscriptCreators` are dictionaries of `HyperscriptCreator` functions
 * keyed by tag name.
 */
declare type HyperscriptCreators<T = any> = Record<string, (tagName: string, attributes: {
    [key: string]: any;
}, children: any[]) => T>;
/**
 * `HyperscriptShorthands` are dictionaries of properties applied to specific
 * kind of object, keyed by tag name. They allow you to easily define custom
 * hyperscript tags for your schema.
 */
declare type HyperscriptShorthands = Record<string, Record<string, any>>;
/**
 * Create a Slate hyperscript function with `options`.
 */
declare const createHyperscript: (options?: {
    creators?: Record<string, (tagName: string, attributes: {
        [key: string]: any;
    }, children: any[]) => any> | undefined;
    elements?: Record<string, Record<string, any>> | undefined;
    marks?: Record<string, Record<string, any>> | undefined;
    annotations?: Record<string, Record<string, any>> | undefined;
}) => <S extends "element" | "mark" | "annotation" | "anchor" | "cursor" | "focus" | "fragment" | "selection" | "text" | "value">(tagName: S, attributes?: Object | undefined, ...children: any[]) => ReturnType<({
    anchor: typeof createAnchor;
    annotation: typeof createAnnotation;
    cursor: typeof createCursor;
    element: typeof createElement;
    focus: typeof createFocus;
    fragment: typeof createFragment;
    mark: typeof createMark;
    selection: typeof createSelection;
    text: typeof createText;
    value: typeof createValue;
} | {
    anchor: typeof createAnchor;
    annotation: typeof createAnnotation;
    cursor: typeof createCursor;
    element: typeof createElement;
    focus: typeof createFocus;
    fragment: typeof createFragment;
    mark: typeof createMark;
    selection: typeof createSelection;
    text: typeof createText;
    value: typeof createValue;
})[S]>;
export { createHyperscript, HyperscriptCreators, HyperscriptShorthands };
//# sourceMappingURL=hyperscript.d.ts.map
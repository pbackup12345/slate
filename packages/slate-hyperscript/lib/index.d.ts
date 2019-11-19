import { createHyperscript, HyperscriptCreators, HyperscriptShorthands } from './hyperscript';
/**
 * The default hyperscript factory that ships with Slate, without custom tags.
 */
declare const jsx: <S extends "anchor" | "annotation" | "cursor" | "element" | "focus" | "fragment" | "mark" | "selection" | "text" | "value">(tagName: S, attributes?: Object | undefined, ...children: any[]) => ReturnType<({
    anchor: typeof import("./creators").createAnchor;
    annotation: typeof import("./creators").createAnnotation;
    cursor: typeof import("./creators").createCursor;
    element: typeof import("./creators").createElement;
    focus: typeof import("./creators").createFocus;
    fragment: typeof import("./creators").createFragment;
    mark: typeof import("./creators").createMark;
    selection: typeof import("./creators").createSelection;
    text: typeof import("./creators").createText;
    value: typeof import("./creators").createValue;
} | {
    anchor: typeof import("./creators").createAnchor;
    annotation: typeof import("./creators").createAnnotation;
    cursor: typeof import("./creators").createCursor;
    element: typeof import("./creators").createElement;
    focus: typeof import("./creators").createFocus;
    fragment: typeof import("./creators").createFragment;
    mark: typeof import("./creators").createMark;
    selection: typeof import("./creators").createSelection;
    text: typeof import("./creators").createText;
    value: typeof import("./creators").createValue;
})[S]>;
export { jsx, createHyperscript, HyperscriptCreators, HyperscriptShorthands };
//# sourceMappingURL=index.d.ts.map
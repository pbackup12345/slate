import { Editor, Path, Text } from 'slate';
import { SchemaRule } from './rules';
/**
 * `SchemaEditor` is a Slate editor class with `withSchema` mixed in.
 */
export declare type SchemaEditor = InstanceType<ReturnType<typeof withSchema>>;
/**
 * The `withSchema` mixin augments an editor to ensure that its value is
 * normalized to always obey a schema after operations are applied.
 */
export declare const withSchema: (Editor: new (...args: any[]) => Editor, rules?: SchemaRule[]) => {
    new (...args: any[]): {
        /**
         * Normalize a node at a path with the schema's rules, returning it to a
         * valid state if it is currently invalid.
         */
        normalizeNodes(options: {
            at: Path;
        }): void;
        onChange: (value: import("slate").Value, operations: import("slate/lib/interfaces/operation").Operation[]) => void;
        operations: import("slate/lib/interfaces/operation").Operation[];
        value: import("slate").Value;
        addAnnotation(this: Editor, key: string, annotation: import("slate/lib/interfaces/range").Range): void;
        removeAnnotation(this: Editor, key: string): void;
        setAnnotation(this: Editor, key: string, props: Partial<import("slate/lib/interfaces/range").Range>): void;
        delete(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            /**
             * `SchemaEditor` is a Slate editor class with `withSchema` mixed in.
             */
            distance?: number | undefined;
            unit?: "block" | "character" | "word" | "line" | undefined;
            reverse?: boolean | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        /**
         * The `withSchema` mixin augments an editor to ensure that its value is
         * normalized to always obey a schema after operations are applied.
         */
        insertFragment(this: Editor, fragment: import("slate").Node[], options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        insertText(this: Editor, text: string, options?: {
            at?: import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
        } | undefined): void;
        removeText(this: Editor, text: string, options?: {
            at?: import("slate/lib/interfaces/range").Range | undefined;
        } | undefined): void;
        insertNodes(this: Editor, nodes: import("slate").Value | import("slate/lib/interfaces/element").Element | Text | import("slate").Node[], options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            match?: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        liftNodes(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            match?: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
        } | undefined): void;
        mergeNodes(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            match?: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        moveNodes(this: Editor, options: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            match?: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            to: Path;
        }): void;
        removeNodes(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            match?: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        setNodes(this: Editor, props: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text>, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            match?: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        splitNodes(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            match?: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            always?: boolean | undefined;
            height?: number | undefined;
        } | undefined): void;
        unwrapNodes(this: Editor, options: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            match?: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            split?: boolean | undefined;
        }): void;
        wrapNodes(this: Editor, element: import("slate/lib/interfaces/element").Element, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            match?: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            split?: boolean | undefined;
        } | undefined): void;
        addMarks(this: Editor, marks: import("slate").Mark[], options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        removeMarks(this: Editor, marks: import("slate").Mark[], options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        setMarks(this: Editor, marks: import("slate").Mark[], props: Partial<import("slate").Mark>, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        toggleMarks(this: Editor, marks: import("slate").Mark[], options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        collapse(this: Editor, options?: {
            edge?: "anchor" | "focus" | "start" | "end" | undefined;
        } | undefined): void;
        deselect(this: Editor): void;
        move(this: Editor, options?: {
            distance?: number | undefined;
            unit?: "offset" | "character" | "word" | "line" | undefined;
            reverse?: boolean | undefined;
            edge?: "anchor" | "focus" | "start" | "end" | undefined;
        } | undefined): void;
        select(this: Editor, target: import("slate/lib/interfaces/location").Location): void;
        setPoint(this: Editor, props: Partial<import("slate/lib/interfaces/point").Point>, options: {
            edge?: "anchor" | "focus" | "start" | "end" | undefined;
        }): void;
        setSelection(this: Editor, props: Partial<import("slate/lib/interfaces/range").Range>): void;
        apply(this: Editor, op: import("slate/lib/interfaces/operation").Operation): void;
        flush(this: Editor): void;
        normalize(this: Editor, options?: {
            force?: boolean | undefined;
        } | undefined): void;
        withoutNormalizing(this: Editor, fn: () => void): void;
        hasBlocks(this: Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        hasInlines(this: Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        hasTexts(this: Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        isEmpty(this: Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        isInline(this: Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        isVoid(this: Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        createPathRef(this: Editor, path: Path, options?: {
            affinity?: "backward" | "forward" | null | undefined;
        } | undefined): import("slate").PathRef;
        createPointRef(this: Editor, point: import("slate/lib/interfaces/point").Point, options?: {
            affinity?: "backward" | "forward" | null | undefined;
        } | undefined): import("slate").PointRef;
        createRangeRef(this: Editor, range: import("slate/lib/interfaces/range").Range, options?: {
            affinity?: "backward" | "forward" | "outward" | "inward" | null | undefined;
        } | undefined): import("slate").RangeRef;
        annotations(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
        } | undefined): Iterable<import("slate").AnnotationEntry>;
        elements(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate/lib/interfaces/element").ElementEntry>;
        getActiveMarks(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            union?: boolean | undefined;
            hanging?: boolean | undefined;
        } | undefined): import("slate").Mark[];
        getAfter(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            distance?: number | undefined;
            unit?: "offset" | "block" | "character" | "word" | "line" | undefined;
        } | undefined): import("slate/lib/interfaces/point").Point | undefined;
        getAncestor(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate").AncestorEntry;
        getBefore(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            distance?: number | undefined;
            unit?: "offset" | "block" | "character" | "word" | "line" | undefined;
        } | undefined): import("slate/lib/interfaces/point").Point | undefined;
        getEdges(this: Editor, at: import("slate/lib/interfaces/location").Location): [import("slate/lib/interfaces/point").Point, import("slate/lib/interfaces/point").Point];
        getEnd(this: Editor, at: import("slate/lib/interfaces/location").Location): import("slate/lib/interfaces/point").Point;
        getFirst(this: Editor, at: import("slate/lib/interfaces/location").Location): import("slate").NodeEntry;
        getFragment(this: Editor, at: import("slate/lib/interfaces/location").Location): import("slate").Descendant[];
        getLast(this: Editor, at: import("slate/lib/interfaces/location").Location): import("slate").NodeEntry;
        getLeaf(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate/lib/interfaces/text").TextEntry;
        getMatch(this: Editor, at: import("slate/lib/interfaces/location").Location, match: import("slate").NodeMatch): import("slate").NodeEntry | undefined;
        getNext(this: Editor, at: import("slate/lib/interfaces/location").Location, match: import("slate").NodeMatch): import("slate").NodeEntry | undefined;
        getNode(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate").NodeEntry;
        getParent(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate").AncestorEntry;
        getPath(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): Path;
        getPoint(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate/lib/interfaces/point").Point;
        getPrevious(this: Editor, at: import("slate/lib/interfaces/location").Location, match: import("slate").NodeMatch): import("slate").NodeEntry | undefined;
        getRange(this: Editor, at: import("slate/lib/interfaces/location").Location, to?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined): import("slate/lib/interfaces/range").Range;
        getStart(this: Editor, at: import("slate/lib/interfaces/location").Location): import("slate/lib/interfaces/point").Point;
        getText(this: Editor, at: import("slate/lib/interfaces/location").Location): string;
        hasNode(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): boolean;
        isStart(this: Editor, point: import("slate/lib/interfaces/point").Point, at: import("slate/lib/interfaces/location").Location): boolean;
        isEnd(this: Editor, point: import("slate/lib/interfaces/point").Point, at: import("slate/lib/interfaces/location").Location): boolean;
        isEdge(this: Editor, point: import("slate/lib/interfaces/point").Point, at: import("slate/lib/interfaces/location").Location): boolean;
        levels(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate").NodeEntry>;
        marks(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate").MarkEntry>;
        matches(this: Editor, options: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | import("slate/lib/interfaces/location").Span | undefined;
            match?: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            reverse?: boolean | undefined;
        }): Iterable<import("slate").NodeEntry>;
        nodes(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate").NodeEntry>;
        positions(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | undefined;
            unit?: "offset" | "block" | "character" | "word" | "line" | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate/lib/interfaces/point").Point>;
        texts(this: Editor, options?: {
            at?: Path | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/range").Range | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate/lib/interfaces/text").TextEntry>;
        isNodeMatch(this: Editor, entry: import("slate").NodeEntry, match: Partial<import("slate").Value> | Partial<import("slate/lib/interfaces/element").Element> | Partial<Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | import("slate").NodeMatch[]): boolean;
        unhangRange(this: Editor, range: import("slate/lib/interfaces/range").Range): import("slate/lib/interfaces/range").Range;
    };
};
//# sourceMappingURL=plugin.d.ts.map
import { Editor, Element as SlateElement, Node as SlateNode, Operation as SlateOperation, Path as SlatePath, Point as SlatePoint, Range as SlateRange, Value as SlateValue } from 'slate';
import { DOMPoint } from './utils/dom';
import { Key } from './utils/key';
/**
 * `ReactEditor` is a Slate editor interface with the React mixin applied.
 */
export declare type ReactEditor = InstanceType<ReturnType<typeof withReact>>;
/**
 * `withReact` adds React and DOM specific behaviors to the editor.
 */
export declare const withReact: (Editor: new (...args: any[]) => Editor) => {
    new (...args: any[]): {
        apply(op: SlateOperation): void;
        /**
         * Find a key for a Slate node.
         */
        findKey(node: SlateNode): Key;
        /**
         * Find the path of Slate node.
         */
        findPath(node: SlateNode): SlatePath;
        /**
         * Resolve the decorations for a node.
         */
        getDecorations(node: SlateNode): SlateRange[];
        /**
         * Transform an `InputEvent` into commands on the editor.
         */
        handleInput(type: string, data?: string | DataTransfer | undefined, range?: SlateRange | undefined): void;
        /**
         * Check if the editor is focused.
         */
        isFocused(): boolean;
        /**
         * Check if the editor is in read-only mode.
         */
        isReadOnly(): boolean;
        /**
         * Blur the editor.
         */
        blur(): void;
        /**
         * Focus the editor.
         */
        focus(): void;
        /**
         * Deselect the editor.
         */
        deselect(): void;
        /**
         * Insert a `DataTransfer` object.
         */
        insertData(dataTransfer: DataTransfer): void;
        /**
         * Redo.
         */
        redo(): void;
        /**
         * Undo.
         */
        undo(): void;
        /**
         * Check if a DOM node is within the editor.
         */
        hasDomNode(target: Node, options?: {
            editable?: boolean | undefined;
        }): boolean;
        /**
         * Find the native DOM element from a Slate node.
         */
        toDomNode(node: SlateNode): HTMLElement;
        /**
         * Find a native DOM selection point from a Slate point.
         */
        toDomPoint(point: SlatePoint): DOMPoint;
        /**
         * Find a native DOM range from a Slate `range`.
         */
        toDomRange(range: SlateRange): Range;
        /**
         * Find a Slate node from a native DOM `element`.
         */
        toSlateNode(domNode: Node): SlateNode;
        /**
         * Get the target range from a DOM `event`.
         */
        findEventRange(event: any): SlateRange | undefined;
        /**
         * Find a Slate point from a DOM selection's `domNode` and `domOffset`.
         */
        toSlatePoint(domPoint: DOMPoint): SlatePoint;
        /**
         * Find a Slate range from a DOM range or selection.
         */
        toSlateRange(domRange: Selection | Range | StaticRange): SlateRange;
        onChange: (value: SlateValue, operations: SlateOperation[]) => void;
        operations: SlateOperation[];
        value: SlateValue;
        addAnnotation(this: Editor, key: string, annotation: SlateRange): void;
        removeAnnotation(this: Editor, key: string): void;
        setAnnotation(this: Editor, key: string, props: Partial<SlateRange>): void;
        delete(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            distance?: number | undefined;
            unit?: "block" | "character" | "word" | "line" | undefined;
            reverse?: boolean | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        insertFragment(this: Editor, fragment: SlateNode[], options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        insertText(this: Editor, text: string, options?: {
            at?: SlatePoint | SlateRange | undefined;
        } | undefined): void;
        removeText(this: Editor, text: string, options?: {
            at?: SlateRange | undefined;
        } | undefined): void;
        insertNodes(this: Editor, nodes: SlateValue | SlateElement | import("slate/lib/interfaces/text").Text | SlateNode[], options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            match?: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        liftNodes(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            match?: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
        } | undefined): void;
        mergeNodes(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            match?: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        moveNodes(this: Editor, options: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            match?: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            to: SlatePath;
        }): void;
        normalizeNodes(this: Editor, options: {
            at: SlatePath;
        }): void;
        removeNodes(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            match?: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        setNodes(this: Editor, props: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text>, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            match?: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        splitNodes(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            match?: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            always?: boolean | undefined;
            height?: number | undefined;
        } | undefined): void;
        unwrapNodes(this: Editor, options: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            match?: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            split?: boolean | undefined;
        }): void;
        wrapNodes(this: Editor, element: SlateElement, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            match?: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            split?: boolean | undefined;
        } | undefined): void;
        addMarks(this: Editor, marks: import("slate").Mark[], options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        removeMarks(this: Editor, marks: import("slate").Mark[], options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        setMarks(this: Editor, marks: import("slate").Mark[], props: Partial<import("slate").Mark>, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        toggleMarks(this: Editor, marks: import("slate").Mark[], options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            /**
             * `ReactEditor` is a Slate editor interface with the React mixin applied.
             */
            hanging?: boolean | undefined;
        } | undefined): void;
        collapse(this: Editor, options?: {
            edge?: "anchor" | "focus" | "start" | "end" | undefined;
        } | undefined): void;
        move(this: Editor, options?: {
            distance?: number | undefined;
            unit?: "offset" | "character" | "word" | "line" | undefined;
            reverse?: boolean | undefined;
            edge?: "anchor" | "focus" | "start" | "end" | undefined;
        } | undefined): void;
        select(this: Editor, target: import("slate/lib/interfaces/location").Location): void;
        setPoint(this: Editor, props: Partial<SlatePoint>, options: {
            edge?: "anchor" | "focus" | "start" | "end" | undefined;
        }): void;
        setSelection(this: Editor, props: Partial<SlateRange>): void;
        flush(this: Editor): void;
        normalize(this: Editor, options?: {
            force?: boolean | undefined;
        } | undefined): void;
        withoutNormalizing(this: Editor, fn: () => void): void;
        hasBlocks(this: Editor, element: SlateElement): boolean;
        hasInlines(this: Editor, element: SlateElement): boolean;
        hasTexts(this: Editor, element: SlateElement): boolean;
        isEmpty(this: Editor, element: SlateElement): boolean;
        isInline(this: Editor, element: SlateElement): boolean;
        isVoid(this: Editor, element: SlateElement): boolean;
        createPathRef(this: Editor, path: SlatePath, options?: {
            affinity?: "backward" | "forward" | null | undefined;
        } | undefined): import("slate").PathRef;
        createPointRef(this: Editor, point: SlatePoint, options?: {
            affinity?: "backward" | "forward" | null | undefined;
        } | undefined): import("slate").PointRef;
        createRangeRef(this: Editor, range: SlateRange, options?: {
            affinity?: "backward" | "forward" | "outward" | "inward" | null | undefined;
        } | undefined): import("slate").RangeRef;
        annotations(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
        } | undefined): Iterable<import("slate").AnnotationEntry>;
        elements(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate/lib/interfaces/element").ElementEntry>;
        getActiveMarks(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            union?: boolean | undefined;
            hanging?: boolean | undefined;
        } | undefined): import("slate").Mark[];
        getAfter(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            distance?: number | undefined;
            unit?: "offset" | "block" | "character" | "word" | "line" | undefined;
        } | undefined): SlatePoint | undefined;
        getAncestor(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate").AncestorEntry;
        getBefore(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            distance?: number | undefined;
            unit?: "offset" | "block" | "character" | "word" | "line" | undefined;
        } | undefined): SlatePoint | undefined;
        getEdges(this: Editor, at: import("slate/lib/interfaces/location").Location): [SlatePoint, SlatePoint];
        getEnd(this: Editor, at: import("slate/lib/interfaces/location").Location): SlatePoint;
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
        } | undefined): SlatePath;
        getPoint(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            edge?: "start" | "end" | undefined;
        } | undefined): SlatePoint;
        getPrevious(this: Editor, at: import("slate/lib/interfaces/location").Location, match: import("slate").NodeMatch): import("slate").NodeEntry | undefined;
        getRange(this: Editor, at: import("slate/lib/interfaces/location").Location, to?: SlatePath | SlatePoint | SlateRange | undefined): SlateRange;
        getStart(this: Editor, at: import("slate/lib/interfaces/location").Location): SlatePoint;
        getText(this: Editor, at: import("slate/lib/interfaces/location").Location): string;
        hasNode(this: Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): boolean;
        isStart(this: Editor, point: SlatePoint, at: import("slate/lib/interfaces/location").Location): boolean;
        isEnd(this: Editor, point: SlatePoint, at: import("slate/lib/interfaces/location").Location): boolean;
        isEdge(this: Editor, point: SlatePoint, at: import("slate/lib/interfaces/location").Location): boolean;
        levels(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate").NodeEntry>;
        marks(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate").MarkEntry>;
        matches(this: Editor, options: {
            at?: SlatePath | SlatePoint | SlateRange | import("slate/lib/interfaces/location").Span | undefined;
            match?: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            reverse?: boolean | undefined;
        }): Iterable<import("slate").NodeEntry>;
        nodes(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate").NodeEntry>;
        positions(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | undefined;
            unit?: "offset" | "block" | "character" | "word" | "line" | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<SlatePoint>;
        texts(this: Editor, options?: {
            at?: SlatePath | SlatePoint | SlateRange | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate/lib/interfaces/text").TextEntry>;
        isNodeMatch(this: Editor, entry: import("slate").NodeEntry, match: Partial<SlateValue> | Partial<SlateElement> | Partial<import("slate/lib/interfaces/text").Text> | "text" | "block" | "element" | "inline" | "inline-element" | "value" | "void" | ((entry: import("slate").NodeEntry) => boolean) | import("slate").NodeMatch[]): boolean;
        unhangRange(this: Editor, range: SlateRange): SlateRange;
    };
};
//# sourceMappingURL=plugin.d.ts.map
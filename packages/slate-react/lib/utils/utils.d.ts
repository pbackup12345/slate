import { Range as SlateRange, Node as SlateNode, Descendant as SlateDescendant } from 'slate';
declare namespace Utils {
    /**
     * Get the fragment data from a `DataTransfer` object.
     */
    const getFragmentData: (dataTransfer: DataTransfer) => SlateDescendant[] | undefined;
    /**
     * Set the currently selected fragment to the clipboard.
     */
    const setFragmentData: (dataTransfer: DataTransfer, editor: {
        apply(op: import("slate/lib/interfaces/operation").Operation): void;
        findKey(node: SlateNode): import("./key").Key;
        findPath(node: SlateNode): import("slate/lib/interfaces/path").Path;
        getDecorations(node: SlateNode): SlateRange[];
        handleInput(type: string, data?: string | DataTransfer | undefined, range?: SlateRange | undefined): void;
        isFocused(): boolean;
        isReadOnly(): boolean;
        blur(): void;
        focus(): void;
        deselect(): void;
        insertData(dataTransfer: DataTransfer): void;
        onBeforeInput(event: Event & {
            data: string | null;
            dataTransfer: DataTransfer | null;
            getTargetRanges(): StaticRange[];
            inputType: string;
            isComposing: boolean;
        }): void;
        onKeyDown(event: KeyboardEvent): void;
        redo(): void;
        undo(): void;
        hasDomNode(target: Node, options?: {
            editable?: boolean | undefined;
        }): boolean;
        toDomNode(node: SlateNode): HTMLElement;
        toDomPoint(point: import("slate/lib/interfaces/point").Point): import("./dom").DOMPoint;
        toDomRange(range: SlateRange): Range;
        toSlateNode(domNode: Node): SlateNode;
        findEventRange(event: any): SlateRange | undefined;
        toSlatePoint(domPoint: import("./dom").DOMPoint): import("slate/lib/interfaces/point").Point;
        toSlateRange(domRange: Range | StaticRange | Selection): SlateRange;
        onChange: (value: import("slate").Value, operations: import("slate/lib/interfaces/operation").Operation[]) => void;
        operations: import("slate/lib/interfaces/operation").Operation[];
        value: import("slate").Value;
        addAnnotation(this: import("slate").Editor, key: string, annotation: SlateRange): void;
        removeAnnotation(this: import("slate").Editor, key: string): void;
        setAnnotation(this: import("slate").Editor, key: string, props: Partial<SlateRange>): void;
        delete(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            distance?: number | undefined;
            unit?: "block" | "line" | "character" | "word" | undefined;
            reverse?: boolean | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        insertFragment(this: import("slate").Editor, fragment: SlateNode[], options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        insertText(this: import("slate").Editor, text: string, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | undefined;
        } | undefined): void;
        removeText(this: import("slate").Editor, text: string, options?: {
            at?: SlateRange | undefined;
        } | undefined): void;
        insertNodes(this: import("slate").Editor, nodes: import("slate/lib/interfaces/element").Element | import("slate/lib/interfaces/text").Text | import("slate").Value | SlateNode[], options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            match?: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        liftNodes(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            match?: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
        } | undefined): void;
        mergeNodes(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            match?: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        moveNodes(this: import("slate").Editor, options: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            match?: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            to: import("slate/lib/interfaces/path").Path;
        }): void;
        normalizeNodes(this: import("slate").Editor, options: {
            at: import("slate/lib/interfaces/path").Path;
        }): void;
        removeNodes(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            match?: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        setNodes(this: import("slate").Editor, props: Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value>, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            match?: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        splitNodes(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            match?: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            always?: boolean | undefined;
            height?: number | undefined;
        } | undefined): void;
        unwrapNodes(this: import("slate").Editor, options: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            match?: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            split?: boolean | undefined;
        }): void;
        wrapNodes(this: import("slate").Editor, element: import("slate/lib/interfaces/element").Element, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            match?: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            split?: boolean | undefined;
        } | undefined): void;
        addMarks(this: import("slate").Editor, marks: import("slate").Mark[], options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        removeMarks(this: import("slate").Editor, marks: import("slate").Mark[], options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        setMarks(this: import("slate").Editor, marks: import("slate").Mark[], props: Partial<import("slate").Mark>, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        toggleMarks(this: import("slate").Editor, marks: import("slate").Mark[], options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            hanging?: boolean | undefined;
        } | undefined): void;
        collapse(this: import("slate").Editor, options?: {
            edge?: "start" | "end" | "anchor" | "focus" | undefined;
        } | undefined): void;
        move(this: import("slate").Editor, options?: {
            distance?: number | undefined;
            unit?: "offset" | "line" | "character" | "word" | undefined;
            reverse?: boolean | undefined;
            edge?: "start" | "end" | "anchor" | "focus" | undefined;
        } | undefined): void;
        select(this: import("slate").Editor, target: import("slate/lib/interfaces/location").Location): void;
        setPoint(this: import("slate").Editor, props: Partial<import("slate/lib/interfaces/point").Point>, options: {
            edge?: "start" | "end" | "anchor" | "focus" | undefined;
        }): void;
        setSelection(this: import("slate").Editor, props: Partial<SlateRange>): void;
        flush(this: import("slate").Editor): void;
        normalize(this: import("slate").Editor, options?: {
            force?: boolean | undefined;
        } | undefined): void;
        withoutNormalizing(this: import("slate").Editor, fn: () => void): void;
        hasBlocks(this: import("slate").Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        hasInlines(this: import("slate").Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        hasTexts(this: import("slate").Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        isEmpty(this: import("slate").Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        isInline(this: import("slate").Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        isVoid(this: import("slate").Editor, element: import("slate/lib/interfaces/element").Element): boolean;
        createPathRef(this: import("slate").Editor, path: import("slate/lib/interfaces/path").Path, options?: {
            affinity?: "backward" | "forward" | null | undefined;
        } | undefined): import("slate").PathRef;
        createPointRef(this: import("slate").Editor, point: import("slate/lib/interfaces/point").Point, options?: {
            affinity?: "backward" | "forward" | null | undefined;
        } | undefined): import("slate").PointRef;
        createRangeRef(this: import("slate").Editor, range: SlateRange, options?: {
            affinity?: "backward" | "forward" | "outward" | "inward" | null | undefined;
        } | undefined): import("slate").RangeRef;
        annotations(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
        } | undefined): Iterable<import("slate").AnnotationEntry>;
        elements(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate/lib/interfaces/element").ElementEntry>;
        getActiveMarks(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            union?: boolean | undefined;
            hanging?: boolean | undefined;
        } | undefined): import("slate").Mark[];
        getAfter(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            distance?: number | undefined;
            unit?: "offset" | "block" | "line" | "character" | "word" | undefined;
        } | undefined): import("slate/lib/interfaces/point").Point | undefined;
        getAncestor(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate").AncestorEntry;
        getBefore(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            distance?: number | undefined;
            unit?: "offset" | "block" | "line" | "character" | "word" | undefined;
        } | undefined): import("slate/lib/interfaces/point").Point | undefined;
        getEdges(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location): [import("slate/lib/interfaces/point").Point, import("slate/lib/interfaces/point").Point];
        getEnd(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location): import("slate/lib/interfaces/point").Point;
        getFirst(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location): import("slate").NodeEntry;
        getFragment(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location): SlateDescendant[];
        getLast(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location): import("slate").NodeEntry;
        getLeaf(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate/lib/interfaces/text").TextEntry;
        getMatch(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, match: import("slate").NodeMatch): import("slate").NodeEntry | undefined;
        getNext(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, match: import("slate").NodeMatch): import("slate").NodeEntry | undefined;
        getNode(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate").NodeEntry;
        getParent(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate").AncestorEntry;
        getPath(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate/lib/interfaces/path").Path;
        getPoint(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            edge?: "start" | "end" | undefined;
        } | undefined): import("slate/lib/interfaces/point").Point;
        getPrevious(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, match: import("slate").NodeMatch): import("slate").NodeEntry | undefined;
        getRange(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, to?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined): SlateRange;
        getStart(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location): import("slate/lib/interfaces/point").Point;
        getText(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location): string;
        hasNode(this: import("slate").Editor, at: import("slate/lib/interfaces/location").Location, options?: {
            depth?: number | undefined;
            edge?: "start" | "end" | undefined;
        } | undefined): boolean;
        isStart(this: import("slate").Editor, point: import("slate/lib/interfaces/point").Point, at: import("slate/lib/interfaces/location").Location): boolean;
        isEnd(this: import("slate").Editor, point: import("slate/lib/interfaces/point").Point, at: import("slate/lib/interfaces/location").Location): boolean;
        isEdge(this: import("slate").Editor, point: import("slate/lib/interfaces/point").Point, at: import("slate/lib/interfaces/location").Location): boolean;
        levels(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate").NodeEntry>;
        marks(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate").MarkEntry>;
        matches(this: import("slate").Editor, options: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | import("slate/lib/interfaces/location").Span | undefined;
            match?: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | undefined;
            reverse?: boolean | undefined;
        }): Iterable<import("slate").NodeEntry>;
        nodes(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate").NodeEntry>;
        positions(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | undefined;
            unit?: "offset" | "block" | "line" | "character" | "word" | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate/lib/interfaces/point").Point>;
        texts(this: import("slate").Editor, options?: {
            at?: SlateRange | import("slate/lib/interfaces/point").Point | import("slate/lib/interfaces/path").Path | import("slate/lib/interfaces/location").Span | undefined;
            reverse?: boolean | undefined;
        } | undefined): Iterable<import("slate/lib/interfaces/text").TextEntry>;
        isNodeMatch(this: import("slate").Editor, entry: import("slate").NodeEntry, match: "value" | Partial<import("slate/lib/interfaces/element").Element> | Partial<import("slate/lib/interfaces/text").Text> | Partial<import("slate").Value> | "text" | "block" | "element" | "inline" | "inline-element" | "void" | ((entry: import("slate").NodeEntry) => boolean) | import("slate").NodeMatch[]): boolean;
        unhangRange(this: import("slate").Editor, range: SlateRange): SlateRange;
    }) => void;
}
export { Utils };
//# sourceMappingURL=utils.d.ts.map
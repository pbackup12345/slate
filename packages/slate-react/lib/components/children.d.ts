/// <reference types="react" />
import { Range, NodeEntry, Ancestor } from 'slate';
import { CustomAnnotationProps, CustomDecorationProps, CustomElementProps, CustomMarkProps } from './custom';
/**
 * Children.
 */
declare const Children: (props: {
    annotations: Record<string, Range>;
    decorate: (entry: NodeEntry) => Range[];
    decorations: Range[];
    node: Ancestor;
    renderAnnotation?: ((props: CustomAnnotationProps) => JSX.Element) | undefined;
    renderDecoration?: ((props: CustomDecorationProps) => JSX.Element) | undefined;
    renderElement?: ((props: CustomElementProps) => JSX.Element) | undefined;
    renderMark?: ((props: CustomMarkProps) => JSX.Element) | undefined;
    selection: Range | null;
}) => JSX.Element;
export default Children;
//# sourceMappingURL=children.d.ts.map
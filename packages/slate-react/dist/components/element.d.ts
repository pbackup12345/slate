import React from 'react';
import { Range, NodeEntry, Element as SlateElement } from 'slate';
import { CustomAnnotationProps, CustomDecorationProps, CustomElementProps, CustomMarkProps } from './custom';
declare const MemoizedElement: React.MemoExoticComponent<(props: {
    annotations: Record<string, Range>;
    decorate: (entry: NodeEntry) => Range[];
    decorations: Range[];
    element: SlateElement;
    renderAnnotation?: ((props: CustomAnnotationProps) => JSX.Element) | undefined;
    renderDecoration?: ((props: CustomDecorationProps) => JSX.Element) | undefined;
    renderElement?: ((props: CustomElementProps) => JSX.Element) | undefined;
    renderMark?: ((props: CustomMarkProps) => JSX.Element) | undefined;
    selection: Range | null;
}) => JSX.Element>;
export default MemoizedElement;
//# sourceMappingURL=element.d.ts.map
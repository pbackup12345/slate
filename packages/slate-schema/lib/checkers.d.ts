import { NodeEntry, Editor, MarkEntry, AnnotationEntry, AncestorEntry } from 'slate';
import { NodeRule, AnnotationRule, MarkRule } from './rules';
/**
 * Check an annotation object.
 */
export declare const checkAnnotation: (editor: Editor, entry: AnnotationEntry, rule: AnnotationRule) => import("./errors").AnnotationPropertyInvalidError | undefined;
/**
 * Check a mark object.
 */
export declare const checkMark: (editor: Editor, entry: MarkEntry, rule: MarkRule) => import("./errors").MarkPropertyInvalidError | undefined;
/**
 * Check a node object.
 */
export declare const checkNode: (editor: Editor, entry: NodeEntry, rule: NodeRule, rules: NodeRule[]) => import("./errors").ChildInvalidError | import("./errors").ChildMaxInvalidError | import("./errors").ChildMinInvalidError | import("./errors").ChildUnexpectedError | import("./errors").FirstChildInvalidError | import("./errors").LastChildInvalidError | import("./errors").MarkInvalidError | import("./errors").NextSiblingInvalidError | import("./errors").NodePropertyInvalidError | import("./errors").NodeTextInvalidError | import("./errors").ParentInvalidError | import("./errors").PreviousSiblingInvalidError | undefined;
/**
 * Check an ancestor node object's children.
 */
export declare const checkAncestor: (editor: Editor, entry: AncestorEntry, rule: NodeRule, ancestorRules: NodeRule[]) => import("./errors").ChildInvalidError | import("./errors").ChildMaxInvalidError | import("./errors").ChildMinInvalidError | import("./errors").ChildUnexpectedError | import("./errors").FirstChildInvalidError | import("./errors").LastChildInvalidError | import("./errors").MarkInvalidError | import("./errors").NextSiblingInvalidError | import("./errors").NodePropertyInvalidError | import("./errors").NodeTextInvalidError | import("./errors").ParentInvalidError | import("./errors").PreviousSiblingInvalidError | undefined;
/**
 * Check a parent node object's children.
 */
export declare const checkParent: (editor: Editor, entry: AncestorEntry, index: number, rule: NodeRule, childRule: NodeRule) => import("./errors").ChildInvalidError | import("./errors").ChildMaxInvalidError | import("./errors").ChildMinInvalidError | import("./errors").ChildUnexpectedError | import("./errors").FirstChildInvalidError | import("./errors").LastChildInvalidError | import("./errors").MarkInvalidError | import("./errors").NextSiblingInvalidError | import("./errors").NodePropertyInvalidError | import("./errors").NodeTextInvalidError | import("./errors").ParentInvalidError | import("./errors").PreviousSiblingInvalidError | undefined;
//# sourceMappingURL=checkers.d.ts.map
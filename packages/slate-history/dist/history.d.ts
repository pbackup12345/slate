import { Operation } from 'slate';
/**
 * `History` objects hold all of the operations that are applied to a value, so
 * they can be undone or redone as necessary.
 */
interface History {
    redos: Operation[][];
    undos: Operation[][];
}
declare namespace History {
    /**
     * Check if a value is a `History` object.
     */
    const isHistory: (value: any) => value is History;
}
export { History };
//# sourceMappingURL=history.d.ts.map
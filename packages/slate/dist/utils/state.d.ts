import { Editor, Path, PathRef, PointRef, RangeRef } from '..';
/**
 * Weak maps to keep track of instance-level editor state.
 */
export declare const DIRTY_PATHS: WeakMap<Editor, Path[]>;
export declare const NORMALIZING: WeakMap<Editor, boolean>;
export declare const FLUSHING: WeakMap<Editor, boolean>;
export declare const PATH_REFS: WeakMap<Editor, Set<PathRef>>;
export declare const POINT_REFS: WeakMap<Editor, Set<PointRef>>;
export declare const RANGE_REFS: WeakMap<Editor, Set<RangeRef>>;
//# sourceMappingURL=state.d.ts.map
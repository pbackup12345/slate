/**
 * Constants for string distance checking.
 */
/**
 * Check if a character is a word character. The `remaining` argument is used
 * because sometimes you must read subsequent characters to truly determine it.
 */
export declare const isWordCharacter: (char: string, remaining: string) => boolean;
/**
 * Get the distance to the end of the first character in a string of text.
 */
export declare const getCharacterDistance: (text: string) => number;
/**
 * Get the distance to the end of the first word in a string of text.
 */
export declare const getWordDistance: (text: string) => number;
//# sourceMappingURL=strings.d.ts.map
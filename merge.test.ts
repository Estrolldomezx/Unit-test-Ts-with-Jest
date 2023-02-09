import { merge } from "./merge";
import {describe, expect, test} from '@jest/globals';

describe('merge', () => {
    test('merges two sorted arrays into a single sorted array', () => {
        expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(merge([2, 4, 6], [1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
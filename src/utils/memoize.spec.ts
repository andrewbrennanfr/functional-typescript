import { memoize } from "@/utils/memoize";
import { describe, expect, it, jest } from "bun:test";

describe("memoize", () => {
    it("caches the result of a function based on the arguments", () => {
        const add = jest.fn((n1: number, n2: number): number => n1 + n2);
        const memoAdd = memoize(add);

        expect(memoAdd(2, 4)).toEqual(6);
        expect(add).toBeCalledTimes(1);
        expect(add).toBeCalledWith(2, 4);

        expect(memoAdd(6, 8)).toEqual(14);
        expect(add).toBeCalledTimes(2);
        expect(add).toBeCalledWith(6, 8);

        expect(memoAdd(2, 4)).toEqual(6);
        expect(memoAdd(6, 8)).toEqual(14);
        expect(add).toBeCalledTimes(2);
    });
});

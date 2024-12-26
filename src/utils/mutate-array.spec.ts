import { mutateArray } from "@/utils/mutate-array";
import { describe, expect, it } from "bun:test";

describe("mutateArray", () => {
    it("performs a series of mutations on an array", () => {
        const array = [2, 4, 6, 8];

        expect(
            mutateArray(array, [
                [0, 22],
                [1, 44],
            ]),
        ).toBe(array);

        expect(array).toEqual([22, 44, 6, 8]);
    });
});

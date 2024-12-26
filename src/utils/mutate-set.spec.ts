import { mutateSet } from "@/utils/mutate-set";
import { describe, expect, it } from "bun:test";

describe("mutateSet", () => {
    it("performs a series of mutations on a set", () => {
        const set = new Set([2, 4, 6, 8]);

        expect(mutateSet(set, [[22], [44], [66], [88]])).toBe(set);

        expect(set).toEqual(new Set([2, 4, 6, 8, 22, 44, 66, 88]));
    });
});

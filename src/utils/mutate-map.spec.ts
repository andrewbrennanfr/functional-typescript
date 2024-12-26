import { mutateMap } from "@/utils/mutate-map";
import { describe, expect, it } from "bun:test";

describe("mutateMap", () => {
    it("performs a series of mutations on a map", () => {
        const map = new Map([
            ["eight", 8],
            ["four", 4],
            ["six", 6],
            ["two", 2],
        ]);

        expect(
            mutateMap(map, [
                ["two", 22],
                ["four", 44],
            ]),
        ).toBe(map);

        expect(map).toEqual(
            new Map([
                ["eight", 8],
                ["four", 44],
                ["six", 6],
                ["two", 22],
            ]),
        );
    });
});

import { mutateObject } from "@/utils/mutate-object";
import { describe, expect, it } from "bun:test";

describe("mutateObject", () => {
    it("performs a series of mutations on an object", () => {
        const object = { eight: 8, four: 4, six: 6, two: 2 };

        expect(
            mutateObject(object, [
                ["two", 22],
                ["four", 44],
            ]),
        ).toBe(object);

        expect(object).toEqual({ eight: 8, four: 44, six: 6, two: 22 });
    });
});

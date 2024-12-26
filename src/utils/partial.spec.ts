import { partial } from "@/utils/partial";
import { describe, expect, it } from "bun:test";

describe("partial", () => {
    it("partially applies some arguments to a function", () => {
        expect(partial(Math.max, 2, 4)(6, 8)).toEqual(8);
    });
});

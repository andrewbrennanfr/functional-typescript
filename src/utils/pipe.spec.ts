import { pipe } from "@/utils/pipe";
import { describe, expect, it } from "bun:test";

describe("pipe", () => {
    it("pipes a list of values through a series of functions", () => {
        expect(
            pipe(2, 4, 6, 8)
                .step(Math.max)
                .step(Math.sqrt)
                .step(Math.round)
                .return(),
        ).toEqual(3);
    });
});

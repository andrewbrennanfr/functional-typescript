/** Partially applies the given function by providing the given initial arguments. */
export const partial =
    <T extends unknown[], U extends unknown[], V>(
        function_: (...arguments_: [...T, ...U]) => V,
        ...initial: T
    ): ((...final: U) => V) =>
    (...final) =>
        function_(...initial, ...final);

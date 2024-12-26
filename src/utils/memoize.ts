/** Memoizes the given function by caching the results of its execution. */
export const memoize =
    <T extends unknown[], U>(
        function_: (...arguments_: T) => U,
        hash: (arguments_: T) => string = JSON.stringify,
        cache: Record<string, U> = {},
    ): ((...arguments_: T) => U) =>
    (...arguments_) =>
        // eslint-disable-next-line functional/immutable-data
        (cache[hash(arguments_)] ??= function_(...arguments_));

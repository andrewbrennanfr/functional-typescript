type Pipe<T, U extends unknown[]> = {
    return: () => T;
    step: <V>(function_: (argument: T, ...arguments_: U) => V) => Pipe<V, []>;
};

/** Chains functions to sequentially transform an initial argument, returning the final result. */
export const pipe = <T, U extends unknown[]>(
    argument: T,
    ...arguments_: U
): Pipe<T, U> => ({
    // eslint-disable-next-line functional/functional-parameters
    return: () => argument,
    step: (function_) => pipe(function_(argument, ...arguments_)),
});

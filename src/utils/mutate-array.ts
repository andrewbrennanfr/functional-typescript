/** Mutates the given array by applying the given mutations. */
export const mutateArray = <T>(
    array: T[],
    [mutation, ...mutations]: [number, T][],
): T[] => {
    if (!mutation) return array;

    const [index, value] = mutation;
    // eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
    array[index] = value;

    return mutateArray(array, mutations);
};

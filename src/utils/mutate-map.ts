/** Mutates the given map by applying the given mutations. */
export const mutateMap = <T, U>(
    map: Map<T, U>,
    [mutation, ...mutations]: [T, U][],
): Map<T, U> => {
    if (!mutation) return map;

    const [key, value] = mutation;
    // eslint-disable-next-line functional/no-expression-statements, no-restricted-syntax
    map.set(key, value);

    return mutateMap(map, mutations);
};

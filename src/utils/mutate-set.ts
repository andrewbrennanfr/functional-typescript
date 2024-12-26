/** Mutates the given set by applying the given mutations. */
export const mutateSet = <T>(
    set: Set<T>,
    [mutation, ...mutations]: [T][],
): Set<T> => {
    if (!mutation) return set;

    const [value] = mutation;
    // eslint-disable-next-line functional/no-expression-statements, no-restricted-syntax
    set.add(value);

    return mutateSet(set, mutations);
};

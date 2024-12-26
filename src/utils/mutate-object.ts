/** Mutates the given object by applying the given mutations. */
export const mutateObject = <T>(
    object: Record<string, T>,
    [mutation, ...mutations]: [string, T][],
): Record<string, T> => {
    if (!mutation) return object;

    const [key, value] = mutation;
    // eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
    object[key] = value;

    return mutateObject(object, mutations);
};

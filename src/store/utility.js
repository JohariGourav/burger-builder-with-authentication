
// both parameters must be an object
export const updateObject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties,
    }
};
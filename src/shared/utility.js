
// both parameters must be an object
export const updateObject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties,
    }
};

// Form validation function
export const checkValidity = (value, rules) => {
    let isValid = true;
    if(!rules) {      // check if validation rule exist in form element
        return true;
    }
    if(rules.required) {
        isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLength) {
        isValid = value.trim().length >= rules.minLength && isValid;
    }
    if(rules.maxLength) {
        isValid = value.trim().length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }
    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}
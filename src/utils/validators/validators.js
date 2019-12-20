export const required = (value) => {
    if  (value) return undefined;
    return 'field is required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if  ( value.length < maxLength ) return undefined;
    return `field can't be longer than ${maxLength} symbols`;
}
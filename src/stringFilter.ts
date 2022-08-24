const regexReplace = /[^a-zA-Z0-9]/g;

const stringFilter = (input:string) => {
const newString = input.replace(regexReplace, " ");
return newString
};

export default stringFilter;
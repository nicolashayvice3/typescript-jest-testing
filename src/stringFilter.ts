const regexReplace = new RegExp("[^a-zA-Z0-9]")

const stringFilter = (input:string) => {
const newString = input.replace(regexReplace, " ");
return newString
};

export default stringFilter;
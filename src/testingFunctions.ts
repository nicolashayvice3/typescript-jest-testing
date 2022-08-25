const sum = (input:number, input2:number) => {
    return input + input2;
};

const neverRight = (input:string) => {
      if (typeof(input) !== String) {
        throw new Error('you are useless...');
      }
}

exports = {
  sum,
  neverRight
}

export default exports
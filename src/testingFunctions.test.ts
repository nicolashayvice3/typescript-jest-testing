import sum from './testingFunctions';


type testCases = {
    input: number,
    input2: number,
    expected: number
}

describe('adding 2 numbers to get a total value', () => {
    const testCases: testCases[] = [
        { input: 34, input2: 67, expected: 101 },
        { input: -5, input2: 25, expected: 20 },
        { input: 0, input2: 0, expected: 0 },
        { input: 34, input2: 67, expected: 101 },
        { input: 34, input2: 67, expected: 101 },
        { input: 34, input2: 67, expected: 101 },
    ];
    testCases.map((tc) => {
        it(`adds ${tc.input} & ${tc.input2}`, () => {
            const actual: number = sum(tc.input, tc.input2);

            expect(actual).toBe(tc.expected);
        })
        return 0;
    })
})
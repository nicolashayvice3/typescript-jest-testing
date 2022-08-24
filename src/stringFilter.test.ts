import stringFilter from './stringFilter';

type testCases = {
    input: string,
    expected: string
};

describe("replacing special characters with space characters in string", () => {
    const testCases: testCases[] = [
    { input: ";hello?world!", expected: " hello world " }
    ];

    testCases.map((tc) => {
        it(`replace special characters in ${tc.input}`, () => {
            const actual: string = stringFilter(tc.input);

            expect(actual).toBe(tc.expected);
        });
    });
});
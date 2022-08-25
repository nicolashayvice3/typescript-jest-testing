import stringFilter from './stringFilter';

type testCases = {
    input: string,
    expected: string
};

describe("replacing special characters with space characters in string", () => {
    const testCases: testCases[] = [
    { input: ";hello?world!", expected: " hello world " },
    { input: ";--helloworl!", expected: " hello world " },
    { input: "!!hello?world##", expected: " hello world " },
    { input: "--hello][world++", expected: " hello world " },
    { input: "#hello#world3", expected: " hello world " },
    { input: "hello wolrd", expected: " hello world " }
    ];

    testCases.map((tc) => {
        it(`replace special characters in ${tc.input}`, () => {
            const actual: string = stringFilter(tc.input);

            expect(actual).toBe(tc.expected);
        });
    });
});

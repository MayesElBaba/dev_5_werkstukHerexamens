const { capitalLetter } = require("../helpers/function");

describe('Test the capitalLetter function', () => {
    it('test with a correct name', () => {
        expect(capitalLetter("test")).toEqual("Test");
        expect(capitalLetter("other test")).toEqual("Other test");
        expect(capitalLetter("t")).toBe("T");
    });

    it('test with an incorrect name', () => {
        expect(capitalLetter(null)).toBe(null);
        expect(capitalLetter("")).toBe(null);
        expect(capitalLetter(123)).toBe(null);
    });
})
const extractStudyCode = require('./index'); // Ensure this path matches your project structure

describe('extractStudyCode', () => {
	test('should return the study reference code for a study', () => {
		expect(extractStudyCode('K7DTY-BXV7T')).toBe('K7DTY-BXV7T');
	});

	test('should return the main study reference for a substudy', () => {
		expect(extractStudyCode('H7DTZ-BXV6T-9')).toBe('H7DTZ-BXV6T');
	});
});

describe('extractStudyCode check for "-1" as suffix', () => {
	test('should produce an error for "-1" suffix', () => {
		expect(() => extractStudyCode('K7DTY-BXV6T-1')).toThrow(
			"Substudies can not have '-1' as suffix."
		);
	});
});

describe('extractStudyCode check for case sensitivity', () => {
	test('should return upper case', () => {
		expect(extractStudyCode('k7dty-bxv6t')).toBe('K7DTY-BXV6T');
		expect(extractStudyCode('k7dty-bxv6t-2')).toBe('K7DTY-BXV6T');
	});
});

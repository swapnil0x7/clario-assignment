const getStudyReference = require('./index'); // Ensure this path matches your project structure

describe('getStudyReference', () => {
	test('should return the study reference code for a study', () => {
		expect(getStudyReference('K7DTY-BXV7T')).toBe('K7DTY-BXV7T');
	});

	test('should return the main study reference for a substudy', () => {
		expect(getStudyReference('H7DTZ-BXV6T-9')).toBe('H7DTZ-BXV6T');
		expect(getStudyReference('B7DTQ-BXV6T-3')).toBe('B7DTQ-BXV6T');
	});
});

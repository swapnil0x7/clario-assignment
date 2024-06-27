// Function to get study reference from substudy reference code
function getStudyReference(reference) {
	// Transforming reference code to upper case
	const upperReference = reference.toUpperCase();
	const subStudyCodeArray = reference.split(/[-/]/);

	// Base case check for "-1" as suffix
	if (subStudyCodeArray.length === 3 && subStudyCodeArray[2] === '1') {
		throw new Error("Substudy code cannot have a suffix as '-1'.");
	}

	// Base case check for correct format
	if (subStudyCodeArray.length === 1) {
		return upperReference;
	} else if (subStudyCodeArray.length === 2 && /^\d+$/.test(subStudyCodeArray[1])) {
		return subStudyCodeArray[0];
	}

	const studyCode = subStudyCodeArray.slice(0, 2).join('-').toUpperCase();
	return studyCode;
}

// Test cases
console.log(getStudyReference('K7DTY-BXV6T'));
console.log(getStudyReference('K7DTY-BXV6T-2'));
console.log(getStudyReference('K7DTY/BXV6T/4'));
console.log(getStudyReference('k7dty-bxv6t-4'));
console.log(getStudyReference('K7DTY'));
console.log(getStudyReference('K7DTY-2'));
console.log(getStudyReference('K7DTY-BXV6T-1'));

module.exports = getStudyReference;

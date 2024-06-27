// returns reference code of study from substudy reference code
function getStudyReference(reference) {
	const subStudyCodeArray = reference.split(/[-/]/);
	const studyCode = subStudyCodeArray.slice(0, 2).join('-').toUpperCase();
	return studyCode;
}

console.log(getStudyReference('K7DTY-BXV6T'));
console.log(getStudyReference('K7DTY-BXV6T-2'));
console.log(getStudyReference('K7DTY-BXV6T-4'));

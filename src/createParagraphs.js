import cryptoTerms from './cryptoTerms';
import sentenceTypes from './sentenceTypes';

const createFillerText = (paragraphs) => {
	let str = '';
	for (let i = 0; i < paragraphs; i++) {
		str += createParagraph() + '\n';
	}
	return str;
}


const createParagraph = () => {
	let str ='';
	const terms = cryptoTerms.newTermsCreator();
	const paragraphSentenceLength = Math.floor(Math.random() * 3) + 3;

	for (let i = 0; i < paragraphSentenceLength; i++) {
		const randomSentIndex = Math.floor(Math.random() * sentenceTypes.length)
		str += createSentence(sentenceTypes[randomSentIndex], terms);
		if (i != length - 1) {
			str += ' ';
		}
	}

	return str;
}

const createSentence = (sentenceType, terms) => {
	let str = '';
	const wordTypeArray = sentenceType.split(' ')

	for (let i = 0; i < wordTypeArray.length; i++) {
		if (!terms[wordTypeArray[i]].length) {
			terms[wordTypeArray[i]] = cryptoTerms.newTermsCreator()[wordTypeArray[i]]
		}
		let wrd = terms[wordTypeArray[i]].splice(0, 1)[0]
		if (!i) {
			wrd = wrd.slice(0,1).toUpperCase() + wrd.slice(1, wrd.length)
		}
		if (i != wordTypeArray.length - 1) {
			wrd += ' ';
		} else {
			wrd += '.';
		}
		str += wrd;
	}

	return str

}


export default createFillerText;
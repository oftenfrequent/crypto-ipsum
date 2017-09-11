import terms from './cryptoTerms';

const createFillerText = (paragraphs) => {
	let str = '';
	for (let i = 0; i < paragraphs; i++) {
		str += createParagraph() + '\n';
	}
	return str;
}


const createParagraph = () => {
	const termArray = terms.full.slice(0);
	const sentenceWordLength = Math.floor(Math.random() * 7) + 5; //5;
	const paragraphSentenceLength = Math.floor(Math.random() * 3) + 3;

	let str ='';

	termArray.sort((a,b) => (Math.random() * 1) - (Math.random() * 1))

	for (let i = 0; i < paragraphSentenceLength; i++) {
		str += createSentence(sentenceWordLength, termArray.splice(0, sentenceWordLength));
		if (i != length - 1) {
			str += ' ';
		}
	}

	return str;
}


const createSentence = (length, wordArray) => {
	let str = '';
	for (let i = 0; i < length; i++) {
		let wrd = wordArray[i]
		if (!i) {
			wrd = wrd.slice(0,1).toUpperCase() + wrd.slice(1, wrd.length)
		}
		if (i != length - 1) {
			wrd += ' ';
		} else {
			wrd += '.';
		}
		str += wrd;
	}

	return str
	
}


export default createFillerText;
const noun = [
	'ledger',
	'cryptography',
	'proof',
	'block',
	'blockchain',
	'transaction',
	'wallet',
	'dapp',
	'oracle',
	'network',
	'merkle tree',
	'patricia tree',
	'public key',
	'private key',
	'ethereum',
	'smart contract',
	'virtual machine',
	'account',
	'contract',
	'nonce',
	'gas price',
	'wei',
	'protocol',
	'solidity',
	'address',
	'uint',
	'stack',
	'proof-of-work',
	'signature',
	'web3',
	'token',
	'DAO',
	'IPFS',
	'state',
]

const verb = [
	'sign',
	'hash',
	'build',
	'get',
	'send',
	'transact',
	'transfer',
	'verify',
	'fail',

]

const adjective = [
	'safe',
	'secure',
	'digital',
	'anonymous',
	'functional',
	'distributed',
	'peer-to-peer',
	'turing-complete',
	'trustless',
	'stateless',
]

const adverb = [
	'cryptographically',
	'securely',
	'concurrently',
	'successfully',
	'also',
	'however',
]

const preposition = [
	'in',
	'towards',
	'on',
	'with',
	'at',
	'from',
	'during',
	'throughout',
	'across',
]

const article = [
	'the',
	'a',
	'an',
	'it',
]

const conjunction = [
	'and',
	'if',
	'because',
	'when',
	'also',
]

const newTermsCreator = () => ({
	noun: noun.sort((a,b) => (Math.random() * 1) - (Math.random() * 1)).slice(0),
	verb: verb.sort((a,b) => (Math.random() * 1) - (Math.random() * 1)).slice(0),
	adjective: adjective.sort((a,b) => (Math.random() * 1) - (Math.random() * 1)).slice(0),
	adverb: adverb.sort((a,b) => (Math.random() * 1) - (Math.random() * 1)).slice(0),
	preposition: preposition.sort((a,b) => (Math.random() * 1) - (Math.random() * 1)).slice(0),
	article: article.sort((a,b) => (Math.random() * 1) - (Math.random() * 1)).slice(0),
	conjunction: conjunction.sort((a,b) => (Math.random() * 1) - (Math.random() * 1)).slice(0),
})

export default {
	noun,
	verb,
	adjective,
	adverb,
	preposition,
	article,
	conjunction,
	newTermsCreator,
	full: noun.concat(adjective, adverb, preposition, article, conjunction),
}
const things = [
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
]

const verbs = [
	'sign',
	'hash',
	'build',
	'get',
	'send',
	'transact',
	'transfer',
]

const adjectives = [
	'safe',
	'secure',
	'digital',
	'anonymous',
	'functional',
	'distributed',
	'peer-to-peer',
	'turing-complete',
]

const prepositions = [
	'in',
	'towards',
	'on',
]

export default {
	things,
	verbs,
	adjectives,
	prepositions,
	full: things.concat(verbs, adjectives, prepositions),
}
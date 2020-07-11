declare module 'jwk' {
	export type KeyType = 'EC' | 'RSA' | 'oct'
	export type KeyOperation = 'sign' | 'verify' | 'encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'deriveKey' | 'deriveBits'
	export type KeyIntendedUsage = 'sig' | 'enc'
	export default interface JsonWebKey {
		kty: KeyType
		key_ops: KeyOperation[]
		alg?: string
		kid?: string
		use?: KeyIntendedUsage
	}

	export interface EllipticCurveJWK extends JsonWebKey {
		kty: 'EC'
		crv: 'P-256' | 'P-384' | 'P-521'
		x: string
		y: string
	}
	export interface SecretEllipticCurveJWK extends EllipticCurveJWK {
		d: string
	}

	export interface RsaJWK extends JsonWebKey {
		kty: 'RSA'
		n: string
		e: string
	}
	export interface SecretRsaJWK extends RsaJWK {
		d: string
		p?: string
		q?: string
		dp?: string
		dq?: string
		qi?: string
		oth?: Array<{
			r: string
			d: string
			t: string
		}>
	}

	export interface SymmetricJWK extends JsonWebKey {
		kty: 'oct'
		k: string
	}
}

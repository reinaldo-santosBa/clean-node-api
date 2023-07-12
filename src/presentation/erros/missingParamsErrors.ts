export class MissingParamError extends Error {
	constructor(paramError: string) {
		super(`Missing parameter: ${paramError}`);
		this.name = 'MissingParamError';
	}
}
import { SignUpController } from './signUp';
import { MissingParamError } from '../erros/missingParamsErrors';
describe('SignUp Controller', () => {
	test('Should return 400 if no name is provided',()=> {
		const sut = new SignUpController();
		const httpRequest = {
			body: {
				email: 'any_email@email.com',
				password: 'any_password',
				passwordConfirmation: 'any_password'
			}
		};
		const httpResponse = sut.handle(httpRequest);
		expect(httpResponse.statusCode).toBe(400);
		expect(httpResponse.body).toEqual(new MissingParamError('name'));
	});
});

describe('SignUp Controller', () => {
	test('Should return 400 if no email is provided', () => {
		const sut = new SignUpController();
		const httpRequest = {
			body: {
				name: 'any_name',
				password: 'any_password',
				passwordConfirmation: 'any_password'
			}
		};
		const httpResponse = sut.handle(httpRequest);
		expect(httpResponse.statusCode).toBe(400);
		expect(httpResponse.body).toEqual(new MissingParamError('email'));
	});
});
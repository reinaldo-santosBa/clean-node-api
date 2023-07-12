import { MissingParamError } from '../erros/missingParamsErrors';
import { badRequest } from '../helpers/http-helper';
import { HttpRequest, HttpResponse } from '../protocols/http';	

export class SignUpController {
	handle(httpRequest: HttpRequest): HttpResponse {
		if (!httpRequest.body.name) {
			return badRequest(new MissingParamError('name'));
		} else if (!httpRequest.body.email) {
			return badRequest(new MissingParamError('email'));
		} 
	}
}
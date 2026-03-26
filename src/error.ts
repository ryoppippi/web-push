export class WebPushError extends Error {
	statusCode: number;
	headers: Headers;
	body: string;
	endpoint: string;

	constructor(
		message: string,
		statusCode: number,
		headers: Headers,
		body: string,
		endpoint: string,
	) {
		super(message);
		this.name = 'WebPushError';
		this.statusCode = statusCode;
		this.headers = headers;
		this.body = body;
		this.endpoint = endpoint;
	}
}

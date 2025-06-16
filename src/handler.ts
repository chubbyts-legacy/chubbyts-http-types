import type { Response, ServerRequest } from './message.js';

export type Handler = (request: ServerRequest) => Promise<Response>;

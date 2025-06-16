import type { Response, ServerRequest } from './message.js';
import type { Handler } from './handler.js';

export type Middleware = (request: ServerRequest, handler: Handler) => Promise<Response>;

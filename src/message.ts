import type { Duplex } from 'stream';

export type Query = { [key: string]: Query | Array<Query> | string };

export type Uri = {
  schema: string;
  userInfo: string;
  host: string;
  port: number | undefined;
  path: string;
  query: Query;
  fragment: string;
};

export type Message = {
  protocolVersion: string;
  headers: Record<string, Array<string>>;
  body: Duplex;
};

export type Method = 'CONNECT' | 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | 'TRACE';

export type Request = {
  method: Method;
  uri: Uri;
} & Message;

export type Response = {
  status: number;
  reasonPhrase: string;
} & Message;

export type ServerRequest = Request & {
  attributes: Record<string, unknown>;
};

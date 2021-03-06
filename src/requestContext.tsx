export type Meta = {
  id?: string;
  httpEquiv?: string;
  name: string;
  content: string;
}
export type RequestContext = {
  url: string;
  pathname: string;
  mode: string;
  search: string;
  encrypt: boolean;
  version: number;
  method: string;
  locale: string;
  params: any;
  autoPersist: boolean;
  body: { [key: string]: any };
  query: { [key: string]: any };
  hostname?: string;
  cookies: { [key: string]: any };
  protocol: string;
  headers: { [key: string]: any };
  useragent: any;
  baseUrl: string;
  storagePrefix?: string;
  proxies: { [key: string]: string };
  env: { [key: string]: string };
  dateTime: Date;
  services: any[];
  environment: 'none' | 'server' | 'client';
  flags: any,
  title: string,
  meta: Meta[],
};

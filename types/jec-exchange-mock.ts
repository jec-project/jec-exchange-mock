/*!
 * JEC EXCHANGE-MOCK Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <http://jecproject.org>
 */

declare module "jec-exchange-mock" {

import { WebJsletParams, JsletContext, Jslet, SecurityContext, SessionContext, 
         HttpRequest, HttpResponse, SessionError, HttpJslet } from "jec-exchange";
import { Singleton, Decorator, AbstractDecoratorConnector, Interface,
         JcadContext, Logger } from "jec-commons";

export class JsletContextMockBuilder {
    constructor();
    private _jslets;
    private _securityContext;
    private _statusInfo;
    private _sessionContext;
    private _directoryPath;
    private _sourcePath;
    private _logger;
    jslets(jslets: Jslet[]): JsletContextMockBuilder;
    securityContext(securityContext: SecurityContext): JsletContextMockBuilder;
    sessionContext(sessionContext: SessionContext): JsletContextMockBuilder;
    statusInfo(statusInfo: any): JsletContextMockBuilder;
    directoryPath(directoryPath: string): JsletContextMockBuilder;
    sourcePath(sourcePath: string): JsletContextMockBuilder;
    logger(logger: Logger): JsletContextMockBuilder;
    reset(): JsletContextMockBuilder;
    build(): JsletContext;
    static create(): JsletContextMockBuilder;
}
export class JsletConnector extends AbstractDecoratorConnector {
    constructor(jcadReference: string, decorator: Decorator);
}
export class WebJsletDecorator implements Decorator {
    constructor();
    decorate(target: any, params: WebJsletParams): any;
}
export class JsletMockContextManager {
    constructor();
    private _jcadContext;
    private initContext(jcadReference, decoratorClass);
    private removeContext(jcadReference);
    createContext(jcadContext: JcadContext): void;
    deleteContext(): void;
    hasContext(jcadReference: string): boolean;
}
export class JsletMock implements Singleton {
    constructor();
    private static INSTANCE;
    private static _locked;
    static getInstance(): JsletMock;
    private _id;
    private _contextManager;
    private initObj();
    createContext(): void;
    deleteContext(): void;
    getId(): string;
}
export class HttpRequestMock implements HttpRequest {
    constructor();
    private _baseUrl;
    private _body;
    private _cookies;
    private _hostname;
    private _ip;
    private _method;
    private _originalUrl;
    private _path;
    private _protocol;
    private _query;
    private _secured;
    private _headerMap;
    private initObj();
    getBaseUrl(): string;
    getBody(): any;
    getCookies(): any;
    getHostname(): string;
    getIp(): string;
    getMethod(): string;
    getOriginalUrl(): string;
    getPath(): string;
    getProtocol(): string;
    getQuery(): any;
    isSecured(): boolean;
    accepts(type: string): boolean;
    acceptsCharset(charset: string): boolean;
    acceptsEncoding(encoding: string): boolean;
    acceptsLanguage(lang: string): boolean;
    getHeader(field: string): string;
    isTypeOfContent(type: string | string[]): boolean;
    setBaseUrl(baseUrl: string): void;
    setBody(body: any): void;
    setCookies(cookies: any): void;
    setHostname(hostname: string): void;
    setIp(ip: string): void;
    setMethod(method: string): void;
    setOriginalUrl(originalUrl: string): void;
    setPath(path: string): void;
    setProtocol(protocol: string): void;
    setQuery(query: any): void;
    secured(secured: boolean): void;
    setHeader(field: string, value: string): void;
}
export class JsletContextMock implements JsletContext {
    constructor();
    private _jsletMap;
    private _securityContext;
    private _statusInfo;
    private _sessionContext;
    private _directoryPath;
    private _sourcePath;
    private _logger;
    private initObj();
    addJslet(jslet: Jslet): void;
    getJslet(url: string): Jslet;
    getSecurityContext(): SecurityContext;
    getSessionContext(): SessionContext;
    authenticate(req: HttpRequest, res: HttpResponse, result: (error?: any) => void): void;
    invalidateSession(req: HttpRequest, res: HttpResponse, result: (error?: SessionError) => void): void;
    getStatusInfo(): any;
    getDirectoryPath(): string;
    getSourcePath(): string;
    getLogger(): Logger;
    setSecurityContext(securityContext: SecurityContext): void;
    setStatusInfo(statusInfo: any): void;
    setSessionContext(sessionContext: SessionContext): void;
    setDirectoryPath(directoryPath: string): void;
    setSourcePath(sourcePath: string): void;
    setLogger(logger: Logger): void;
}
}
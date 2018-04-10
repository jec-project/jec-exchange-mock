"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpRequestMock {
    constructor() {
        this._baseUrl = null;
        this._body = null;
        this._cookies = null;
        this._hostname = null;
        this._ip = null;
        this._method = null;
        this._originalUrl = null;
        this._path = null;
        this._protocol = null;
        this._query = null;
        this._secured = false;
        this._headerMap = null;
        this.initObj();
    }
    initObj() {
        this._headerMap = new Map();
    }
    getBaseUrl() {
        return this._baseUrl;
    }
    getBody() {
        return this._body;
    }
    getCookies() {
        return this._cookies;
    }
    getHostname() {
        return this._hostname;
    }
    getIp() {
        return this._ip;
    }
    getMethod() {
        return this._method;
    }
    getOriginalUrl() {
        return this._originalUrl;
    }
    getPath() {
        return this._path;
    }
    getProtocol() {
        return this._protocol;
    }
    getQuery() {
        return this._query;
    }
    isSecured() {
        return this._secured;
    }
    accepts(type) {
        return true;
    }
    acceptsCharset(charset) {
        return true;
    }
    acceptsEncoding(encoding) {
        return true;
    }
    acceptsLanguage(lang) {
        return true;
    }
    getHeader(field) {
        return this._headerMap.get(field);
    }
    isTypeOfContent(type) {
        return true;
    }
    setBaseUrl(baseUrl) {
        this._baseUrl = baseUrl;
    }
    setBody(body) {
        this._body = body;
    }
    setCookies(cookies) {
        this._cookies = cookies;
    }
    setHostname(hostname) {
        this._hostname = hostname;
    }
    setIp(ip) {
        this._ip = ip;
    }
    setMethod(method) {
        this._method = method;
    }
    setOriginalUrl(originalUrl) {
        this._originalUrl = originalUrl;
    }
    setPath(path) {
        this._path = path;
    }
    setProtocol(protocol) {
        this._protocol = protocol;
    }
    setQuery(query) {
        this._query = query;
    }
    secured(secured) {
        this._secured = secured;
    }
    setHeader(field, value) {
        this._headerMap.set(field, value);
    }
}
exports.HttpRequestMock = HttpRequestMock;

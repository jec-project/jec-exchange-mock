"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsletContextMock {
    constructor() {
        this._jsletMap = null;
        this._securityContext = null;
        this._statusInfo = null;
        this._sessionContext = null;
        this._directoryPath = null;
        this._sourcePath = null;
        this._logger = null;
        this.initObj();
    }
    initObj() {
        this._jsletMap = new Map();
    }
    addJslet(jslet) {
        const patterns = jslet.getUrlPatterns();
        let len = patterns.length;
        while (len--) {
            this._jsletMap.set(patterns[len], jslet);
        }
    }
    getJslet(url) {
        return this._jsletMap.get(url);
    }
    getSecurityContext() {
        return this._securityContext;
    }
    getSessionContext() {
        return this._sessionContext;
    }
    authenticate(req, res, result) {
    }
    invalidateSession(req, res, result) {
    }
    getStatusInfo() {
        return this._statusInfo;
    }
    getDirectoryPath() {
        return this._directoryPath;
    }
    getSourcePath() {
        return this._sourcePath;
    }
    getLogger() {
        return this._logger;
    }
    setSecurityContext(securityContext) {
        this._securityContext = securityContext;
    }
    setStatusInfo(statusInfo) {
        return this._statusInfo = statusInfo;
    }
    setSessionContext(sessionContext) {
        this._sessionContext = sessionContext;
    }
    setDirectoryPath(directoryPath) {
        this._directoryPath = directoryPath;
    }
    setSourcePath(sourcePath) {
        this._sourcePath = sourcePath;
    }
    setLogger(logger) {
        this._logger = logger;
    }
}
exports.JsletContextMock = JsletContextMock;

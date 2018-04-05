"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JsletContextMock_1 = require("../mock/JsletContextMock");
class JsletContextMockBuilder {
    constructor() {
        this._jslets = null;
        this._securityContext = null;
        this._statusInfo = null;
        this._sessionContext = null;
        this._directoryPath = null;
        this._sourcePath = null;
        this._logger = null;
    }
    jslets(jslets) {
        this._jslets = this._jslets ? this._jslets.concat(jslets) : jslets;
        return this;
    }
    securityContext(securityContext) {
        this._securityContext = securityContext;
        return this;
    }
    sessionContext(sessionContext) {
        this._sessionContext = sessionContext;
        return this;
    }
    statusInfo(statusInfo) {
        this._statusInfo = statusInfo;
        return this;
    }
    directoryPath(directoryPath) {
        this._directoryPath = directoryPath;
        return this;
    }
    sourcePath(sourcePath) {
        this._sourcePath = sourcePath;
        return this;
    }
    logger(logger) {
        this._logger = logger;
        return this;
    }
    reset() {
        const mock = new JsletContextMock_1.JsletContextMock();
        let len = this._jslets ? this._jslets.length : 0;
        this._securityContext = null;
        this._statusInfo = null;
        this._sessionContext = null;
        this._directoryPath = null;
        this._sourcePath = null;
        this._logger = null;
        this._jslets = null;
        return this;
    }
    build() {
        const mock = new JsletContextMock_1.JsletContextMock();
        let len = this._jslets ? this._jslets.length : 0;
        mock.setSecurityContext(this._securityContext);
        mock.setStatusInfo(this._statusInfo);
        mock.setSessionContext(this._sessionContext);
        mock.setDirectoryPath(this._directoryPath);
        mock.setSourcePath(this._sourcePath);
        mock.setLogger(this._logger);
        while (len--) {
            mock.addJslet(this._jslets[len]);
        }
        return mock;
    }
    static create() {
        const builder = new JsletContextMockBuilder();
        return builder;
    }
}
exports.JsletContextMockBuilder = JsletContextMockBuilder;

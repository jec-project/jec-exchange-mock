"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jec_commons_1 = require("jec-commons");
const JsletMockContextManager_1 = require("./jslet/JsletMockContextManager");
class JsletMock {
    constructor() {
        this._id = null;
        this._contextManager = null;
        if (JsletMock._locked || JsletMock.INSTANCE) {
            throw new jec_commons_1.SingletonError(JsletMock);
        }
        JsletMock._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (JsletMock.INSTANCE === null) {
            JsletMock._locked = false;
            JsletMock.INSTANCE = new JsletMock();
        }
        return JsletMock.INSTANCE;
    }
    initObj() {
        this._id = jec_commons_1.GlobalGuidGenerator.getInstance().generate();
        this._contextManager = new JsletMockContextManager_1.JsletMockContextManager();
    }
    createContext() {
        const factory = new jec_commons_1.JcadContextFactory();
        const context = factory.create();
        this._contextManager.createContext(context);
    }
    deleteContext() {
        this._contextManager.deleteContext();
    }
    getId() {
        return this._id;
    }
}
JsletMock.INSTANCE = null;
JsletMock._locked = true;
exports.JsletMock = JsletMock;

/*!
 * JEC EXCHANGE-MOCK Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC Projects: <https://github.com/pechemann/JEC>
 */

declare module "jec-exchange-mock" {

import { WebJsletParams } from "jec-exchange";
import { Singleton, Decorator, AbstractDecoratorConnector, Interface,
         JcadContext } from "jec-commons";

export class JsletConnector extends AbstractDecoratorConnector {    constructor(jcadReference: string, decorator: Decorator);}export class WebJsletDecorator implements Decorator {    constructor();    decorate(target: any, params: WebJsletParams): any;}export class JsletMockContextManager {    constructor();    private _jcadContext;    private initContext(jcadReference, decoratorClass);    private removeContext(jcadReference);    createContext(jcadContext: JcadContext): void;    deleteContext(): void;    hasContext(jcadReference: string): boolean;}export class JsletMock implements Singleton {    constructor();    private static INSTANCE;    private static _locked;    static getInstance(): JsletMock;    private _id;    private _contextManager;    private initObj();    createContext(): void;    deleteContext(): void;    getId(): string;}}
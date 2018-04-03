//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {Logger} from "jec-commons";
import {JsletContext, Jslet, SecurityContext, SessionContext, HttpRequest,
        HttpResponse, SessionError, HttpJslet} from "jec-exchange";

/**
* A helper class that represents mock object for the <code>JsletContext</code>
* interface.
*/
export class JsletContextMock implements JsletContext {

  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

    /**
    * Creates a new <code>JsletContextMock</code> instance.
    */
  constructor() {
    this.initObj();
  }

  ////////////////////////////////////////////////////////////////////////////
  // Private properties
  ////////////////////////////////////////////////////////////////////////////

  /**
   * A map of registered jslets for this context.
   */
  private _jsletMap:Map<string, Jslet> = null;

  /**
   * The reference to the security context for this context.
   */
  private _securityContext:SecurityContext = null;

  /**
   * The reference to the status info for this context.
   */
  private _statusInfo:any = null;

  /**
   * The reference to the session context for this context.
   */
  private _sessionContext:SessionContext = null;

  /**
   * The reference to the directory path for this context.
   */
  private _directoryPath:string = null;

  /**
   * The reference to the source path for this context.
   */
  private _sourcePath:string = null;

  /**
   * The reference to the logger for this context.
   */
  private _logger:Logger = null;

  ////////////////////////////////////////////////////////////////////////////
  // Private methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object;
   */
  private initObj():void {
    this._jsletMap = new Map<string, Jslet>();
  }

  ////////////////////////////////////////////////////////////////////////////
  // JsletContext public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public addJslet(jslet:Jslet):void {
    const patterns:string[] = (jslet as HttpJslet).getUrlPatterns();
    let len:number = patterns.length;
    while(len--) {
      this._jsletMap.set(patterns[len], jslet);
    }
  }

  /**
   * @inheritDoc
   */
  public getJslet(url:string):Jslet {
    return this._jsletMap.get(url);
  }

  /**
   * @inheritDoc
   */
  public getSecurityContext():SecurityContext {
    return this._securityContext;
  }

  /**
   * @inheritDoc
   */
  public getSessionContext():SessionContext {
    return this._sessionContext;
  }

  /**
   * @inheritDoc
   */
  public authenticate(req:HttpRequest, res:HttpResponse,
                                             result:(error?:any) => void):void {
  }

  /**
   * @inheritDoc
   */
  public invalidateSession(req:HttpRequest, res:HttpResponse,
                                    result:(error?:SessionError) => void):void {
  }

  /**
   * @inheritDoc
   */
  public getStatusInfo():any {
    return this._statusInfo;
  }

  /**
   * @inheritDoc
   */
  public getDirectoryPath():string {
    return this._directoryPath;
  }

  /**
   * @inheritDoc
   */
  public getSourcePath():string {
    return this._sourcePath;
  }

  /**
   * @inheritDoc
   */
  public getLogger():Logger {
    return this._logger;
  }

  ////////////////////////////////////////////////////////////////////////////
  // JsletContextMock public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Sets the security context for this context.
   * 
   * @param {SecurityContext} securityContext the new security context for this
   *                                          context.
   */
  public setSecurityContext(securityContext:SecurityContext):void {
    this._securityContext = securityContext;
  }

  /**
   * Sets the status info for this context.
   * 
   * @param {any} statusInfo the new status info for this context.
   */
  public setStatusInfo(statusInfo:any):void {
    return this._statusInfo = statusInfo;
  }

  /**
   * Sets the session context for this context.
   * 
   * @param {SessionContext} sessionContext the new session context for this
   *                                        context.
   */
  public setSessionContext(sessionContext:SessionContext):void {
    this._sessionContext = sessionContext;
  }

  /**
   * Sets the directory path for this context.
   * 
   * @param {string} directoryPath the new directory path for this context.
   */
  public setDirectoryPath(directoryPath:string):void {
    this._directoryPath = directoryPath;
  }

  /**
   * Sets the source path for this context.
   * 
   * @param {string} sourcePath the new source path for this context.
   */
  public setSourcePath(sourcePath:string):void {
    this._sourcePath = sourcePath;
  }

  /**
   * Sets the logger for this context.
   * 
   * @param {Logger} logger the new logger for this context.
   */
  public setLogger(logger:Logger):void {
    this._logger = logger;
  }
}

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
import {JsletContextMock} from "../mock/JsletContextMock";

/**
* A helper class that creates <code>JsletContext</code> mock objects.
*/
export class JsletContextMockBuilder {

  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

    /**
    * Creates a new <code>JsletContextMockBuilder</code> instance.
    */
  constructor() {}

  ////////////////////////////////////////////////////////////////////////////
  // Private properties
  ////////////////////////////////////////////////////////////////////////////

  /**
   * An array of registered jslets for this builder.
   */
  private _jslets:Jslet[] = null;

  /**
   * The reference to the security context for this builder.
   */
  private _securityContext:SecurityContext = null;

  /**
   * The reference to the status info for this builder.
   */
  private _statusInfo:any = null;

  /**
   * The reference to the session context for this builder.
   */
  private _sessionContext:SessionContext = null;

  /**
   * The reference to the directory path for this builder.
   */
  private _directoryPath:string = null;

  /**
   * The reference to the source path for this builder.
   */
  private _sourcePath:string = null;

  /**
   * The reference to the logger for this builder.
   */
  private _logger:Logger = null;

  ////////////////////////////////////////////////////////////////////////////
  // JsletContext public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Adds the specified array of jslets to the new context.
   * 
   * @param {Array<Jslet>} jslets the array of jslets to add to the new context.
   * @return {JsletContextMockBuilder} the reference to this builder.
   */
  public jslets(jslets:Jslet[]):JsletContextMockBuilder {
    this._jslets = this._jslets ? this._jslets.concat(jslets) : jslets;
    return this;
  }

  /**
   * Sets the security context for the new context.
   * 
   * @param {SecurityContext} securityContext the security context for the new
   *                                          context.
   * @return {JsletContextMockBuilder} the reference to this builder.
   */
  public securityContext(
                      securityContext:SecurityContext):JsletContextMockBuilder {
    this._securityContext = securityContext;
    return this;
  }

  /**
   * Sets the session context for the new context.
   * 
   * @param {SessionContext} sessionContext the session context for the new
   *                                        context.
   * @return {JsletContextMockBuilder} the reference to this builder.
   */
  public sessionContext(sessionContext:SessionContext):JsletContextMockBuilder {
    this._sessionContext = sessionContext;
    return this;
  }

  /**
   * Sets the status info for the new context.
   * 
   * @param {any} statusInfo the status info for the new context.
   * @return {JsletContextMockBuilder} the reference to this builder.
   */
  public statusInfo(statusInfo:any):JsletContextMockBuilder {
    this._statusInfo = statusInfo;
    return this;
  }

  /**
   * Sets the directory path for the new context.
   * 
   * @param {string} directoryPath the directory path for the new context.
   * @return {JsletContextMockBuilder} the reference to this builder.
   */
  public directoryPath(directoryPath:string):JsletContextMockBuilder {
    this._directoryPath = directoryPath;
    return this;
  }

  /**
   * Sets the source path for the new context.
   * 
   * @param {string} sourcePath the source path for the new context.
   * @return {JsletContextMockBuilder} the reference to this builder.
   */
  public sourcePath(sourcePath:string):JsletContextMockBuilder {
    this._sourcePath = sourcePath;
    return this;
  }

  /**
   * Sets the logger for the new context.
   * 
   * @param {Logger} logger the logger for the new context.
   * @return {JsletContextMockBuilder} the reference to this builder.
   */
  public logger(logger:Logger):JsletContextMockBuilder {
    this._logger = logger;
    return this;
  }

  /**
   * Resets all builder properties.
   * 
   * @return {JsletContextMockBuilder} the reference to this builder.
   */
  public reset():JsletContextMockBuilder {
    const mock:JsletContextMock = new JsletContextMock();
    let len:number = this._jslets ? this._jslets.length : 0;
    this._securityContext = null;
    this._statusInfo = null;
    this._sessionContext = null;
    this._directoryPath = null;
    this._sourcePath = null;
    this._logger = null;
    this._jslets = null;
    return this;
  }

  /**
   * Builds a new mock implementation of the <code>JsletContext</code>
   * initialized with the builder properties.
   * 
   * @return {JsletContext} a new mock implementation of the
   *                        <code>JsletContext</code> interface.
   */
  public build():JsletContext {
    const mock:JsletContextMock = new JsletContextMock();
    let len:number = this._jslets ? this._jslets.length : 0;
    mock.setSecurityContext(this._securityContext);
    mock.setStatusInfo(this._statusInfo);
    mock.setSessionContext(this._sessionContext);
    mock.setDirectoryPath(this._directoryPath);
    mock.setSourcePath(this._sourcePath);
    mock.setLogger(this._logger);
    while(len--) {
      mock.addJslet(this._jslets[len]);
    }
    return mock;
  }
}

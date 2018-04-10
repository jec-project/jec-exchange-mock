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

import {HttpRequest} from "jec-exchange";

/**
* A helper class that represents mock object for the <code>HttpRequest</code>
* interface.
*/
export class HttpRequestMock implements HttpRequest {

  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

    /**
    * Creates a new <code>HttpRequestMock</code> instance.
    */
  constructor() {
    this.initObj();
  }

  ////////////////////////////////////////////////////////////////////////////
  // Private properties
  ////////////////////////////////////////////////////////////////////////////

  /**
   * The base url for this <code>HttpRequest</code> object.
   */
  private _baseUrl:string = null;

  /**
   * The body for this <code>HttpRequest</code> object.
   */
  private _body:any = null;
  
  /**
   * The cookies for this <code>HttpRequest</code> object.
   */
  private _cookies:any = null;
  
  /**
   * The hostname for this <code>HttpRequest</code> object.
   */
  private _hostname:string = null;

  /**
   * The ip for this <code>HttpRequest</code> object.
   */
  private _ip:string = null;

  /**
   * The HTP method for this <code>HttpRequest</code> object.
   */
  private _method:string = null;
  
  /**
   * The original url for this <code>HttpRequest</code> object.
   */
  private _originalUrl:string = null;

  /**
   * The path for this <code>HttpRequest</code> object.
   */
  private _path:string = null;

  /**
   * The protocol for this <code>HttpRequest</code> object.
   */
  private _protocol:string = null;

  /**
   * The query for this <code>HttpRequest</code> object.
   */
  private _query:any = null;

  /**
   * The security flag for this <code>HttpRequest</code> object.
   */
  private _secured:boolean = false;

  /**
   * A map used to store values for HTTP headers for this
   * <code>HttpRequest</code> object.
   */
  private _headerMap:Map<string, string> = null;

  ////////////////////////////////////////////////////////////////////////////
  // JsletContext public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._headerMap = new Map<string, string>();
  }

  ////////////////////////////////////////////////////////////////////////////
  // JsletContext public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public getBaseUrl():string {
    return this._baseUrl;
  }

  /**
   * @inheritDoc
   */
  public getBody():any {
    return this._body;
  }

  /**
   * @inheritDoc
   */
  public getCookies():any {
    return this._cookies;
  }
  
  /**
   * @inheritDoc
   */
  public getHostname():string {
    return this._hostname;
  }

  /**
   * @inheritDoc
   */
  public getIp():string {
    return this._ip;
  }
  
  /**
   * @inheritDoc
   */
  public getMethod():string {
    return this._method;
  }

  /**
   * @inheritDoc
   */
  public getOriginalUrl():string {
    return this._originalUrl;
  }
  
  /**
   * @inheritDoc
   */
  public getPath():string {
    return this._path;
  }

  /**
   * @inheritDoc
   */
  public getProtocol():string {
    return this._protocol;
  }
  
  /**
   * @inheritDoc
   */
  public getQuery():any {
    return this._query;
  }

  /**
   * @inheritDoc
   */
  public isSecured():boolean {
    return this._secured;
  }
  
  /**
   * @inheritDoc
   */
  public accepts(type:string):boolean {
    // TODO: unimplemented method
    return true;
  }
  
  /**
   * @inheritDoc
   */
  public acceptsCharset(charset:string):boolean {
    // TODO: unimplemented method
    return true;
  }
  
  /**
   * @inheritDoc
   */
  public acceptsEncoding(encoding:string):boolean {
    // TODO: unimplemented method
    return true;
  }
  
  /**
   * @inheritDoc
   */
  public acceptsLanguage(lang:string):boolean {
    // TODO: unimplemented method
    return true;
  }
  
  /**
   * @inheritDoc
   */
  public getHeader(field:string):string {
    return this._headerMap.get(field);
  }

  /**
   * @inheritDoc
   */
  public isTypeOfContent(type:string | string[]):boolean {
    // TODO: unimplemented method
    return true;
  }

  ////////////////////////////////////////////////////////////////////////////
  // JsletContextMock public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Sets the base url for this <code>HttpRequest</code> object.
   * 
   * @param {string} baseUrl the new base url for this <code>HttpRequest</code>
   *                         object.
   */
  public setBaseUrl(baseUrl:string):void {
    this._baseUrl = baseUrl;
  }
  
  /**
   * Sets the body for this <code>HttpRequest</code> object.
   * 
   * @param {any} body the new body for this <code>HttpRequest</code> object.
   */
  public setBody(body:any):void {
    this._body = body;
  }

  /**
   * Sets the cookies for this <code>HttpRequest</code> object.
   * 
   * @param {any} cookies the new cookies for this <code>HttpRequest</code>
   *                      object.
   */
  public setCookies(cookies:any):void {
    this._cookies = cookies;
  }

  /**
   * Sets the hostname for this <code>HttpRequest</code> object.
   * 
   * @param {string} hostname the new hostname for this <code>HttpRequest</code>
   *                      object.
   */
  public setHostname(hostname:string):void {
    this._hostname = hostname;
  }

  /**
   * Sets the ip for this <code>HttpRequest</code> object.
   * 
   * @param {string} ip the new ip for this <code>HttpRequest</code>
   *                      object.
   */
  public setIp(ip:string):void {
    this._ip = ip;
  }
  
  /**
   * Sets the HTP method for this <code>HttpRequest</code> object.
   * 
   * @param {string} method the new HTTP method for this 
   *                        <code>HttpRequest</code> object.
   */
  public setMethod(method:string):void {
    this._method = method;
  }
  
  /**
   * Sets the original url for this <code>HttpRequest</code> object.
   * 
   * @param {string} originalUrl the new original url for this 
   *                             <code>HttpRequest</code> object.
   */
  public setOriginalUrl(originalUrl:string):void {
    this._originalUrl = originalUrl;
  }
  
  /**
   * Sets the path for this <code>HttpRequest</code> object.
   * 
   * @param {string} path the new path for this <code>HttpRequest</code> object.
   */
  public setPath(path:string):void {
    this._path = path;
  }

  /**
   * Sets the protocol for this <code>HttpRequest</code> object.
   * 
   * @param {string} protocol the new path for this <code>HttpRequest</code>
   *                          object.
   */
  public setProtocol(protocol:string):void {
    this._protocol = protocol;
  }

  /**
    * Sets the query for this <code>HttpRequest</code> object.
    * 
    * @param {any} query the new query for this <code>HttpRequest</code> object.
    */
  public setQuery(query:any):void {
    this._query = query;
  }
  
  /**
    * Sets the security flag for this <code>HttpRequest</code> object.
    * 
    * @param {boolean} secured the new security flag for this
    *                          <code>HttpRequest</code> object.
    */
   public secured(secured:boolean):void {
    this._secured = secured;
  }

  /**
   * Adds a header field to this <code>HttpRequest</code> object.
   * 
   * @param {string} field the new header field to add.
   * @param {string} value the value associated with the header field to add.
   */
  public setHeader(field:string, value:string):void {
    this._headerMap.set(field, value);
  }
}

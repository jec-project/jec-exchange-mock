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

import {Singleton, SingletonError, GlobalGuidGenerator, JcadContextFactory,
        GuidGenerator, JcadContext} from "jec-commons";
import {JsletMockContextManager} from "./jslet/JsletMockContextManager";

/**
 * A singleton that allows to manage contexts for Unit Testing of jslets.
 */
export class JsletMock implements Singleton {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>JsletMock</code> instance.
   */
  constructor() {
    if(JsletMock._locked || JsletMock.INSTANCE) {
      throw new SingletonError(JsletMock);
    }
    JsletMock._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>JsletMock</code> singleton instance reference.
   */
  private static INSTANCE:JsletMock = null;

  /**
   * Prevents <code>JsletMock</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * Returns a reference to the <code>JsletMock</code> singleton.
   *
   * @return {JsletMock} a reference to the <code>JsletMock<code>
   *                        singleton.
   */
  public static getInstance():JsletMock{
    if(JsletMock.INSTANCE === null) {
      JsletMock._locked = false;
      JsletMock.INSTANCE = new JsletMock();
    }
    return JsletMock.INSTANCE;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The GUID for this singleton.
   */
  private _id:string = null;

  /**
   * The context manager for this singleton.
   */
  private _contextManager:JsletMockContextManager = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._id = GlobalGuidGenerator.getInstance().generate();
    this._contextManager = new JsletMockContextManager();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new MOCK context for testing jslets.
   */
  public createContext():void {
    const factory:JcadContextFactory = new JcadContextFactory();
    const context:JcadContext = factory.create();
    this._contextManager.createContext(context);
  }
  
  /**
   * Disposes an existing jslet MOCK context.
   */
  public deleteContext():void {
    this._contextManager.deleteContext();
  }
  
  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
}
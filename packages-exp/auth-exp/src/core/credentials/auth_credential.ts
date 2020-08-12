/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PhoneOrOauthTokenResponse } from '../../api/authentication/mfa';
import { AuthCore } from '../../model/auth';
import { IdTokenResponse } from '../../model/id_token';
import { EmailAuthCredential, OAuthCredential, PhoneAuthCredential } from './';
import { debugFail } from '../util/assert';

export class AuthCredential {
  protected constructor(
    readonly providerId: string,
    readonly signInMethod: string
  ) {}

  static fromJSON(json: object | string): AuthCredential | null {
    for (const fn of [
      /* SAMLAuthCredential.fromJSON, */
      OAuthCredential.fromJSON,
      EmailAuthCredential.fromJSON,
      PhoneAuthCredential.fromJSON
    ]) {
      const credential = fn(json);
      if (credential) {
        return credential;
      }
    }
    return null;
  }

  toJSON(): object {
    return debugFail('not implemented');
  }

  _getIdTokenResponse(_auth: AuthCore): Promise<PhoneOrOauthTokenResponse> {
    return debugFail('not implemented');
  }
  _linkToIdToken(_auth: AuthCore, _idToken: string): Promise<IdTokenResponse> {
    return debugFail('not implemented');
  }
  _getReauthenticationResolver(_auth: AuthCore): Promise<IdTokenResponse> {
    return debugFail('not implemented');
  }
}

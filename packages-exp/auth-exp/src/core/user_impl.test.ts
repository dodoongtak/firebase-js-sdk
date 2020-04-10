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

import { expect } from 'chai';
import { UserImpl } from './user_impl';
import { mockAuth } from '../../test/mock_auth';

describe('core/user_impl', () => {
  const auth = mockAuth('foo', 'i-am-the-api-key');

  describe('constructor', () => {
    it('attaches required fields', () => {
      const user = new UserImpl({ uid: 'uid', auth });
      expect(user.auth).to.eq(auth);
      expect(user.uid).to.eq('uid');
    });

    it('attaches optional fields if provided', () => {
      const user = new UserImpl({
        uid: 'uid',
        auth,
        displayName: 'displayName',
        email: 'email',
        phoneNumber: 'phoneNumber',
        photoURL: 'photoURL'
      });

      expect(user.displayName).to.eq('displayName');
      expect(user.email).to.eq('email');
      expect(user.phoneNumber).to.eq('phoneNumber');
      expect(user.photoURL).to.eq('photoURL');
    });

    it('sets optional fields to null if not provided', () => {
      const user = new UserImpl({ uid: 'uid', auth });
      expect(user.displayName).to.eq(null);
      expect(user.email).to.eq(null);
      expect(user.phoneNumber).to.eq(null);
      expect(user.photoURL).to.eq(null);
    });
  });

  describe('#getIdToken', () => {
    it('throws', () => {
      const user = new UserImpl({ uid: 'uid', auth });
      expect(() => user.getIdToken()).to.throw();
    });
  });

  describe('#getIdTokenResult', () => {
    it('throws', () => {
      const user = new UserImpl({ uid: 'uid', auth });
      expect(() => user.getIdTokenResult()).to.throw();
    });
  });

  describe('#reload', () => {
    it('throws', () => {
      const user = new UserImpl({ uid: 'uid', auth });
      expect(() => user.reload()).to.throw();
    });
  });

  describe('#delete', () => {
    it('throws', () => {
      const user = new UserImpl({ uid: 'uid', auth });
      expect(() => user.delete()).to.throw();
    });
  });
});

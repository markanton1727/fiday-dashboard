import { IAppContext } from '../contexts/AppContext';

import { User } from '../types/User';

class AppClient implements IAppContext {
  user: User;

  /**
   * Creates an instance of AppClient.
   * @memberof AppClient
   */
  constructor() {
    this.user = {
      id: '5e8d8hg8h8h8q8faf8g8f8f',
      name: 'Dwight Schrute',
      email: 'dwight.schrute@welcomedeveloper.com',
      created_at: new Date(),
      updatedAt: new Date(),
      role: 'admin'
    };
  }
}

export default AppClient;

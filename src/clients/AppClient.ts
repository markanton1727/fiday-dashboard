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
      id: 0,
      name: 'Dwight Schrute',
      email: 'dwight.schrute@welcomedeveloper.com',
      created_at: new Date(),
      updatedAt: new Date(),
      role: 'admin',
      is_logged: false,
      is_fetching: false,
      is_success: false,
      is_error: false,
      error_message: "",
    };
  }
}

export default AppClient;

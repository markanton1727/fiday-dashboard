/**
 * Represents a user.
 */
export type User = {
  /**
   * The user's unique identifier
   * @type {number}
   * @memberof User
   * @property id
   * @required
   * @example
   * 1
   */
  id: number;

  /**
   * The user's name
   * @type {string}
   * @memberof User
   * @property name
   * @required
   * @example
   * "John Smith"
   */
  name: string;

  /**
   * The user's email address
   * @type {string}
   * @memberof User
   * @property email
   * @required
   * @example
   * "john.smith@welcomedeveloper.com"
   */
  email: string;

  /**
   * The user's password
   * @type {string}
   * @memberof User
   * @property password
   * @optional
   * @example
   * "password"
   */
  password?: string;

  /**
   * The user's created date
   * @type {Date}
   * @memberof User
   * @property createdAt
   * @optional
   * @example
   * "2020-01-01T00:00:00.000Z"
   */
  created_at?: Date;

  /**
   * The user's updated date
   * @type {Date}
   * @memberof User
   * @property updatedAt
   * @optional
   * @example
   * "2020-01-01T00:00:00.000Z"
   */
  updatedAt?: Date;

  /**
   * The user's deleted date
   * @type {Date}
   * @memberof User
   * @property deletedAt
   * @optional
   * @example
   * "2020-01-01T00:00:00.000Z"
   */
  deletedAt?: Date;

  /**
   * The user's role
   * @type {string}
   * @memberof User
   * @property role
   * @required
   * @example
   * true
   * @default
   * false
   */
  role: string;

  /**
   * The user's logged status
   * @type {boolean}
   * @memberof User
   * @property is_logged
   * @optional
   * @example
   * false
   * @default
   * false
   */
   is_logged: boolean;

  /**
   * The user's fetching status
   * @type {boolean}
   * @memberof User
   * @property is_fetching
   * @optional
   * @example
   * false
   * @default
   * false
   */
  is_fetching: boolean;

  /**
   * The user's success status
   * @type {boolean}
   * @memberof User
   * @property is_success
   * @optional
   * @example
   * false
   * @default
   * false
   */
  is_success: boolean;

  /**
   * The user's error status
   * @type {boolean}
   * @memberof User
   * @property is_error
   * @optional
   * @example
   * false
   * @default
   * false
   */
  is_error: boolean;

  /**
   * The user's error message
   * @type {string}
   * @memberof User
   * @property errorMessage
   * @required
   * @example
   * true
   * @default
   * ""
   */
  error_message: string,
  
};

import React, { useState, useEffect } from 'react';
import { useAppDispatch , useAppSelector} from "../hooks"
import { login, clearState } from '../features/UserSlice'
import { useHistory } from 'react-router-dom';


export const Login = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");
  const history = useHistory();

  // const { is_fetching, is_success, is_error, error_message } = useAppSelector(
  //   userSelector
  // );
  const { is_fetching, is_success, is_logged, is_error, error_message } = useAppSelector((state) => state.user.value);

  useEffect(() => {
    if (is_error) {
      // toast.error(error_message);
      dispatch(clearState());
    }
    if (is_success) {
      dispatch(clearState());
      history.push('/');
    }
  }, [is_error, is_success, is_logged, dispatch, history]);
  
  return (
    <>
      <h1>LOGIN</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="text" />
      </div>

      {error && <div className='error'>{error}</div>}

      <button type="submit"
      onClick={() => dispatch(
        login(
          {
            id: 1,
            name: "ivan",
            email: "jherrera@gmail.com",
            role: '',
            is_logged: true,
            is_fetching: false,
            is_success: true,
            is_error: false,
            error_message: "",
          }
        ))}>Login</button>
    </>
  );
}
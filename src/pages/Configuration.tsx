import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveUsers } from "../features/usersSlice";
import { User } from "../types/User";
import { RootState } from '../core/store';

export const UserList = () => {
  const dispatch = useDispatch();  
  const { users, loading } = useSelector((state: RootState) => state.users)

  useEffect(()=> {
    dispatch(retrieveUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  
  return (
    <div>
      { users && users.map((user: User) =>(
        <div key={user.id}>
          User Id: {user.id}
          User Name: {user.name}
          User Email: {user.email}
          User createdAt: {user.created_at}
        </div>
      ))}
    </div>
  );
};
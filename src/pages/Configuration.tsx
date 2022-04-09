import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveUsers } from "../features/usersSlice";
import { RootState } from '../core/store';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'name', width: 130 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'created_at', headerName: 'CreatedAt', width: 150 }
];

export const UserList = () => {
  const dispatch = useDispatch();  
  const { users, loading } = useSelector((state: RootState) => state.users)

  useEffect(()=> {
    dispatch(retrieveUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  
  return (
    <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
  );
};
import { styled, Typography } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveUsers } from "../../../features/usersSlice";
import { RootState } from '../../../core/store';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';

import {
  Edit as EditIcon
} from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const UserList = () => {
  const dispatch = useDispatch();  
  const { users, loading } = useSelector((state: RootState) => state.users)

  useEffect(()=> {
    dispatch(retrieveUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  
  return (
    <>
      <Typography variant="h5">Usuarios</Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>            
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">
                  <EditIcon/>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
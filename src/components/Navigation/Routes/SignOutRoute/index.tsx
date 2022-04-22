import { useEffect } from 'react';
import { ListItemButton, ListItemIcon, ListItemText, IconButton, styled } from '@mui/material';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { useAppDispatch , useAppSelector} from "../../../../hooks"
import { logout, clearState } from '../../../../features/UserSlice'
import { useHistory } from 'react-router-dom';

export const SignOutRoute = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

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

  const handleSignOutClick = () => {
    alert('Signing Out...');
    dispatch(logout());
  };

  return (
    <StyledListItemButton onClick={handleSignOutClick}>
      <ListItemIcon>
        <IconButton size="small">
          <ExitToApp />
        </IconButton>
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </StyledListItemButton>
  );
};

const StyledListItemButton = styled(ListItemButton)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

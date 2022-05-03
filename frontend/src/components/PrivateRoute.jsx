import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? (
    <Outlet />
  ) : (
    <>
      <Navigate to='/login' /> {toast.error('You need to be logged in')}
    </>
  );
};

export default PrivateRoute;

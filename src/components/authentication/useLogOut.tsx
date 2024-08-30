import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';

import { useNavigate } from 'react-router-dom';
export function useLogOut() {
  const queryClient = useQueryClient();
  console.log();
  const navigate = useNavigate();
  const {
    mutate: logout,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      queryClient.clear();
      console.log('logout');
      navigate('/');
      // toast.success('Logout Successfully');
      window.localStorage.setItem('loggedIn', '');
    },
    onError: (err) => {
      console.log('QueryError: ', err);
    },
  });

  return { logout, isPending, isSuccess };
}

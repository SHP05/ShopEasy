import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { logout as logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      queryClient.clear();
      toast.success('Logout Successfully');
      window.localStorage.setItem('loggedIn', 'false');
      navigate('/');
    },
    onError: (err) => {
      console.log('QueryError: ', err);
    },
  });

  return { logout, isPending };
}

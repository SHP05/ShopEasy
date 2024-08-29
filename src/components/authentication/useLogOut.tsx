import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';

export function useLogOut() {
  const queryClient = useQueryClient();
  console.log();

  const {
    mutate: logout,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      queryClient.clear();
    },
    onError: (err) => {
      console.log('QueryError: ', err);
    },
  });

  return { logout, isPending, isSuccess };
}

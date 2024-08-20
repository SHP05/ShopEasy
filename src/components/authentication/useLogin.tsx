import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: (data: loginType) => {
      console.log('Data passed to loginApi:', data);
      return loginApi(data);
    },
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(['user'], user);
      toast.success('Login Successfully');
    },
    onError: (err) => {
      console.log('QueryErr: ', err);
    },
  });

  return { login, isPending };
}

import { useMutation } from '@tanstack/react-query';
import { register as registerApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export default function useRegister() {
  const { mutate: register, isPending } = useMutation({
    mutationFn: registerApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success('you have successfully Register');
    },
  });

  return { register, isPending };
}

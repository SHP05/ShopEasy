import { getServicesApi as serviceApi } from '../../services/apiService';
import { useQuery } from '@tanstack/react-query';

export function useAllServices(id: getServicesType) {
  console.log(id);

  const { isPending, data, error } = useQuery({
    queryKey: ['services', id],
    queryFn: () => serviceApi(id),
  });

  return { data, isPending, error };
}

import useAxiosSecure from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useClients = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: clientsData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['clientsData'],
        queryFn: async () => {

            const res = await axiosSecure.get("client");
            return res.data;
        },
    });
    return [clientsData, loading, refetch];
};

export default useClients;
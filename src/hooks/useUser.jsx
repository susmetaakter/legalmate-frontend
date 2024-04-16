import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxios';

const useUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: userData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['userData'],
        queryFn: async () => {

            const res = await axiosSecure.get("users");
            return res.data;
        },
    });
    return [userData, loading, refetch];
};

export default useUser;
import useAuth from './useAuth';
import useAxiosSecure from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useCurrentCases = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data: currentCasesData = [], isLoading: currentCasesLoading, refetch } = useQuery({
        queryKey: ['currentCasesData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/case/email/${user?.email}`);
            return res.data;
        },
    });
    return [currentCasesData, currentCasesLoading, refetch];
};

export default useCurrentCases;
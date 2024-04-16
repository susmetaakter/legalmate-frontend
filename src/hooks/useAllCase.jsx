
import useAuth from './useAuth';
import useAxiosSecure from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAllCases = () => {
    const [axiosSecure] = useAxiosSecure();
    const { currentUser } = useAuth();
    const { data: allCasesData = [], isLoading: allCaseLoading, refetch } = useQuery({
        queryKey: ['allCasesData'],
        queryFn: async () => {

            const res = await axiosSecure.get("case/approved"); 
            return res.data;
        },
    });
    return [allCasesData, allCaseLoading, refetch];
};

export default useAllCases;
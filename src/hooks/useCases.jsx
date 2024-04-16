import useAxiosSecure from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useCases = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: casesData = [], isLoading: caseLoading, refetch } = useQuery({
        queryKey: ['casesData'],
        queryFn: async () => {

            const res = await axiosSecure.get(`/case`);
            return res.data;
        },
    });
    return [casesData, caseLoading, refetch];
};

export default useCases;
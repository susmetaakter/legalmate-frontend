import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxios";
import useAuth from "./useAuth";

const useCurrentAttorney = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: currentAttorneyData = [], isLoading: attorneyLoading, refetch } = useQuery({
        queryKey: ['currentAttorneyData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`attorney/email/${user?.email}`);
            return res.data;
        },
    });
    return [currentAttorneyData, attorneyLoading, refetch];
};

export default useCurrentAttorney;
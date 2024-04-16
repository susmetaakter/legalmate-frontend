import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxios";
import useAuth from "./useAuth";

const useIndividualPaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data: paymentsData = [], isLoading: paymentsLoading, refetch: paymentsRefetch } = useQuery({
        queryKey: ['paymentsData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`payment/history/${user?.email}`);
            return res.data;
        },
    });
    return [paymentsData, paymentsLoading, paymentsRefetch];
};

export default useIndividualPaymentHistory;
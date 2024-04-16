import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxios";
import useAuth from "./useAuth";

const useCurrentClient = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: currentClientData = [], isLoading: clientLoading, refetch } = useQuery({
        queryKey: ['currentClientData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`client/email/${user?.email}`);
            return res.data;
        },
    });
    return [currentClientData, clientLoading, refetch];
};

export default useCurrentClient;
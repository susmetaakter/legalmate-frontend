import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxios";

const useAttorneys = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: attorneysData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['attorneysData'],
        queryFn: async () => {
            // const res = await fetch('/attorneys.json');
            // const data = await res.json();
            // return data;

            const res = await axiosSecure.get("attorney");
            return res.data;
        },
    });
    return [attorneysData, loading, refetch];
};

export default useAttorneys;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxios";

const usePracticeAreas = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: practiceAreasData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['practiceAreasData'],
        queryFn: async () => {
            const res = await axiosSecure.get("practiceArea");
            return res.data;
        },
    });
    return [practiceAreasData, loading, refetch];
};

export default usePracticeAreas;
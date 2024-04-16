import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxios";

const useBlog = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: blogData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['blogData'],
        queryFn: async () => {
            const res = await axiosSecure.get("blog");
            return res.data;
        },
    });
    return [blogData, loading, refetch];
};

export default useBlog;
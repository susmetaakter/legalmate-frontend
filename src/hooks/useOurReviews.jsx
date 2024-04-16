import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxios";

const useOurReviews = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: ourReviewsData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['ourReviewsData'],
        queryFn: async () => {
            const res = await axiosSecure.get("clientReview");
            return res.data;
        },
    });
    return [ourReviewsData, loading, refetch];
};

export default useOurReviews;
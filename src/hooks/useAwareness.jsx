import React from 'react';
import useAxiosSecure from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAwareness = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: awarenessData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['awarenessData'],
        queryFn: async () => {

            const res = await axiosSecure.get("awareness");
            return res.data;
        },
    });
    return [awarenessData, loading, refetch];
};

export default useAwareness;
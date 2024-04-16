import React from 'react';
import useAxiosSecure from './useAxios';
import { useQuery } from '@tanstack/react-query';

const usePaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: paymentData = [], isLoading: paymentLoading, refetch:paymentRefetch } = useQuery({
        queryKey: ['paymentData'],
        queryFn: async () => {
            const res = await axiosSecure.get("payment/history");
            return res.data;
        },
    });
    return [paymentData, paymentLoading, paymentRefetch];
};

export default usePaymentHistory;
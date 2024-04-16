import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxios";

const useChat = () => {
  const { currentUser } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: chats = [], isLoading: chatLoading, refetch: chatRefetch, } = useQuery({
      queryKey: ["chats"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/chat/${currentUser._id}`);
        return res.data;
      },
    });

  return [chats, chatLoading, chatRefetch];
};


export default useChat;

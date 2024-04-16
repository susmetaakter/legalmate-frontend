import { useEffect, useState } from 'react';
import { RxDotFilled } from "react-icons/rx";
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxios';
import useUsers from '../../hooks/useUserData';
import PageLoader from '../../components/PageLoader';

const Conversation = ({ chat, onlineUser, setMessageReceiver }) => {
    const { currentUser, loading } = useAuth();
    const [userData, UserDataLoading] = useUsers();
    const [axiosSecure] = useAxiosSecure()
    const [chatReceiver, setChatReceiver] = useState();

    if (loading && UserDataLoading) {
        return <PageLoader />
    }

    useEffect(() => {
        
        const receiver = chat?.members.find(id => id !== currentUser?._id)

        axiosSecure.get(`/users/id/${receiver}`)
            .then(res => {
                setChatReceiver(res.data)
                setMessageReceiver(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [chat, currentUser]);

    const searchOnlineUser = onlineUser?.some(user => user.userId === chatReceiver?._id)
    return (
        <div>
            <div className='bg-dark hover:bg-primary/20 shadow-md shadow-white/20 p-2 rounded-md mb-2 duration-300 group'>
                <div className='flex gap-2 items-center'>
                    <div className='relative w-12 h-12 shadow-md rounded-full overflow-hidden mr-2'>
                        {
                            chatReceiver?.image?
                            <img src={chatReceiver?.image} className='w-full h-full object-cover object-center rounded-full' alt={chatReceiver?.name} />:
                            <p className='w-full h-full bg-primary text-dark text-xl flex items-center justify-center font-bold rounded-full uppercase shadow-lg'>{chatReceiver?.name?.slice(0, 2)}</p>
                        }
                        <RxDotFilled className={searchOnlineUser ? "text-3xl absolute top-7 right-0 text-black" : "hidden"} />
                    </div>
                    <h2 className='text-white text-xl capitalize group-hover:underline'>{chatReceiver?.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Conversation;
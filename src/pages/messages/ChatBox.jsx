
import { useEffect, useState } from 'react';
import StartMessage from './StartMessage';
import InputEmoji from "react-input-emoji";
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2'

// react icons
import { BsFillSendFill } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import useAxiosSecure from '../../hooks/useAxios';

const ChatBox = ({ currentChat, currentUser, textMessage, setTextMessage, setNewMessage, setMessage, message, onlineUser, chatRefetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const [chatReceiver, setChatReceiver] = useState();

    useEffect(() => {
        const receiver = currentChat?.members.find(id => id !== currentUser?._id)
        axiosSecure.get(`/users/id/${receiver}`)
            .then(res => {
                setChatReceiver(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [currentChat, currentUser]);

    const searchOnlineUser = onlineUser?.some(user => user.userId === chatReceiver?._id)

    const sendNewMessage = () => {
        const newMessage = {
            chatId: currentChat._id,
            senderId: currentUser._id,
            text: textMessage
        }
        axiosSecure.post('/message', newMessage)
            .then(res => {
                if (res.status === 200) {
                    setNewMessage(res.data)
                    setMessage([...message, res.data])
                    setTextMessage('')
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleOnEnter = (event) => {
        const newMessage = {
            chatId: currentChat._id,
            senderId: currentUser._id,
            text: event
        }
        axiosSecure.post('/message', newMessage)
            .then(res => {
                if (res.status === 200) {
                    setNewMessage(res.data)
                    setMessage([...message, res.data])
                    setTextMessage('')
                }
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className='bg-lightDark shadow-lg p-3 rounded-md'>
            <div className='flex items-center justify-between bg-dark shadow-md shadow-white/20 p-2 rounded-md mb-2 duration-300'>
                <div className='flex items-center gap-2 '>
                    <div className='relative w-12 h-12 shadow-md rounded-full overflow-hidden mr-2'>
                        {
                            chatReceiver?.image?
                            <img src={chatReceiver?.image} className='w-full h-full object-cover object-center rounded-full' alt={chatReceiver?.name} />:
                            <p className='w-full h-full object-cover bg-primary text-dark text-xl flex items-center justify-center font-bold rounded-full uppercase shadow-lg'>{chatReceiver?.name?.slice(0, 2)}</p>
                        }
                    </div>

                    <div className='flex flex-col justify-center'>
                        <h2 className='text-white text-xl capitalize'>{chatReceiver?.name}</h2>
                        <p className='text-sm text-dark'>{searchOnlineUser ? "online " : "offline"}</p>
                    </div>
                </div>
            </div>

            <div className='h-[54vh] overflow-y-scroll p-3 rounded-md'>
                {
                    message.length !== 0 ? message.map((sms, index) =>
                        <StartMessage sms={sms} key={index} />
                    ) : <p className='flex justify-center items-center pt-44'>Send A New Message</p>
                }
            </div>
            <div className='flex items-center'>
                <InputEmoji
                    value={textMessage}
                    onChange={setTextMessage}
                    onEnter={handleOnEnter}
                    placeholder="Type a message"
                />
                <button onClick={sendNewMessage}
                    className='h-10 w-14 bg-green rounded-md shadow-md text-white flex items-center justify-center duration-300 mr-5'
                >
                    <BsFillSendFill size='20' />
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
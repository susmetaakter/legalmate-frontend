import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { io } from "socket.io-client";
import Breadcrumbs from '../../components/Breadcrumbs';
import useAxiosSecure from '../../hooks/useAxios';
import useChat from '../../hooks/useChat';
import useAuth from '../../hooks/useAuth';
import Conversation from './Conversation';
import ChatBox from './ChatBox';
import PageLoader from '../../components/PageLoader';

const Messages = () => {
    const [chats,chatLoading, chatRefetch] = useChat();
    const [axiosSecure] = useAxiosSecure()
    const [currentChat, setCurrentChat] = useState();
    const [onlineUser, setOnlineUser] = useState([]);
    const [socket, setSocket] = useState(null);
    const [textMessage, setTextMessage] = useState('')
    const [newMessage, setNewMessage] = useState(null)
    const [message, setMessage] = useState([])
    const { currentUser } = useAuth();
    const [messageReceiver, setMessageReceiver] = useState();
    const [notification, setNotification] = useState();

    useEffect(() => {
        axiosSecure.get(`/message/${currentChat?._id}`)
            .then(res => {
                const newData = res.data
                setMessage(newData)
            })
            .catch(error => {
                console.log(error)
            })
    }, [currentChat, chats]);

    // Connect with Socket.io 
    useEffect(() => {
        const newSocket = io("https://hire-wave-chat.onrender.com/")
        setSocket(newSocket)
        return () => {
            newSocket.disconnect()
        };
    }, [currentUser]);


    // Add Online user  On socket.io
    useEffect(() => {
        if (socket === null) return;
        socket.emit("addNewUsers", currentUser?._id);
        socket.on("getOnlineUsers", (res) => {
            setOnlineUser(res)
        });
        return () => {
            socket.off("getOnlineUsers")
        }
    }, [socket]);


    // send Message using socket.io
    useEffect(() => {
        if (socket === null) return;
        const receiver = currentChat?.members.find(id => id !== currentUser?._id)
        socket.emit("sendMessage", { ...newMessage, receiver })
    }, [newMessage]);

    // receive message and notification
    useEffect(() => {
        if (socket === null) return;
        socket.on("getMessages", res => {
            if (currentChat?._id !== res.chatId) return;
            setMessage([...message, res]);
        });
        // socket.on("getNotification", (res) => {
        //     const isChatOpen = currentChat?.members.some(id => id === res.senderId)
        //     if (isChatOpen) {
                // setNotification(pre => [{ ...res, isRead: true }, ...pre])
            // }
            // setNotification(pre => [...pre, res])
        // })

        return () => {
            socket.off("getMessages")
            socket.off("getNotification")
        }
    }, [socket, currentChat, message]);


    useEffect(() => {
        chatRefetch()
    }, [currentUser]);
    if (chatLoading || chats === null) return <PageLoader />

    return (
        <div>
            <Helmet>
                <title>Messages - Legalmate</title>
            </Helmet>

            <Breadcrumbs title="Messages" />

            <div className='container py-20'>
                {
                    chats.length !== 0 ?
                        <div className="grid md:grid-cols-3 gap-6 rounded-md">

                            <div className="bg-lightDark text-white p-3 rounded-md shadow-lg md:min-h-[68vh]">
                                {chats?.map((chat, index) => (
                                    <div key={index} className="cursor-pointer"
                                        onClick={() => setCurrentChat(chat)}>
                                        <Conversation
                                            chat={chat}
                                            onlineUser={onlineUser}
                                            setMessageReceiver={setMessageReceiver}
                                        />
                                    </div>
                                ))}
                            </div>

                            {currentChat !== undefined && (
                                <div className="md:col-span-2 rounded-md">
                                    <ChatBox
                                        currentChat={currentChat}
                                        currentUser={currentUser}
                                        textMessage={textMessage}
                                        setNewMessage={setNewMessage}
                                        setMessage={setMessage}
                                        message={message}
                                        setTextMessage={setTextMessage}
                                        messageReceiver={messageReceiver}
                                        onlineUser={onlineUser}
                                        chatRefetch={chatRefetch}
                                    />
                                </div>
                            )}
                        </div> :
                        <p className="py-4 px-6 sm:text-lg text-center bg-lightDark rounded-lg">☹ No Messages Found!</p>
                }
            </div>
        </div>
    );
};

export default Messages;
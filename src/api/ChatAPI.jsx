import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const uuid = localStorage.getItem("uuid");
const username = localStorage.getItem("username");

var stompClient = null;
const baseUrl = "http://localhost:8080";
const token = localStorage.getItem("token");

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
};

export const connectChat = () => {
    var socket = new SockJS("http://localhost:8080/ws");

    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/user/' + uuid + '/queue/messages',
            function (messageOutput) {
                showMessageOutput(JSON.parse(messageOutput.body));
            }
        );
    });
}

export const sendMessage = (user, msg) => {
    stompClient.send("/app/chat", {},
        JSON.stringify({
            'senderId':uuid,
            'recipientId':user.uuid,
            'senderName':username,
            'recipientName':user.username,
            'content':msg})
    );
}

function showMessageOutput(messageOutput) {
    return toast("👻" + messageOutput.senderName + " sent you a message");
}

export const disconnect = () => {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    console.log("Chat disconnected");
}

export const getAllMessages = async (targetUuid) => {
    return await axios.get(`${baseUrl}/messages/${targetUuid}/${uuid}`, {
        headers: headers,
    });
}

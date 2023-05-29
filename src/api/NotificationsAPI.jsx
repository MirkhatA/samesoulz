import {toast} from "react-toastify";

const uuid = localStorage.getItem("uuid");

let stompClient = null;

export const connect = () => {
    let socket = new SockJS("http://localhost:8080/notification");
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log("Connected: " + frame);
        stompClient.subscribe(
            "/user/" + uuid + "/notifications",
            function () {
                showMessageOutput();
            }
        );
    });
}

function showMessageOutput() {
    return toast("👻 New request");
}

export const disconnect = () => {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    console.log("Disconnected");
}

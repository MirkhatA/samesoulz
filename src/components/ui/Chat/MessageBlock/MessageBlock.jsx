import PropTypes from "prop-types";

const MessageBlock = (props) => {
    const uuid = localStorage.getItem("uuid");

    const {
        messages,
    } = props;

    const messageList = messages.map((message) =>
        <div key={message.id} className={`{w-full flex ${message.senderId !== uuid ? 'justify-start' : 'justify-end'}`}>
            <div className={"border rounded p-2 my-1 border-grey"}>
                {message.content}
            </div>
        </div>
    );

    return (
        <div>
            {messageList}
        </div>
    );
};

MessageBlock.propTypes = {
    messages: PropTypes.array,
}

export default MessageBlock;

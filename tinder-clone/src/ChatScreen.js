import React, {useState} from 'react';
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";



function ChatScreen() {

    const [input,setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name:'Ellen',
            image:'https://www.thenews.com.pk/assets/uploads/updates/2020-08-17/701814_8234782_300093_081429_updates_updates.jpg',
            message:'Whats up'
        },
        {
            name:'Ellen',
            image:'https://www.thenews.com.pk/assets/uploads/updates/2020-08-17/701814_8234782_300093_081429_updates_updates.jpg',
            message:'Hows it going'
        },
        {
            message:' Hi! Hows it going'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message:input}]);
        setInput("");
    }


    return (
        <div className="chatScreen" >
            <p className="chatScreen__timestamp" > YOU MATCHED WITH ELLEN ON 10/08/20 </p>
            {messages.map( message => (
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text" > {message.message} </p>
                </div>
                ) : (
                    <div className="chatScreen__message" >
                        <p className="chatScreen__textUser" > {message.message} </p>
                    </div>
                )
            ) )}
            <div>
                <form className="chatScreen__input">
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen__input"
                        placeholder="Type a message..."
                        type="text" />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton" > SEND </button>
                </form>
            </div>
        </div>

        
    )
}

export default ChatScreen

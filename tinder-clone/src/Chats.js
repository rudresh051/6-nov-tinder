import React from 'react'
import './Chats.css'
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats" >
            <Chat
                name="Mark"
                message="YO whats up!"
                timestamp="40 seconds ago"
                profile="https://www.babynamespedia.com/z-media/mark-wahlberg/mark-wahlberg-1-thumb.jpg"
            />
            <Chat 
                name="Ellen"
                message="Whats up?"
                timestamp="55 minutes ago"
                profile="https://www.thenews.com.pk/assets/uploads/updates/2020-08-17/701814_8234782_300093_081429_updates_updates.jpg"
            />
            <Chat
                name="Sandra"
                message="Ola!"
                timestamp="3 days ago"
                profile="https://imgix.ranker.com/list_img_v2/5240/2205240/original/famous-people-named-sandra-u1?w=300&q=60&dpr=3&fm=pjpg"
            />
            <Chat
                name="Natasha"
                message="Oops there is he is..."
                timestamp="1 week ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUQrIvIExCP9iZ3xZ4Nlz0dOtCzZmX1VIVBw&usqp=CAU"
            />
        
        </div>
    )
}

export default Chats

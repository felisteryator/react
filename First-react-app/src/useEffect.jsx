import {useEffect, useState} from "react"

export default function ChatNotification(){
    const [unread, setUnread] = useState(5)

    useEffect(()=> {
        if (unread > 0){
            document.title = (`(${unread}) Chatwave`);
        }
        else{
            document.title = 'Chatwave'
        }
        return () => {
            console.log("Component destroyed")
        }
    }, [unread]);

    return(
        <div>
            <p>You've {unread} messages</p>
            <button onClick={() => setUnread(unread + 1)}>Get new messages</button>
        </div>
    )
}
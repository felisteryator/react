import { useState } from "react";
export default function Events() {

    const [likes, setLikes] = useState(0);

    const like = () => {
        setLikes(pre => pre + 1);
    }

    const unlike = () => {
        setLikes(pre => (pre > 0 ? pre - 1 : 0));
    }

    return (
        <>
            <h1>Likes: {likes}</h1>
            <button onClick={like}>Like</button>
            <button onClick={unlike}>Unlike</button>
        </>
    );
}
import { useState } from 'react';
export default function Form (){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents refreshing the page on form submission
        alert(`The name you entered is ${name}, Age: ${age}`);
        
    };

    return(
        <form onSubmit = {handleSubmit}>
            <label>Enter your name: </label>
            <input
                type = "text"
                value = {name}
                onChange = {(e) => {
                    
                    setName(e.target.value);
                    }}
            />
            <label>Age: </label>
            <input
                type = "number"
                placeholder = "Age"
                value = {age}
                onChange = {(e) => setAge(Number(e.target.value))}
            />
            <button type="submit">Submit</button>  
        </form>
    );
}
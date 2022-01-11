import { useState } from "react";
import Input from "../Input";
import { Container } from "./style";

interface infoPeople {
    name: string,
    age: string,
    hobby: string
}

interface listProps{
    list: infoPeople[],
    setList: ([]) => void;
}

function Form({list, setList}: listProps) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [hobby, setHobby] = useState("")

    const handleClick = () =>{
        setList([...list, {name: name, age: age, hobby: hobby}])
    }

    return(
        <Container>
            <Input label="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="nome"/>
            <Input label="Idade" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Idade" />
            <Input label="Hobby "type="text" value={hobby} onChange={(e) => setHobby(e.target.value)} placeholder="Hobby"/>
            <button onClick={handleClick}>Enviar</button>
        </Container>
    )
    
}

export default Form; 
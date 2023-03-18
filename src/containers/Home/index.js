import React, {useState, useRef} from "react"
import  axios  from "axios"
import { useNavigate } from "react-router-dom"
import People from "../../assets/peoples.png"
import Arrow from '../../assets/Seta.png'
import { H1 } from "../../components/Title/Titlee/styles"
import {
  Container,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();
// Modo 1 de coletar dados do input(funções ativadas por onChange)

// function changeInputName(event) {
// setName(event.target.value) *setName está faltando criar o ESTADO acima 
//}

// function changeInputAge(event) {{
// setAge(event.target.value) *setAge está faltando criar o ESTADO acima 
//}

 async function addNewUser() {
   const {data: newUser } = await axios.post("http://localhost:3001/users", {  
   name: inputName.current.value,
   age: inputAge.current.value,
 });
    setUsers([...users, newUser]);

    navigate("/usuarios");
  //const {data: newUsers} = await axios.get("http://localhost:3001/users")
  //setUsers(newUsers)
}  
  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1 abacate={'Esse e meu abacate'}>Olá!</H1>

        <InputLabel>Nome</InputLabel >
        <Input ref={inputName} placeholder="Nome" />
        <InputLabel>Idade</InputLabel >
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>
    
      </ContainerItens>
    </Container>

  );
}
export default App

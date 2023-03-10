import React, {useState, useRef} from "react"
import  axios  from "axios"
import People from "../../assets/peoples.png"
import Arrow from '../../assets/Seta.png'
import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  
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
    setUsers([...users, newUser])

  //const {data: newUsers} = await axios.get("http://localhost:3001/users")
  //setUsers(newUsers)
}  
  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel >
        <Input ref={inputName} placeholder="Nome" />
        <InputLabel>Idade</InputLabel >
        <Input ref={inputAge} placeholder="Idade" />

        <Button to="/usuarios" onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>
    
      </ContainerItens>
    </Container>

  );
}
export default App

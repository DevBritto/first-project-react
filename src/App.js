import React, {useState, useRef, useEffect} from "react"
import  axios  from "axios"
import People from "./assets/peoples.png"
import Arrow from './assets/Seta.png'
import Trash from './assets/Lixo.png'
import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,
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
    setUsers([...users,{id: Math.random(), name:inputName.current.value, age:inputAge.current.value}])

  //const {data: newUsers} = await axios.get("http://localhost:3001/users")
  //setUsers(newUsers)
}  

  useEffect(() => {
     async function fetchUsers(){
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

       setUsers(newUsers);
     }
      fetchUsers()
  }, [])

 async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/users/${userId}`)
    
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
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

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
             <p>{user.name}</p>  <p>{user.age}</p>
             <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="Lata-de-lixo" /></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>

  );
}
export default App

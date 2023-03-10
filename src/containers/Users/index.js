import React, {useState,  useEffect} from "react"
import  axios  from "axios"
import Avatar from "../../assets/avatar.png"
import Arrow from '../../assets/Seta.png'
import Trash from '../../assets/Lixo.png'
import {
  Container,
  H1,
  Image,
  ContainerItens,
  Button,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  
// Modo 1 de coletar dados do input(funções ativadas por onChange)

// function changeInputName(event) {
// setName(event.target.value) *setName está faltando criar o ESTADO acima 
//}

// function changeInputAge(event) {{
// setAge(event.target.value) *setAge está faltando criar o ESTADO acima 
//}



  useEffect(() => {
     async function fetchUsers(){
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

       setUsers(newUsers);
     }
      fetchUsers()
  }, [users])

 async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/users/${userId}`)
    
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }
  
  

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários!</H1>
       
        <ul>
          {users.map((user) => (
            <User key={user.id}>
             <p>{user.name}</p>  <p>{user.age}</p>
             <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="Lata-de-lixo" /></button>
            </User>
          ))}
        </ul>

        <Button to="/">
          <img alt="seta" src={Arrow} /> Voltar
          </Button>
      </ContainerItens>
    </Container>

  );
}
export default Users

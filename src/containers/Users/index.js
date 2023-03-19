import React, {useState,  useEffect} from "react"
import  axios  from "axios"
import { useNavigate } from "react-router-dom"
import Avatar from "../../assets/avatar.png"
import Arrow from '../../assets/Seta.png'
import Trash from '../../assets/Lixo.png'
import ContainerItens from "../../components/Title/ContainerItens"
import Button from "../../components/Title/Button"
import {
  Container,
  H1,
  Image,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

// Modo 1 de coletar dados do input(funções ativadas por onChange)

// function changeInputName(event) {
// setName(event.target.value) *setName está faltando criar o ESTADO acima 
//}

// function changeInputAge(event) {{
// setAge(event.target.value) *setAge está faltando criar o ESTADO acima 
//}



  useEffect(() => {
     async function fetchUsers(){
      const { data: newUsers } = await axios.get("https://projeto-node-api.vercel.app/users");

       setUsers(newUsers);
     }
      fetchUsers()
  }, [users])

 async function deleteUser(userId) {

    await axios.delete(`https://projeto-node-api.vercel.app/users/${userId}`)
    
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }
  function goBackPage(){
    navigate("/")
    
  }
  

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens isblur={true}>
        <H1>Usuários!</H1>
       
        <ul>
          {users.map((user) => (
            <User key={user.id}>
             <p>{user.name}</p>  <p>{user.age}</p>
             <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="Lata-de-lixo" /></button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage} >
          <img alt="seta" src={Arrow} /> Voltar
          </Button>
      </ContainerItens>
    </Container>

  );
}
export default Users

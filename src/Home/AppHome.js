import React, {useState, useRef} from 'react'
import { Imagem, Container, DivPrincipal, InputLabel, Input,ButtonVewUsers } from "./styleHome"
import Title from "../components/title/index"
import image from "../assets/ImagePrin.png"
import seta from "../assets/seta.svg"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Button from "../components/button/index"

const AppHome = () => {

  const [users, setUsers] = useState([]);
  const InputName = useRef()
    const InputAge = useRef()
    const navigate = useNavigate()

  async function ActionUser()
{
const newUser = await axios.post(" http://localhost:3001/pedido", 
{
name:InputName.current.value, 
age:InputAge.current.value});
  
setUsers(
[... users, newUser.data] );
Swal.fire(
  "Usuário cadastrado!",
  "bom trabalho"
)
}
function MyTest (){
  navigate("/users")
}
  

  return (
    <DivPrincipal>
      <Imagem alt="logo-img" src={image} />
      <Container>
        <Title> Olá</Title>
        <InputLabel>Nome</InputLabel>
        <Input ref={InputName} placeholder='Nome'></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={InputAge} placeholder='Idade'></Input>

        <Button onClick= {ActionUser}> Cadastrar <img alt="seta" src={seta} /> </Button>
        <ButtonVewUsers  to ="/users"> View Users </ButtonVewUsers>
      
      </Container>

    </DivPrincipal>


  );
}

export default AppHome

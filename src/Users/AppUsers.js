import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import avatar from '../Users/Avatar.png';
import { DivPrincipal, Container, Imagem, Lista} from './StyleUsers';
import Trash from '../assets/lixo.svg';
import Arrow from '../assets/seta.svg';
import {useNavigate} from "react-router-dom";
import Title from '../components/title/index';
import Button from "../components/button/index"


const AppUsers = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/pedidos');
          setUsers(response.data)
      } catch (error) {
        console.log('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  function BackToHome () {
   navigate("/")
  }
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${userId}`);
      const newUsers = users.filter((user) => user.id !== userId);
      setUsers(newUsers);
    } catch (error) {
      console.log('Erro ao excluir usuário:', error);
    }
  };


  return (
    <DivPrincipal>
      <Imagem alt="logo-avata" src={avatar} />
      <Container>
        <Title> Usuários</Title>
        <ul>
          {users.map((user) => (
            <Lista key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <img src= {Trash} onClick={() => deleteUser(user.id)} />
            </Lista>
          ))}
        </ul>
        <Button isBack = {true} onClick={BackToHome}>
        <img src={Arrow} alt="seta" /> Voltar 
        </Button>
      </Container>
    </DivPrincipal>
  );
};

export default AppUsers;

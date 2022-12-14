import React from 'react'
import { useState, useContext, useEffect } from 'react';
import Perfil from '../Perfil/Perfil';
import MainContext from "../../Context/MainContext";
import { updateElement, getDataById } from '../../Services/Firestore';
import './Perfiles.css';
import { UserProfileModel } from '../../Models/UserProfileModel';
import AdministrarPerfil from '../AdministrarPerfil/AdministrarPerfil';
import { Navigate, useNavigate } from 'react-router-dom';
import { LANGUAGES } from '../../Constants/languages';

export default function Perfiles() {

  const [edit, toggleEdit] = useState(false);
  const [show, toggleShow] = useState(false);
  const [profileToEdit, setProfileToEdit] = useState({});
  const [index, setIndex] = useState(0);
  const [profiles, setProfiles] = useState([]);
  const [count, setCount] = useState(0);

  const { user, changeUser, language } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await getDataById(user).then(
        (user) => {
          console.log("doc from firestore", user);
          setProfiles(user.profiles);
          setCount(user.profiles.length);
        }
      )
    })()
  }, [user]);

  function changeShow(e, profile={}, edit, add) {
    if(!edit && !add) {
      changeUser(e, profile.name);
      navigate('/Home');
    }
    let pos = profiles.map(p => p.name).indexOf(profile.name);
    setProfileToEdit(profile);
    setIndex(pos);  
    console.log(pos);
    toggleShow(true);
  }

  function deleteProfile() {
    profiles.splice(index, 1);
    setCount(count - 1);
    updateElement(user, profiles);
  }

  function updateProfile(profile) {
    if(index == -1) {
      profiles.push(profile);
      setCount(count + 1);
    } else {
      profiles[index] = profile;
    }
    updateElement(user, profiles);
  }

  return (
    <div className='pagina_perfiles'>
      {!user ? < Navigate to="/Login"></Navigate>
        : <>
          <h1 className='perfiles_titulo'>
            {profiles.length == 0 ? 
              LANGUAGES[language].PROFILES.CREATE_FIRST
              : edit ? LANGUAGES[language].PROFILES.MANAGE  
              :LANGUAGES[language].PROFILES.WATCHING}</h1>
          <div className='contenedor_perfiles'>
            {
              profiles.length == 0 ? '' : profiles.map((profile, index) => 
                <Perfil key={index} edit={edit} profile={profile} addProfile={false} show={changeShow}></Perfil>)
            }
            {count >= 0 && count < 5 && <Perfil key="add-profile" edit={false} addProfile={true} show={changeShow}></Perfil>}
          </div>
          <div>
            {count > 0 && <a href='#' onClick={() => toggleEdit(!edit)} className='boton_perfiles'>{edit ? LANGUAGES[language].PROFILES.DONE : LANGUAGES[language].PROFILES.MANAGE}</a>}
          </div>

          <AdministrarPerfil edit={edit} show={show} toggleShow={toggleShow} profile={profileToEdit} update={updateProfile} delete={deleteProfile}></AdministrarPerfil>
        </>
      }
    </div>
  )
}

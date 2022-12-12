import React from 'react'
import { useContext } from 'react'
import MainContext from '../../Context/MainContext'
import Dropdown from 'react-bootstrap/Dropdown';
import { LANG_EN, LANG_ES } from '../../Constants/constants';
import { DropdownButton } from 'react-bootstrap';

export default function Idioma() {

  const { language, changeLanguage } = useContext(MainContext);

  return (
    <DropdownButton style={{margin:'0 20px'}}
      align="end"
      title={language === LANG_ES? "Español" : "Inglés"}
      id="dropdown-menu-align-end"
      variant="secondary">

      <Dropdown.Item onClick={(e) => changeLanguage(e, LANG_ES)}>Español</Dropdown.Item>
      <Dropdown.Item onClick={(e) => changeLanguage(e, LANG_EN)}>Inglés</Dropdown.Item>
    </DropdownButton>
  )
}

import React from 'react'
import { useContext } from 'react'
import MainContext from '../../Context/MainContext'
import Dropdown from 'react-bootstrap/Dropdown';
import { LANG_EN, LANG_ES } from '../../Constants/constants';

export default function Idioma() {

  const { language, changeLanguage } = useContext(MainContext);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {language === LANG_ES? "Español" : "Inglés"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={(e) => changeLanguage(e, LANG_ES)}>Español</Dropdown.Item>
        <Dropdown.Item onClick={(e) => changeLanguage(e, LANG_EN)}>Inglés</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

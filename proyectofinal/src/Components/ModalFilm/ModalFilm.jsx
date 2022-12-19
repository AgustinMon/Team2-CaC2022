import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { LANGUAGES } from "../../Constants/languages";
import MainContext from "../../Context/MainContext";
import { Service } from "../../Services/Service";
import YoutubeEmbed from "../Youtube/Youtube";
import './ModalFilm.css';

export default function ModalFilm(props) {

    const { language, typeFilm } = useContext(MainContext);
    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            await Service.getVideos(props.idFilm, typeFilm, language)
                .then((obj) => {
                    setData(obj.results !== [] ? obj.results[0] : null);
                    console.log("data from film", obj)
                })
                .catch((error) => console.log(error))
        }
        )()
    }, [])

  return (
    <div>
      {/* Hacer algo cuando la pelicula o serie seleccionada no tenga videos, informar a traves de modal */}
      {
        data == null ?
      <Modal show={props.show} onHide={() => props.toggleShow(false)}>
        <Modal.Header style={{ backgroundColor: "black" }} closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black" }}>{LANGUAGES[language].ERROR.VIDEO_NOT_FOUND}</Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black" }}>
          <Button variant="primary" onClick={() => props.toggleShow(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      :

      <Modal show={props.show} fullscreen={true} onHide={() => props.toggleShow(false)}>
        <Modal.Body style={{padding: '0'}}>
          <button className="modal_film_button" onClick={() => props.toggleShow(false)}>
            <FontAwesomeIcon icon={faArrowLeft} className="Icono" size="3x"/>  
          </button>
          <YoutubeEmbed embedId={data?.key} />
        </Modal.Body>
      </Modal>
      }
    </div>
  );
}

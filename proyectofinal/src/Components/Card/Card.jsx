import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom";
import "./card.css";
import { useState } from "react";

export default class Card extends Component {

    constructor(props) {
        super();
        // info es un objeto con dada pelicula
        this.title = props.info.title;
        this.id = props.info.id;
        this.generos = props.generos;
        console.log(this.generos);
        this.imagen = {
            backgroundImage: `url(${process.env.REACT_APP_IMAGES_BASE_PATH + props.info.backdrop_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }
    }

    mostrarInfo = event => {
        const info = document.getElementById('card_info_' + this.id);
        info.style.display = 'flex';
    }

    ocultarInfo = event => {
        const info = document.getElementById('card_info_' + this.id);
        info.style.display = 'none';
    }

    //importante para actualizar las cards
    componentDidUpdate(props) {
        this.title = props.info.title;
        this.image = props.info.poster_path;
        this.id = props.info.id;
    }

    render() {
        return (
        <Link to={"/View/"+this.id}>
            <div className="tarjeta" onMouseOver={this.mostrarInfo} onMouseLeave={this.ocultarInfo} style={this.imagen}>
                <div className="card_info" id={"card_info_" + this.id }>
                    <h5 className="titulo">{this.title}</h5>
                    <div className="generos">
                        {this.generos.map((gen, index)=> <p className="genero" key={index}>{gen}</p>)}
                    </div>
                </div>
            </div>
        </Link>
        )
    }
}
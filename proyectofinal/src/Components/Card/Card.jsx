import React from "react";
import { Component } from "react";
import {IMAGE_URL} from "../../Constants/constants";
import {Link} from "react-router-dom";
import "./card.css";
import { useState } from "react";

export default class Card extends Component {

    /* CODIGO A REEMPLAZARSE POR SCRIPT DE COMPAÑERO/A */

    title = '';
    image = '';
    id = '';

    constructor(props) {
        super();
        // info es un objeto con dada pelicula
        this.title = props.info.title;
        this.image = props.info.poster_path;
        this.id = props.info.id;
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
            <div className="tarjeta">
                <img className="card-img-top img-thumbnail" src={IMAGE_URL + this.image} alt="Card image cap" />
                <h5 className="titulo">{this.title}</h5>
            </div>
        </Link>
        )
    }
}
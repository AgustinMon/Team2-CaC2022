import React from "react";
import { Component } from "react";
import "./card.css";

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

    render() {
        return (
        <a href={"/View/"+this.id}>
            <div class="card">
                <img class="card-img-top img-thumbnail" src={"https://image.tmdb.org/t/p/original/" + this.image} alt="Card image cap" />
                <h5 class="card-title">{this.title}</h5>
            </div>
        </a>
        )
    }
}
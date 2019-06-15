import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Feed.css";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Rafael de Azevedo</span>
              <span className="place">São Paulo</span>
            </div>
            <img src={more} alt="Mais" />
          </header>
          <img
            src="http://localhost:3333/files/example_img_large.jpg"
            alt="Mais"
          />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong>900 curtidas</strong>

            <p>
              Paisagem top
              <span>#paisagem #teste</span>
            </p>
          </footer>
        </article>

        <article>
          <header>
            <div className="user-info">
              <span>Rafael de Azevedo</span>
              <span className="place">São Paulo</span>
            </div>
            <img src={more} alt="Mais" />
          </header>
          <img
            src="http://localhost:3333/files/example_img_large.jpg"
            alt="Mais"
          />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong>900 curtidas</strong>

            <p>
              Paisagem top
              <span>#paisagem #teste</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

Feed.propTypes = {};

export default Feed;

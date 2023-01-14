import React from 'react';
import './hero.css';
import restaurantB from '../../src/assets/restaurantB.jpg';
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    className: "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Hero-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Hero-text"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "Hero-h1"
  }, "Little Lemon Restaurant"), /*#__PURE__*/React.createElement("h3", {
    className: "Hero-h3"
  }, "Amsterdam"), /*#__PURE__*/React.createElement("p", {
    className: "Hero-p"
  }, "The best restaurant in the world"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    className: "Hero-btn"
  }, "Reserve a Table")), /*#__PURE__*/React.createElement("img", {
    src: restaurantB,
    alt: "restaurant",
    className: "Hero-img"
  }))));
}
export default Hero;
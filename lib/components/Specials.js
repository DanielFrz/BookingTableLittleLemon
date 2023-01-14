import React from 'react';
import dessert from '../../src/assets/dessert.jpg';
import './specials.css';
function Specials() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "special-content"
  }, /*#__PURE__*/React.createElement("h1", null, "Specials"), /*#__PURE__*/React.createElement("button", {
    className: "special-btn"
  }, "Order"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "special-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "special-dish"
  }, /*#__PURE__*/React.createElement("img", {
    src: dessert,
    alt: "dish-1"
  }), /*#__PURE__*/React.createElement("h3", null, "Lemon Dessert"), /*#__PURE__*/React.createElement("p", null, "The best Lemon Dessert"))), /*#__PURE__*/React.createElement("div", {
    className: "column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "special-dish"
  }, /*#__PURE__*/React.createElement("img", {
    src: dessert,
    alt: "dish-2"
  }), /*#__PURE__*/React.createElement("h3", null, "Lemon Dessert"), /*#__PURE__*/React.createElement("p", null, "the best Lemon Dessert"))), /*#__PURE__*/React.createElement("div", {
    className: "column"
  }, /*#__PURE__*/React.createElement("div", {
    className: "special-dish"
  }, /*#__PURE__*/React.createElement("img", {
    src: dessert,
    alt: "dish-3"
  }), /*#__PURE__*/React.createElement("h3", null, "Column 3 Title"), /*#__PURE__*/React.createElement("p", null, "Column 3 text")))));
}
export default Specials;
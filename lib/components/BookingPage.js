import React from 'react';
import './booking.css';
import { useReducer } from 'react';
function Main() {
  const [state, dispatch] = useReducer(updateTimes, {
    date: '',
    availableTimes: []
  });
  function updateTimes(state, action) {
    switch (action.type) {
      case 'UPDATE_DATE':
        return {
          ...state,
          date: action.date,
          availableTimes: initializeTimes(action.date)
        };
      default:
        return state;
    }
  }
  function initializeTimes(date) {
    // for now, return the same available times regardless of the date
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BookingForm, {
    state: state,
    dispatch: dispatch
  }));
}
function BookingForm({
  state,
  dispatch
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "Form-container"
  }, /*#__PURE__*/React.createElement("form", {
    className: "reservation-form",
    style: {
      display: "grid",
      maxWidth: 200,
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "res-date",
    className: "reservation-label"
  }, "Choose date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    id: "res-date",
    className: "reservation-input",
    value: state.date,
    onChange: e => dispatch({
      type: 'UPDATE_DATE',
      date: e.target.value
    })
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "res-time",
    className: "reservation-label"
  }, "Choose time"), /*#__PURE__*/React.createElement("select", {
    id: "res-time",
    className: "reservation-select"
  }, state.availableTimes ? state.availableTimes.map(time => /*#__PURE__*/React.createElement("option", {
    key: time
  }, time)) : null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "guests",
    className: "reservation-label"
  }, "Number of guests"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: 1,
    min: 1,
    max: 10,
    id: "guests",
    className: "reservation-input"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "occasion",
    className: "reservation-label"
  }, "Occasion"), /*#__PURE__*/React.createElement("select", {
    id: "occasion",
    className: "reservation-select"
  }, /*#__PURE__*/React.createElement("option", null, "Birthday"), /*#__PURE__*/React.createElement("option", null, "Anniversary")), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    defaultValue: "Make Your reservation",
    className: "reservation-submit"
  })));
}
export default Main;
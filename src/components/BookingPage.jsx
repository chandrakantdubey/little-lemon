import { useState, useReducer, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import BookingForm from "./BookingForm"
import ConfirmedBooking from "./ConfirmedBooking";

// api functions
const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}
const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};

function initializeTimes(){
  const today = new Date()
  return fetchAPI(today)
}

export default function BookingPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    res_date: new Date().toLocaleDateString(),
    res_time:'select time',
    number_of_guests: 2,
    ocassion:'select occasion',
  })

  const [availableTimes, availableTimesDispatch] = useReducer(updateTimes, initializeTimes())

  function updateTimes(state, action) {
    if(action.type === 'date_change'){
      return fetchAPI(new Date(formData.res_date))
    }
    throw Error('Unknown action.');
  }

  function handleChange(e){
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [e.target.name]: e.target.value
        }
    })
  }

  function submitForm(e,formData){
    e.preventDefault()
    console.log(formData);
    if(submitAPI(formData)){
      navigate('/confirmed')
      // return <ConfirmedBooking />
    }
  }

  return (
    <>
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        availableTimesDispatch={availableTimesDispatch}
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        submitForm={submitForm}
      />
    </>
  )
}

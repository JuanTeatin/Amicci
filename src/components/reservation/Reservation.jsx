import React from 'react'
import { useState } from 'react';
import { FaRegUser, 
  FaRegEnvelope, 
  FaPhone, 
  FaUserGroup, 
  FaCalendarDays, 
  FaClock, 
  FaCircleArrowRight 
} from 'react-icons/fa6'

import Select from 'react-select';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import "./reservation.css";
import { ValueContainer } from 'react-select/animated';

const optionsGuest = [
  { value: '', label: 'Invitados' },
  { value: '1', label: '01' },
  { value: '2', label: '02' },
  { value: '3', label: '03' },
  { value: '4', label: '04' },
  { value: '5', label: '05' },
];

const optionsTiming = [
  { value: '', label: 'Hora de la reserva' },
  { value: '1', label: '08:00 AM - 10:00 AM' },
  { value: '2', label: '09:30 AM - 11:30 AM' },
  { value: '3', label: '10:00 AM - 12:00 PM' },
  { value: '4', label: '11:30 AM - 01:30 PM' },
  { value: '5', label: '12:00 PM - 02:00 PM' },
  { value: '6', label: '01:30 PM - 03:30 PM' },
  { value: '7', label: '03:30 PM - 05:30 PM' },
  { value: '8', label: '04:00 PM - 06:00 PM' },
  { value: '9', label: '05:30 PM - 07:30 PM' },
];

const customStyles = {
  valueContainer: (provided) => ({
    ...provided,
    padding: '0.75rem 0 0.75rem 3rem'
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }), 

  control: () => ({
    display: 'flex',
  }),

  input: (provided) => ({
    ...provided,
    padding: 0,
    marginL: 0,
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'var(--first-color)' : 'var(--title-color)',
    backgroundColor: state.isFocused ? 'var(--container-color)' : 'transparent',
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'var(--text-color)',
    transform: state.isFocused ? 'rotate(-180deg)' : 'rotate(0)',
    transition: 'transform 0.5s'
  }),

  menuList: (provided)=> ({
    ...provided,
    maxHeight: '210px',
    overFlowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--firts-color) var(--container-color)'
  })
};

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="reservation-container container">
      <form action="" className="reservation-form grid">

        <div className="reservation-group grid">
          <h3 className="reservation-title">Agenda tu pedido</h3>

          <div className="reservation-div">
            <FaRegUser className='reservation-icon' />

            <input 
              type="text" 
              placeholder='Ingrese su nombre' 
              className="reservation-input" 
            />
          </div>

          <div className="reservation-div">
            <FaRegEnvelope className='reservation-icon' />

            <input 
              type="email " 
              placeholder='Ingrese su email' 
              className="reservation-input" 
            />
          </div>

          <div className="reservation-div">
            <FaPhone className='reservation-icon' />

            <input 
              type="tel" 
              placeholder='Ingrese su telefono' 
              className="reservation-input" 
            />
          </div>
          
        </div>

        <div className="reservation-group grid">
          <div className="reservation-div">
            <FaUserGroup className='reservation-icon' />
            
            <Select 
              options={optionsGuest} 
              styles={customStyles} 
              defaultValue={optionsGuest[0]} 
            />
          </div>

          <div className="reservation-div">
            <FaCalendarDays className='reservation-icon' />

            <DatePicker 
              selected={startDate} 
              onChange={(date) =>setStartDate(date) } 
              className='reservation-input' 
            />
          </div>  

          <div className="reservation-div">
            <FaClock className='reservation-icon' />

            <Select 
              options={optionsTiming} 
              styles={customStyles} 
              defaultValue={optionsTiming[0]} 
            />
          </div>  

          <button className='button reservation-button'>
            Agenda ahora <FaCircleArrowRight className='button-icon' />
          </button>
        </div>
      </form>
    </section>
  )
}

export default Reservation
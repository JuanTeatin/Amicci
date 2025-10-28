import { Swiper, SwiperSlide } from 'swiper/react';
import { homeSlide } from '../../Data';
import parse from 'html-react-parser';
import ScrollLink from '../link/ScrollLink';
import { FaCircleArrowRight, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/navigation';
import './home.css';

import { Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <section className="home">  
        <Swiper 
          speed={1000}
          modules={[Navigation]} navigation={{
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
          }}
        >
          {homeSlide.map(({img, title, description}, index)=>{
            return (
              <SwiperSlide 
                className='home-slide section' 
                style={{backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                }} 
                  key={index} >
                    <div className="home-data container">
                      <h3 className="home-subtitle">Bienvenido a Amicci</h3>
                      <h1 className="home-title"> {parse(title)} </h1>

                      <p className="home-description"> {description} </p>

                      <div className="home-buttons">

                        <ScrollLink 
                          to='about' 
                          name='Nosotros' 
                          className="button"
                          icon={<FaCircleArrowRight className='button-icon' />}
                        />

                        <ScrollLink 
                          to='menu' 
                          name='Menú' 
                          className="button home-button"
                          icon={<FaCircleArrowRight className='button-icon' />}
                        />
                      </div>

                    </div>
              </SwiperSlide>
            );
          })}

          <button className="swiper-btn next-btn">
            <FaArrowRightLong />
          </button>

          <button className="swiper-btn prev-btn">
            <FaArrowLeftLong />
          </button>
      </Swiper>
    </section>
  )
}

export default Home
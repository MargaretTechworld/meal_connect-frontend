/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './slider.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import { getMeals } from '../../features/admin/adminSlice';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        backgroundColor: '#72b600',
        width: '60px',
        padding: '25px',
        borderRadius: '24px 0 0 24px',
        boxSizing: 'border-box',
        zIndex: 1,
        position: 'absolute',
        right: 0,
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#72b600',
        width: '60px',
        padding: '25px',
        borderRadius: '0 24px 24px 0',
        boxSizing: 'border-box',
        zIndex: 1,
        position: 'absolute',
        left: 0,
      }}
      onClick={onClick}
    />
  );
};

const ReservationSlider = () => {
  const meals = useSelector((state) => state.meals.meals);
  const isLoading = useSelector((state) => state.meals.isLoading);
  const isError = useSelector((state) => state.meals.isError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error:
        {isError}
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: meals.length > 3, // Set infinite to true if meals are more than 3
    speed: 500,
    slidesToShow: meals.length >= 3 ? 3 : meals.length,
    slidesToScroll: meals.length >= 3 ? 1 : meals.length,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: meals.length >= 3 ? 3 : meals.length,
          slidesToScroll: meals.length >= 3 ? 1 : meals.length,
          infinite: meals.length > 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: meals.length >= 2 ? 2 : meals.length,
          slidesToScroll: meals.length >= 2 ? 2 : meals.length,
          initialSlide: meals.length >= 2 ? 2 : 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-4/5 h-4/5 my-auto main-slider-container">
      <div className="flex flex-col gap-3 mb-4">
        <h1 className="text-center font-extrabold tracking-widest text-2xl">CHEF&apos;S SPECIALTY</h1>
        <p className="text-xxs text-center text-gray-500">Please select our spcial meals.</p>
      </div>
      <div className="relative">
        <Slider className="ss:w-full" {...settings}>
          {meals.map((meal) => (
            <div key={meal.id} className="meal-card flex items-center justify-center text-center">
              <Link to={`/meals/${meal.id}`} className="flex justify-items-center align-items-center">
                <img
                  src={meal.photo}
                  alt="meal1"
                  className="m-auto p-auto rounded-full hover:cursor-pointer"
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
                {' '}

              </Link>
              <div className="text-center my-6">
                <p className="font-bold my-2 uppercase hover:cursor-pointer">{meal.name}</p>
                <p className="text-xxs text-gray-500">You gonna love our meal!</p>
                <p className="text-gray-500">{meal.description}</p>
              </div>
              <Link to={`/meal/${meal.id}`} className="bg-green w-full p-2 m-2 text-white">Reserve</Link>
              <div className="mt-3">
                <ul className="flex justify-center gap-5">
                  <li className="text-gray-500 hover:cursor-pointer border-solid border-2 border-gray-500 rounded-full p-1"><FaFacebookF /></li>
                  <li className="text-gray-500 hover:cursor-pointer border-solid border-2 border-gray-500 rounded-full p-1"><FaTwitter /></li>
                  <li className="text-gray-500 hover:cursor-pointer border-solid border-2 border-gray-500 rounded-full p-1"><FaInstagramSquare /></li>
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReservationSlider;

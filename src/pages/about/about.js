import React from "react";
import "./about.css";
// import MainImg from "../../assets/DIU-About-Us-Image.png";
import CardImg1 from "../../assets/card-img-1-sweta.jpg";
import CardImg2 from "../../assets/card-img-2-naeem.jpg";
import FbLogo from "../../assets/DIU-AboutUs-Main-Logos-FB.png";
import InstaLogo from "../../assets/DIU-AboutUs-Main-Logos-Insta.png";
// import MainImg2 from "../../assets/DIU-About-Image-2.png";
import { Link } from "react-router-dom";
import NewLogo from "../../assets/DIU-NewLogo-Final.png";
import NewLogoSmall from "../../assets/DIU-NewLogo.jpeg";

// import CardImg3 from '../../assets/card-img-3.png'
// import CardImg4 from '../../assets/card-img-4.png'
// import SliderImg from "../../assets/about-slider-img.png";

function about() {
  return (
    <div className='About-Body'>
      <img src={NewLogoSmall} className='about-section-small-logo' alt='' />
      <div className='about-section-1-flag'>
        <img src={NewLogo} alt='' />
      </div>
      <div className='About-Body-SubSection'>
        {/* <div className="About-section-1-flag"></div> */}
        <div className='About-Body-BreadCrumbs'>
          <Link to='/'>
            <button>Home</button>
          </Link>{" "}
          / <button>About</button>
        </div>
        <div className='About-section-main'>
          <div className='About-section-main-heading-section'>
            <h1 className='About-section-main-heading'>About Us</h1>
            <div className='About-section-main-logos'>
              <a
                href='https://instagram.com/desiinuae?igshid=MzRlODBiNWFlZA=='
                target='_blank'
                rel='noreferrer'>
                <img src={InstaLogo} alt='Insta Logo' />
              </a>
              <a
                href='https://www.facebook.com/desiinuae'
                target='_blank'
                rel='noreferrer'>
                <img src={FbLogo} alt='Fb Logo' />
              </a>
            </div>
          </div>
        </div>

        <div className='About-section-5-heading'>
          <h3>Glance At Co-Founders :</h3>
        </div>

        <div className='About-section-5-content'>
          <p>
            The vibrant community connecting and empowering Indians across the
            United Arab Emirates. Our platform was founded by two exceptional
            individuals, Ms. Sweta G Saini and Mr. Mohd. Naeem Chunare, who
            bring their unique talents and experiences to create a supportive
            and inclusive space for the Indian community in the UAE.
          </p>
        </div>

        <div className='About-section-2-cards'>
          <div className='About-Cards-Section'>
            <div className='card-image-section'>
              <img src={CardImg1} alt='' />
              <p className='card-image-heading'>Sweta G Saini</p>
            </div>
            <div className='card-text'>
              <p>
                Sweta G Saini, a proud native of Rajasthan who was raised in the
                bustling city of Mumbai embarked on her journey to the UAE in
                2012. With a passion for entrepreneurship and a deep
                understanding of business setup, she founded Startiffyzone FZE,
                a consultancy firm that empowers aspiring entrepreneurs to
                establish successful ventures.
              </p>

              <p>
                As a co-founder of Desi in UAE, Sweta envisions a community
                where members can network, learn, and grow together, fostering a
                sense of unity and collaboration.
              </p>
            </div>
          </div>
          <div className='About-Cards-Section'>
            <div className='card-image-section'>
              <img src={CardImg2} alt='' />
              <p className='card-image-heading'>Mohd. Naeem Chunare</p>
            </div>
            <div className='card-text'>
              <p>
                Mohd. Naeem Chunare, hailing from Mumbai, made his mark in the
                UAE in 2015. With a background in Mechanical Engineering and a
                certification as an energy manager, he has been making
                significant contributions to the sustainable development sector.
              </p>

              <p>
                As a co-founder at Desi in UAE, Mohd. Naeem's vision and
                leadership have been instrumental in the platform's growth and
                success. He remains dedicated to empowering our community,
                celebrating our rich culture, and providing valuable resources
                for personal and professional development.
              </p>
            </div>
          </div>
        </div>
        <div className='About-section-5-content'>
          <p>
            Together, Sweta and Mohd. Naeem form an exceptional team at the core
            of Desi in UAE. Their shared vision and commitment to the Indian
            community's growth and prosperity have propelled the platform to new
            heights. Through Desi in UAE, they aim to create a nurturing
            environment that celebrates Indian culture, promotes professional
            development, and provides a strong support network for all members.
          </p>
        </div>

        <div className='About-section-5-heading'>
          <h3>Join Us :</h3>
        </div>

        <div className='About-section-5-content'>
          <p>
            Join us in this exciting journey as we come together as one strong
            and vibrant community. Discover a wealth of resources, engage in
            enriching events, and connect with like-minded individuals who share
            your dreams and aspirations.
          </p>
          <p>
            Together, let's make a positive impact and shape a brighter future
            for Indians in the UAE.
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;

import React from // useEffect // useState,
"react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./home.css";
import { Link } from "react-router-dom";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import BusinessIcon from "@mui/icons-material/Business";
// import BackgroundImg from "../../assets/bg-img.png";
import SchoolIcon from "@mui/icons-material/School";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
// import PublicIcon from "@mui/icons-material/Public";
// import SliderImg from "../../assets/home-slider-img.png";

import NewLogo from "../../assets/DIU-NewLogo-Final.png";
// import PoepleImg from "../../assets/peopel-img.png";
import CardImg from "../../assets/cardImg-1.png";
import CardImg2 from "../../assets/cardImg-2.png";
import CardImg3 from "../../assets/cardImg-3.png";
import HomeSec31Img from "../../assets/DIU-Home-Section-3-1B-Image.png";
import HomeSec32Img from "../../assets/DIU-Home-Section-3-2B-Image.png";
import HomeSec33Img from "../../assets/DIU-Home-Section-3-3B-Image.jpeg";
import HomeSec34Img from "../../assets/DIU-Home-Section-3-4-Image.jpeg";
import HomeSec35Img from "../../assets/DIU-Home-Section-3-5-Image.jpeg";
import HomeSec36Img from "../../assets/DIU-Home-Section-3-6-Image.jpeg";
import HomeSec37Img from "../../assets/DIU-Home-Section-3-7-Image.jpeg";
import HomeGal3Img from "../../assets/new-home-page-images/gallery3.jpg";
import HomeGal4Img from "../../assets/new-home-page-images/gallery4.jpg";
import HomeGal5Img from "../../assets/new-home-page-images/gallery5.jpg";
import HomeGal6Img from "../../assets/new-home-page-images/gallery6.jpg";
import HomeGal7Img from "../../assets/new-home-page-images/gallery7.jpg";
import HomeGal8Img from "../../assets/new-home-page-images/gallery8.jpg";
import HomeGal9Img from "../../assets/new-home-page-images/gallery9.jpeg";
import HomeGal10Img from "../../assets/new-home-page-images/gallery10.jpeg";

import NewLogoSmall from "../../assets/DIU-NewLogo.jpeg";

// import HomeSecMidImg1 from "../../assets/DIU-Home-Mid-Card-Image1.png";
// import HomeSecMidImg2 from "../../assets/DIU-Home-Mid-Card-Image2.png";
// import HomeSecMidImg3 from "../../assets/DIU-Home-Mid-Card-Image3.png";
// import HomeSecMidImg4 from "../../assets/DIU-Home-Mid-Card-Image4.png";
// import HomeSecMidImg5 from "../../assets/DIU-Home-Mid-Card-Image5.png";
// import HomeSecMidImg6 from "../../assets/DIU-Home-Mid-Card-Image6.png";
// import HomeSecMidImg7 from "../../assets/DIU-Home-Mid-Card-Image7.png";

function home() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  const homeCarouselItems = [
    <img className='home-section-2-gal-image' src={HomeGal3Img} alt='' />,

    <img className='home-section-2-gal-image' src={HomeGal4Img} alt='' />,

    <img className='home-section-2-gal-image' src={HomeGal5Img} alt='' />,

    <img className='home-section-2-gal-image' src={HomeGal6Img} alt='' />,

    <img className='home-section-2-gal-image' src={HomeGal7Img} alt='' />,

    <img className='home-section-2-gal-image' src={HomeGal8Img} alt='' />,

    <img className='home-section-2-gal-image' src={HomeGal9Img} alt='' />,

    <img className='home-section-2-gal-image' src={HomeGal10Img} alt='' />,
  ];
  const sections = [
    <div className='Home-section-3'>
      <div className='home-section-3-img'>
        <img src={HomeSec31Img} alt='' />
      </div>

      <div className='home-section-3-content'>
        <div className='home-section-3-content-sub-heading'>
          <h2>Events and Festivals:</h2>
        </div>
        <div className='home-section-3-content-para'>
          <p>
            Stay updated on the latest Indian festivals and events celebrated in
            the UAE. From Diwali to Holi, Eid to Christmas, we cover it all!
            Discover where and when to join in the festivities, experience the
            joy of cultural celebrations, and make cherished memories with your
            family and friends.
          </p>
        </div>
      </div>
    </div>,

    <div className='Home-section-3'>
      <div className='home-section-3-img'>
        <img src={HomeSec32Img} alt='' />
      </div>

      <div className='home-section-3-content'>
        <div className='home-section-3-content-sub-heading'>
          <h2>Community News:</h2>
        </div>
        <div className='home-section-3-content-para'>
          <p>
            Get the latest updates on the Indian community's happenings,
            achievements, and contributions in the UAE. Our news section keeps
            you informed about notable milestones, community initiatives, and
            inspiring stories of Indians making a difference in the region.
          </p>
        </div>
      </div>
    </div>,

    <div className='Home-section-3'>
      <div className='home-section-3-img'>
        <img src={HomeSec33Img} alt='' />
      </div>

      <div className='home-section-3-content'>
        <div className='home-section-3-content-sub-heading'>
          <h2>Restaurants and Food:</h2>
        </div>
        <div className='home-section-3-content-para'>
          <p>
            Indulge your taste buds with a comprehensive guide to Indian
            restaurants and eateries in the UAE. Whether you crave North Indian
            delicacies, South Indian delights, or regional specialties, we have
            you covered with authentic and delicious options.
          </p>
        </div>
      </div>
    </div>,

    <div className='Home-section-3'>
      <div className='home-section-3-img'>
        <img src={HomeSec34Img} alt='' />
      </div>

      <div className='home-section-3-content'>
        <div className='home-section-3-content-sub-heading'>
          <h2>Business and Services:</h2>
        </div>
        <div className='home-section-3-content-para'>
          <p>
            Connect with Indian-owned businesses and service providers across
            the UAE. From retail stores to professional services, find the right
            contacts within the Desi community to meet your needs.
          </p>
        </div>
      </div>
    </div>,

    <div className='Home-section-3'>
      <div className='home-section-3-img'>
        <img src={HomeSec35Img} alt='' />
      </div>

      <div className='home-section-3-content'>
        <div className='home-section-3-content-sub-heading'>
          <h2>Culture and Lifestyle:</h2>
        </div>
        <div className='home-section-3-content-para'>
          <p>
            Immerse yourself in the diverse cultural heritage of India. Learn
            about traditional art forms, dance, music, and fashion trends.
            Discover the best places to shop for Indian attire, jewelry, and
            handicrafts, adding a touch of India to your UAE lifestyle.
          </p>
        </div>
      </div>
    </div>,

    <div className='Home-section-3'>
      <div className='home-section-3-img'>
        <img src={HomeSec36Img} alt='' />
      </div>

      <div className='home-section-3-content'>
        <div className='home-section-3-content-sub-heading'>
          <h2>Social Community:</h2>
        </div>
        <div className='home-section-3-content-para'>
          <p>
            Connect with like-minded individuals through our forums and social
            media channels. Share your experiences, ask questions, and engage in
            discussions with fellow Desis in the UAE.
          </p>
        </div>
      </div>
    </div>,

    <div className='Home-section-3'>
      <div className='home-section-3-img'>
        <img src={HomeSec37Img} alt='' />
      </div>

      <div className='home-section-3-content'>
        <div className='home-section-3-content-sub-heading'>
          <h2>Travel and Tourism:</h2>
        </div>
        <div className='home-section-3-content-para'>
          <p>
            If you're planning a trip to India or want to explore Indian-themed
            attractions within the UAE, our travel section will provide you with
            exciting ideas and itineraries.
          </p>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className='Home-Body'>
      <img src={NewLogoSmall} className='home-section-small-logo' alt='' />
      <div className='Home-section-1'>
        <img className='Home-section-1-backdrop' src={NewLogo} alt='' />
      </div>
      <div className='Home-section-2'>
        <div className='home-section-2-img'>
          <AliceCarousel
            mouseTracking
            items={homeCarouselItems}
            responsive={responsive}
            controlsStrategy='alternate'
            autoPlay='true'
            autoPlayInterval={2000}
            infinite='true'
            disableButtonsControls
          />
        </div>

        <div className='home-section-2-content'>
          <div className='home-section-2-heading-section'>
            <div className='home-section-2-content-hedaing'>
              <h2 style={{ color: "#D04425" }}>Welcome to Desi in UAE!</h2>
            </div>
            <div className='home-section-2-content-sub-heading'>
              <h2>
                Are you a member of the vibrant Indian community residing in the
                United Arab Emirates or planning to move here soon?
              </h2>
            </div>
          </div>
          <div className='home-section-2-content-para'>
            <p>
              If so, you've come to the right place! Desi in UAE is your
              one-stop destination for all things related to the Indian diaspora
              in this beautiful country. Whether you're looking for cultural
              events, community news, local businesses, or just seeking to
              connect with fellow Indians, we've got you covered.
            </p>
            <p>
              The Indian community has made a significant and multi-faceted
              impact on the United Arab Emirates (UAE) across various spheres.
              Economically, Indians have been pivotal in the country's growth,
              with their expertise and contributions spanning diverse industries
              such as finance, trade, construction, healthcare, and technology.
              As a substantial part of the UAE's workforce, Indian professionals
              and laborers have played a crucial role in building the nation's
              infrastructure and driving its economic success.
            </p>
            <Link to='/about'>
              <button className='home-section-2-content-about-button'>
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='home-section-mid-cards-section'>
        <div className='home-section-mid-content-card'>
          <div className='home-mid-card-image'>
            {/* <img src={HomeSecMidImg1} alt="Image"></img> */}
            <Diversity3Icon className='home-mid-card-icons' />
          </div>
          <div className='home-mid-card-content'>
            <span>
              <h2>Culture</h2>
              <ul>
                <li>
                  Culturally, the Indian community has enriched the UAE's social
                  fabric.
                </li>
                <li>
                  Introducing vibrant festivals like Diwali, Holi, and Eid,
                  which are now celebrated with enthusiasm by people of
                  different nationalities.
                </li>
                <li>
                  Indian music, dance, art, and cuisine have also found a place
                  in the UAE's cultural scene, adding to its diversity and
                  appeal.
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className='home-section-mid-content-card even'>
          <div className='home-mid-card-image'>
            {/* <img src={HomeSecMidImg2} alt="Image"></img> */}
            <BusinessIcon className='home-mid-card-icons' />
          </div>
          <div className='home-mid-card-content'>
            <span>
              <h2>Entrepreneurship</h2>
              <ul>
                <li>
                  Indian entrepreneurs have established numerous businesses in
                  the UAE.
                </li>
                <li>
                  Ranging from small startups to large corporations,
                  contributing significantly to the country's economic
                  prosperity.
                </li>
                <li>
                  The community's entrepreneurial spirit has also fostered
                  innovation and job creation.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      <div className='home-section-mid-cards-section'>
        <div className='home-section-mid-content-card'>
          <div className='home-mid-card-image'>
            {/* <img src={HomeSecMidImg3} alt="Image"></img> */}
            <SchoolIcon className='home-mid-card-icons' />
          </div>
          <div className='home-mid-card-content'>
            <span>
              <h2>Education</h2>
              <ul>
                <li>
                  In the fields of education and healthcare, Indian
                  professionals have made substantial contributions.
                </li>
                <li>
                  Many Indian teachers, professors, and medical practitioners
                  work in UAE schools, universities, and hospitals, providing
                  high-quality services to the population.
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className='home-section-mid-content-card even'>
          <div className='home-mid-card-image'>
            {/* <img src={HomeSecMidImg4} alt="Image"></img> */}
            <Diversity2Icon className='home-mid-card-icons' />
          </div>
          <div className='home-mid-card-content'>
            <span>
              <h2>Social</h2>
              <ul>
                <li>
                  Socially, Indian community organizations in the UAE actively
                  engage in philanthropic activities.
                </li>
                <li>
                  Supporting various social causes and extending a helping hand
                  to those in need.
                </li>
                <li>
                  They organize charity drives, medical camps, cultural events,
                  and other initiatives that benefit both the Indian community
                  and the broader society.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      <div className='home-section-mid-cards-section'>
        <div className='home-section-mid-content-card'>
          <div className='home-mid-card-image'>
            {/* <img src={HomeSecMidImg5} alt="Image"></img> */}
            <Diversity1Icon className='home-mid-card-icons' />
          </div>
          <div className='home-mid-card-content'>
            <span>
              <h2>Exchange</h2>
              <ul>
                <li>
                  Moreover, the presence of the Indian community has facilitated
                  cultural exchange between India and the UAE.
                </li>
                <li>
                  This exchange has fostered mutual understanding, tolerance,
                  and friendship between the two nations, strengthening
                  diplomatic and trade ties.
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className='home-section-mid-content-card even'>
          <div className='home-mid-card-image'>
            {/* <img src={HomeSecMidImg6} alt="Image"></img> */}
            <ConnectingAirportsIcon className='home-mid-card-icons' />
          </div>
          <div className='home-mid-card-content'>
            <span>
              <h2>Tourism</h2>
              <ul>
                <li>
                  Indian tourists contribute significantly to the UAE's tourism
                  sector.
                </li>
                <li>
                  Flocking to the country for leisure, shopping, and to
                  experience its world-class attractions.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      {/* <div className="home-section-mid-cards-section">
        <div className="home-section-mid-content-card last">
          <div className="home-mid-card-image">
            <img src={HomeSecMidImg7} alt="Image"></img>
            <PublicIcon className="home-mid-card-icons" />
          </div>
          <div className="home-mid-card-content">
            <span>
              <h2>Language</h2>
              <ul>
                <li>
                  Lastly, the prevalence of Indian languages and media in the
                  UAE creates a sense of familiarity and home away from home for
                  the Indian community.
                </li>
                <li>
                  Indian films, television channels, and newspapers play a
                  significant role in keeping the community connected to its
                  cultural roots.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div> */}
      <div className='home-mid-card-last-content'>
        <p>
          In summary, the Indian community's impact on the UAE is
          multi-dimensional, spanning economic, cultural, social, and diplomatic
          aspects. Their contributions have been instrumental in shaping the
          nation's growth and have fostered a diverse and inclusive society that
          celebrates the richness of its people.
        </p>
      </div>
      <div className='home-section-carousal'>
        <AliceCarousel
          mouseTracking
          items={sections}
          responsive={responsive}
          controlsStrategy='alternate'
          autoPlay='true'
          autoPlayInterval={2000}
          infinite='true'
          disableButtonsControls
        />
      </div>

      <div className='Home-section-5'>
        <div className='Home-section-5-heading'>
          <h1>OUR INDIAN COMMUNITY</h1>
        </div>
      </div>

      <div className='Home-section-6-cards'>
        <div className='Home-section-6-slider-card'>
          <div className='card-slider-1'>
            {/* <div className="card-img">
                            <img src={CardImg} alt="" />
                        </div> */}

            <img className='card-img' src={CardImg} alt='' />

            <div className='card-content'>
              <p>Part One</p>
              <h2>Headline</h2>
              <p>
                Please add your content here. Keep it short and simple. And
                smile :){" "}
              </p>
            </div>
          </div>

          <div className='card-slider-1'>
            {/* <div className="card-img">
                            <img src={CardImg2} alt="" />
                        </div> */}

            <img className='card-img' src={CardImg2} alt='' />

            <div className='card-content'>
              <p>Part One</p>
              <h2>Headline</h2>
              <p>
                Please add your content here. Keep it short and simple. And
                smile :){" "}
              </p>
            </div>
          </div>

          <div className='card-slider-1'>
            {/* <div className="card-img">
                            <img src={CardImg3} alt="" />
                        </div> */}

            <img className='card-img' src={CardImg3} alt='' />

            <div className='card-content'>
              <p>Part One</p>
              <h2>Headline</h2>
              <p>
                Please add your content here. Keep it short and simple. And
                smile :){" "}
              </p>
            </div>
          </div>

          {/* <div className="card-slider-1">
                        <div className="card-img">
                            <img src={CardImg2} alt="" />
                        </div>
                        <div className="card-content">
                            <p>Part One</p>
                            <h2>Headline</h2>
                            <p>Please add your content here. Keep it short and simple. And smile :)  </p>
                        </div>

                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default home;

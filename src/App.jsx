import { useState } from 'react';
import './App.css';
import myprofile from '../public/images/myprofile.jpeg';
import github from '../public/images/github.png';
import linkedin from '../public/images/linkedin.png';
import next from '../public/images/next_157924.png';
import petsloveCover from '../public/images/petsloveCover.png';
import weatherApi from '../public/images/weatherapi.png';
import guessNumber from '../public/images/guessNumber.png';
import furnitrueCover from '../public/images/furnitrueCover.png';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className='about'>
        <div className='profile-picture'>
          <img src={myprofile} alt='Profile Picture' />
        </div>
        <div>
          <div className='information'>
            <h3 className='name'>Tzu-Huang, Yen</h3>
            <p className='job'>Frontend developer MERN</p>
            <p className='email'>912yan@gmail.com</p>
          </div>

          <ul className='socials'>
            <li className='icon'>
              <a href='https://github.com/tzuhuangyen'>
                <img src={github} alt='github' />
              </a>
            </li>
            <li className='icon'>
              <a href='https://www.linkedin.com/in/tzu-huang-yen-971b45192/'>
                <img src={linkedin} alt='linkedin' />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className='experience'>
        <ul
          className='nav nav-tabs d-flex justify-content-evenly mb-4'
          id='myTab'
          role='tablist'
        >
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link active'
              id='home-tab'
              data-bs-toggle='tab'
              data-bs-target='#home'
              type='button'
              role='tab'
              aria-controls='home'
              aria-selected='true'
              style={{ color: '#6a5acd' }}
            >
              skills
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='profile-tab'
              data-bs-toggle='tab'
              data-bs-target='#profile'
              type='button'
              role='tab'
              aria-controls='profile'
              aria-selected='false'
              style={{ color: '#6a5acd' }}
            >
              Projects
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link'
              id='contact-tab'
              data-bs-toggle='tab'
              data-bs-target='#contact'
              type='button'
              role='tab'
              aria-controls='contact'
              aria-selected='false'
              style={{ color: '#6a5acd' }}
            >
              Experience
            </button>
          </li>
        </ul>

        <div className='tab-content' id='myTabContent'>
          <div
            className='tab-pane fade show active'
            id='home'
            role='tabpanel'
            aria-labelledby='home-tab'
          >
            <section className='skills'>
              <div className='container d-flex justify-content-evenly flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row'>
                <div className='skill frontend me-4'>
                  <h3>Frontend</h3>
                  <ul className='mb-3 lh-base'>
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li> jQuery</li>
                    <li>Github Git</li>
                    <li>HTML CSS Bootstrap 5</li>
                  </ul>
                </div>
                <div className='skill backend me-4'>
                  <h3>Backend</h3>

                  <ul className='mb-3 lh-base'>
                    <li>Python</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Render</li>
                  </ul>
                </div>
                <div className='skill ui'>
                  <h3>User Interface</h3>

                  <ul className='mb-3 lh-base'>
                    <li>PhotoShop</li>
                    <li>Illustrator</li>
                    <li>Figma</li>
                    <li>Wireframe</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div
            className='tab-pane fade'
            id='profile'
            role='tabpanel'
            aria-labelledby='profile-tab'
          >
            <section className='portfolio'>
              <div className='container'>
                <div className='row card d-flex flex-md-row'>
                  <div className='col-md-4 mb-4 p-1'>
                    <img
                      src={petsloveCover}
                      className='card-img-top'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-8 mb-4 p-1'>
                    <div>
                      <h3 className='card-header'>Pets' Snack E-Commerce </h3>

                      <div className='card-body'>
                        <p className='card-text lh-sm mb-3'>
                          I developed a full-stack project using MERN (MongoDB,
                          Express, React, Node.js) and Vite, focusing on
                          implementing responsive web design (RWD) principles
                          with Bootstrap, SCSS, and Swiper to optimize the user
                          interface (UI) experience. On the backend, I utilized
                          the MERN stack (MongoDB, Express, React, Node.js) and
                          integrated Axios API to establish efficient
                          communication between the frontend and backend.
                          Throughout the project, I adopted a progressive
                          enhancement approach to continuously refine and
                          improve both frontend and backend functionalities.
                        </p>
                        <div className='d-flex justify-content-end'>
                          <a
                            href='https://github.com/tzuhuangyen/PetsLove'
                            className='btn btn-primary me-4'
                          >
                            <img src={github} alt='' /> Github
                          </a>
                          <a
                            href='https://tzuhuangyen.github.io/PetsLove'
                            className='btn btn-primary'
                          >
                            <img src={next} alt='' className='me-1' /> Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 mb-4 p-1'>
                    <img src={weatherApi} className='card-img-top' alt='...' />
                  </div>
                  <div className='col-md-8 mb-4 p-1'>
                    <div>
                      <h3 className='card-header'>Weather Query API</h3>
                      <div className='card-body'>
                        <p className='card-text lh-sm mb-3'>
                          The application uses the OpenWeather API to fetch
                          weather data and the Unsplash API to set background
                          images. Users can input a city name to retrieve
                          weather information and automatically display local
                          weather based on the user's geographic location.
                        </p>
                        <div className='d-flex justify-content-end'>
                          <a
                            href='https://github.com/tzuhuangyen/API-openweather-search'
                            className='btn btn-primary me-4'
                          >
                            <img src={github} alt='' /> Github
                          </a>
                          <a
                            href='https://tzuhuangyen.github.io/React_openWeather_API/'
                            className='btn btn-primary'
                          >
                            <img src={next} alt='' className='me-1' /> Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 mb-4 p-1'>
                    <img src={guessNumber} className='card-img-top' alt='...' />
                  </div>
                  <div className='col-md-8 mb-4 p-1'>
                    <div>
                      <h3 className='card-header'>
                        Number Guessing Game JavaScript
                      </h3>
                      <div className='card-body'>
                        <p className='card-text lh-sm mb-3'>
                          The provided code is written in JavaScript and sets up
                          a game where users need to guess a secret number
                          between 1 and 20. It includes logic to check whether
                          the user's guess is correct, update the score, display
                          messages for guesses that are too high or too low, and
                          handle restarting the game. Additionally, the code
                          tracks the highest score achieved even when the game
                          is restarted.
                        </p>
                        <div className='d-flex justify-content-end'>
                          {' '}
                          <a
                            href='https://github.com/tzuhuangyen/JS-Game-Guess-number'
                            className='btn btn-primary me-4'
                          >
                            <img src={github} alt='' /> Github
                          </a>
                          <a
                            href='https://tzuhuangyen.github.io/JS-Game-Guess-number/'
                            className='btn btn-primary'
                          >
                            <img src={next} alt='' className='me-1' />
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4 mb-4 p-1'>
                    <img
                      src={furnitrueCover}
                      className='card-img-top'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-8 mb-4 p-1'>
                    <div>
                      <h3 className='card-header'>API Furniture online shop</h3>
                      <div className='card-body'>
                        <p className='card-text lh-sm mb-3'>
                          This project involves creating an online furniture
                          store using HTML, CSS, JavaScript, AJAX, API
                          integration, and C3. The main goal is to practice
                          using AJAX and APIs to retrieve and display product
                          information. The project includes features such as
                          product filtering, shopping cart, total price
                          calculation, C3 chart visualization, and order details
                          management for administrators. A key highlight of this
                          project is the implementation of AJAX and API
                          integration. AJAX is used to fetch real-time product
                          data via API calls, providing the latest information
                          on furniture products, including names, descriptions,
                          prices, and images. This dynamic data retrieval
                          ensures the accuracy and timeliness of the product
                          listings. The shopping cart feature allows users to
                          add and remove items without refreshing the page.
                          JavaScript dynamically updates the cart, offering a
                          smooth and efficient shopping experience. For sales
                          data analysis, the project integrates C3, a JavaScript
                          library for chart visualization. By using backend
                          order information, administrators can easily view and
                          analyze sales trends.
                        </p>
                        <div className='d-flex justify-content-end'>
                          {' '}
                          <a
                            href='https://github.com/tzuhuangyen/Furniture-online-shop'
                            className='btn btn-primary me-4'
                          >
                            <img src={github} alt='' /> Github
                          </a>
                          <a
                            href='https://tzuhuangyen.github.io/Furniture-online-shop/admin.html'
                            className='btn btn-primary'
                          >
                            <img src={next} alt='' className='me-1' />
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div
            className='tab-pane fade'
            id='contact'
            role='tabpanel'
            aria-labelledby='contact-tab'
          >
            <section className='experience container'>
              <div className='d-flex justify-content-evenly flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row'>
                <div className='timeline'>
                  <h3>Education</h3>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Frontend Development & Node.js</h3>
                      <p>Online - HexSchool,Taiwan</p>
                      <p>Apr 2022 ~ Present</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Full Stack Web Development</h3>
                      <p>
                        Online - ReDI School of Digital Integration,Germany
                        <p>Sep 2023 ~ Mar 2024</p>
                      </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Diploma of Marketing and communication</h3>
                      <p>
                        EIM internation institute,Australia <br />
                      </p>
                      <p>2017 ~ 2019</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Diploma of Leadership and Management</h3>
                      <p>Holmes Institute, Australia</p>
                      <p>2015 ~ 2017</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3> Recreation and Healthcare Management </h3>
                      <p>Chia Nan University of Pharmacy and Science,Taiwan</p>
                      <p>2005 ~ 2007</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Department of Nursing</h3>
                      <p>Fooyin University,Taiwan</p>
                      <p>2000 ~ 2005</p>
                    </div>
                  </div>
                </div>

                <div className='timeline'>
                  <h3>Experience</h3>

                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Full-stack project of assistant</h3>
                      <p>Hex school</p>

                      <p>Jun 2023 - Present</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Personal goal pursuit</h3>
                      <p>career transition </p>
                      <p>Apr 2022 - May 2023</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>E-commerce assistant</h3>
                      <p>Mulan Home Webshop, Hungary</p>
                      <p>Apr 2021 - Mar 2022 </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Receptionist</h3>
                      <p>Hungary& Australia</p>
                      <p>Nov 2014 - Mar 2021 </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Administrative /Online marketing Assistant</h3>
                      <p>Authentic Filson Taiwan</p>
                      <p>Aug 2011 - Jul 2014 </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Assistant Director Of Human Resources</h3>
                      <p>Taiwan Hodaka Industrial Co., Ltd</p>
                      <p>Mar 2010 - Jun 2011 </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Nurse</h3>
                      <p>Physical Examination Center </p>
                      <p>Jul 2007 - Jan 2010</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

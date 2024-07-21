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
            <h3 className='name'>嚴茲煌</h3>
            <p className='job'>前端工程師 MERN</p>
            <p className='email'>912yan@gmail.com</p>
          </div>

          <ul className='socials'>
            <li className='icon'>
              <a href='https://github.com/tzuhuangyen'>
                <img src={github} alt='github' />
              </a>
            </li>
            <li className='icon'>
              <a href='www.linkedin.com/in/tzu-huang-yen-971b45192'>
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
              技能
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
              作品集
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
              經歷
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
                  <h3>前端開發</h3>
                  <ul className='mb-3 lh-base'>
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li> jQuery</li>
                    <li>Github Git</li>
                    <li>HTML CSS Bootstrap 5</li>
                  </ul>
                </div>
                <div className='skill backend me-4'>
                  <h3>後端開發</h3>

                  <ul className='mb-3 lh-base'>
                    <li>Python</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Render</li>
                  </ul>
                </div>
                <div className='skill ui'>
                  <h3>使用者介面設計</h3>

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
                      <h3 className='card-header'>寵物零食電商 </h3>

                      <div className='card-body'>
                        <p className='card-text lh-sm mb-3'>
                          我使用MERN（MongoDB、Express、React、Node.js）和Vite開發了一個全端專案，專注於使用Bootstrap、SCSS和Swiper實現響應式網頁設計（RWD）原則，以優化用戶界面（UI）體驗。在後端部分，我利用MERN技術棧（MongoDB、Express、React、Node.js），並整合了Axios
                          API來建立前端和後端之間的高效通信。
                          在整個專案過程中，我採用了漸進增強的方法，不斷完善和改進前端和後端的功能。
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
                      <h3 className='card-header'>天氣查詢 API</h3>
                      <div className='card-body'>
                        <p className='card-text lh-sm mb-3'>
                          應用程式使用 OpenWeather API 來獲取天氣數據，並使用
                          Unsplash API
                          來設定背景圖片。使用者可以透過輸入城市名稱來獲取天氣數據，並根據使用者的地理位置自動顯示本地天氣資訊。
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
                      <h3 className='card-header'>猜數字遊戲 JavaScript</h3>
                      <div className='card-body'>
                        <p className='card-text lh-sm mb-3'>
                          所提供的程式碼是用JavaScript編寫的，設定了一個用戶需要猜測1到20之間的秘密數字的遊戲。它包括邏輯來檢查用戶的猜測是否正確，更新分數，顯示猜測過高或過低的消息，並處理重新開始遊戲的功能。此外，即使遊戲重新開始，程式碼也會追蹤達到的最高分。
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
                          這個專案透過使用HTML、CSS、JavaScript、AJAX、API整合和C3來建立一個線上家具商店。主要目標是練習使用AJAX和API來取得和顯示產品資料。該項目還包括產品篩選、購物車、總價計算、C3圖表視覺化和管理員的訂單詳情等功能。
                          該專案的亮點是AJAX和API整合的實現。
                          AJAX透過API呼叫即時取得產品數據，提供最新的家具產品訊息，如名稱、描述、價格和圖片。這種動態資料取得確保了產品清單的準確性和時效性。
                          購物車功能允許用戶在不刷新頁面的情況下添加和刪除商品。
                          JavaScript動態更新購物車，提供流暢高效的購物體驗。
                          為了進行銷售資料分析，專案中整合了C3，這是一個用於圖表視覺化的JavaScript庫。透過使用後台訂單訊息，管理員可以輕鬆地查看和分析銷售趨勢。
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
                  <h3>求學經歷</h3>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>前端 & 後端開發</h3>
                      <p>
                        六角學院
                        <br />
                        2022.04 ~
                      </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>全端網頁開發Full Stack Web Development</h3>
                      <p>
                        ReDI School of Digital Integration
                        <br />
                        2023.10 ~ 2024.04
                      </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Diploma of Marketing and communication</h3>
                      <p>
                        EIM internation institute,Australia <br />
                        2017.06 ~ 2019.06
                      </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>Diploma of Leadership and Management</h3>
                      <p>
                        Holmes Institute, Australia
                        <br />
                        2015 ~ 2017
                      </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>休閒保健管理系</h3>
                      <p>
                        嘉南藥理科技大學
                        <br />
                        2005 ~ 2007
                      </p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>護理科</h3>
                      <p>
                        輔英科技大學
                        <br />
                        2000 ~ 2005
                      </p>
                    </div>
                  </div>
                </div>

                <div className='timeline'>
                  <h3>工作經歷</h3>

                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>專題教練</h3>
                      <p>六角學院</p>
                      <p>
                        協助學程式學生從0到1完成專案，
                        <br />
                        協助專案時程規劃和建議
                      </p>
                      <p>2023.06~</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>個人轉職規劃</h3>
                      <p>career transition </p>
                      <p>2022.04~2023.05</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>電商助理</h3>
                      <p>Mulan Home Webshop, Hungary</p>
                      <p>2021.04~2022.03</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>飯店櫃檯</h3>
                      <p>Hungary& Australia</p>
                      <p>2014.11~2021.03</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>電商助理</h3>
                      <p>Authentic Filson Taiwan</p>
                      <p>2011.08~2014.07</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>人資助理</h3>
                      <p>台灣穗高</p>
                      <p>2010.03~2011.06</p>
                    </div>
                  </div>
                  <div className='timeline-item'>
                    <div className='timeline-icon'></div>
                    <div className='timeline-content'>
                      <h3>護士</h3>
                      <p>新樓醫院</p>
                      <p>2007.07~2010.01</p>
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

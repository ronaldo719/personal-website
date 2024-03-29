
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faLocationDot, faFlagUsa, faGraduationCap, faCalendar, faStar, faXmark, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import backgroundImg from "./images/header-background.jpg"
import profileImg from "./images/IMG_4184.jpeg"
import resume from './myResume.pdf'
import Navbar from "./sections/Navbar";
import Contact from './sections/Contact'



function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="homepage">
        <img className="portfolioImg" src={backgroundImg} alt="background image of man looking at the sky"></img>
        <div className="intro_text">
          <h1 className="nameTitle">Ronaldo Garcia</h1>
          <p className="aboutDescription">I'm a <strong>Software Engineer</strong> at <strong>Mastercard</strong> in Boston, specializing in problem-solving within the .NET stack of our platform.</p>
          <div className="socialLinks">
            <a href="https://github.com/ronaldo719" target="_blank"><FontAwesomeIcon className="socialLink" icon={faGithub} /> </a>
            <a href="https://www.linkedin.com/in/ronaldogarcia7/" target="_blank"><FontAwesomeIcon className="socialLink" icon={faLinkedin} /></a>
          </div>
          <a href={resume} download="Ronaldo's Resume"><button className="aboutButtons" id="downloadResume">Resume <FontAwesomeIcon icon={faDownload} />
          </button></a>
          <button className="aboutButtons"><a href="#contact">Contact</a></button>
        </div>

      </div>
      <div className="aboutSection" id="about">
        <div className="rightSideAbout">
          <img className="profileImg" src={profileImg}></img>
        </div>


        <div className="leftSideAbout">
          <h2>About me</h2>
          <p className="bioSection">
            I started my computer science journey at my local community college, where I discovered computer science, and after three years, I transferred to the University of California, San Diego. During my first and second years, I explored the different fields of computer science through the extensive and rigorous courses offered here. As a result, I developed an interest in software development. Now, I'm working at Mastercard as a Software Engineer.
              <br></br>
            <br></br>
             In my free time outside of work, I find joy in playing soccer, indulging in gaming, and dedicating my efforts to various side projects.
            </p>

          <div class="aboutGrid">
            <div class="div1"><FontAwesomeIcon icon={faLocationDot} />  <span className="bulletPoints"> <strong className="bulletTitles">Location:</strong> Boston, MA</span></div>
            <div class="div2"><FontAwesomeIcon icon={faCalendar} />  <span className="bulletPoints"> <strong className="bulletTitles"> Age:</strong> 24</span> </div>
            <div class="div3"><FontAwesomeIcon icon={faFlagUsa} /> <span className="bulletPoints">  <strong className="bulletTitles">Nationality: </strong>American / Mexican</span></div>
            <div class="div4"> <FontAwesomeIcon icon={faStar} />  <span className="bulletPoints"> <strong className="bulletTitles">Interests:</strong> Soccer, Hiking, Attack on Titan</span></div>
            <div class="div5"><FontAwesomeIcon icon={faGraduationCap} /> <span className="bulletPoints"> <strong className="bulletTitles"> Study:</strong> Univisty of California, San Diego</span> </div>
            <div class="div6"><FontAwesomeIcon icon={faBuilding} /> <span className="bulletPoints"> <strong className="bulletTitles"> Employment:</strong> Mastercard Inc.</span> </div>
          </div>
        </div>
      </div>
      <div className="resumeContainer" id="resume">
        <div className="educationSection">
          <div className="sectionTitles">
            <h2 className="titleResume">Education</h2>
          </div>
          <div className="resumeRight">
            <div className="sectionInformation">

              <h2 className="leftTitle">Computer Science B.S.</h2>
              <p className="subInfo">
                <i>University of California, San Diego </i>  - March 2023
             </p>

            </div>
            <div className="sectionInformation">

              <h2 className="leftTitle"> Natural Science and Mathematics, Physics A.S. </h2>
              <p className="subInfo">
                <i>Napa Valley College</i>  - June 2020
             </p>

            </div>
          </div>


        </div>
        <div className="projectSection">
          <div className="sectionTitles">
            <h2 className="titleResume">Experience/Projects</h2>
          </div>
          <div className="resumeRight">
            <div className="sectionInformation">

              <h2 className="leftTitle">Software Engineer I</h2>
              <p className="subInfo">
                <i>Mastercard	</i>  - August 2023 – Present

             </p>
              <ul className="resumeBullet">
                <li>Work on the .NET stack and use tools such as AWS Cloud services, Postman, SQL, and SignalFX.
                </li>

              </ul>
            </div>
            <div className="sectionInformation">

              <h2 className="leftTitle">UC San Diego Early Research Scholars Program  </h2>
              <p className="subInfo">
                <i>Research Mentee	</i>  - September 2020 – June 2021

             </p>
              <ul className="resumeBullet">
                <li>Worked on a research project, which focused on analyzing the difficulties of non-native speakers in computer science.
</li>
                <li>Devopled Python solutions to the interview questions, which were given to UCSD participants to solve during the interview process of the research method. </li>
                <li>  While more research is needed in the area, our results showed the need for more beginner-friendly official documentation and tech companies rethinking how they conduct their think-aloud interviews.  </li>
                <li>  	Assessed and presented quantitative and qualitative analysis. </li>
              </ul>
            </div>
            <div className="sectionInformation">

              <h2 className="leftTitle">Mary's Hair Cuts <a href="https://maryswebsite.netlify.app" target="_blank"><i className="websiteLink"> Live Website</i></a>  </h2>
              <p className="subInfo">
                <i>React.js, Node.js		</i>  - July 2022 - Present
             </p>
              <ul className="resumeBullet">
                <li>Designed a webapp for Mary’s Hair Cuts.
</li>
                <li> Implemented i18next framework to make the site accessible to both Spanish and English clients.    </li>
                <li> Utilized EmailJS APIs for contact us emails.   </li>
              </ul>
            </div>

            <div className="sectionInformation">

              <h2 className="leftTitle">ZooSeeker Android App </h2>
              <p className="subInfo">
                <i> Java, Android, GIT, Junit		</i>  - Spring 2022
             </p>
              <ul className="resumeBullet">
                <li>ZooSeeker is an Android app allowing users to determine the optimal route to visit their desired exhibits at the San Diego Zoo with the least walking possible.</li>
                <li>	Implemented the database for the list of exhibits using RoomDatabase and the user interface of the list of exhibits.</li>
                <li> Deployed agile development principles into practice using GitHub and ZenHub in order to allow team of 6 programmers to effectively work together to develop application.  </li>
                <li> Built unit, integration, and systems tests in Android Studio through JUnit, Espresso, and Robolectric.</li>
              </ul>
            </div>
            <div className="sectionInformation">

              <h2 className="leftTitle">Personalized Twitch Dashboard <a href="https://personalized-twitch-dashboard.ronaldo719.repl.co/" target="_blank"><i className="websiteLink"> Live Website</i></a>  </h2>
              <p className="subInfo">
                <i> Replit IDE, Next.js, React.js, Twitch API	</i>  - Summer 2021
             </p>
              <ul className="resumeBullet">
                <li>Collaborated on a next.js web app that connects to the Twitch API and database to help a user track their favorite streamers.
</li>
                <li>Developed a custom API  utilizing Replit  database to retrieve or insert or delete the twitch streamer data.  </li>
                <li> Devised a custom grid to display all the streamer channels in a adequate manner.       </li>
              </ul>
            </div>

            <div className="sectionInformation">

              <h2 className="leftTitle">Weather <a href="https://ronaldo719.github.io/weatherAPI/" target="_blank"><i className="websiteLink"> Live Website</i></a>  </h2>
              <p className="subInfo">
                <i> HTML, CSS, and JavaScript	</i>  - Fall 2021
             </p>
              <ul className="resumeBullet">
                <li>Built a weather webapp to display the weather of major cities around the world by utilizing the MetaWeather API.
</li>
                <li>Utilized the jQuery getJSON function to turn the weather server data into JSON data. </li>
                <li>Implemented Google Translate API which allows users to switch to their native language.  </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="skillsSection">
          <div className="sectionTitles">
            <h2 className="titleResume">Skills</h2>
          </div>

          <div className="resumeRight">
            <div class="skillsGrid">
              <div class="languageSkills">
                <h2 className="skillsCategory">Spoken languages</h2>
                <p className="skillsTitle"> English</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '100%' }} ></div>
                </div>
                <p className="skillsTitle">Spanish</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '100%' }} ></div>
                </div>
              </div>
              <div class="frontSkills">
                <h2 className="skillsCategory">Frontend development</h2>
                <p className="skillsTitle">React</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '70%' }} ></div>
                </div>
                <p className="skillsTitle">JavaScript</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '80%' }} ></div>
                </div>
                <p className="skillsTitle">CSS</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '80%' }} ></div>
                </div>
                <p className="skillsTitle">HTML</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '100%' }} ></div>
                </div>
              </div>
              <div class="backSkills">
                <h2 className="skillsCategory">Backend development</h2>
                <p className="skillsTitle">Node.js</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '70%' }} ></div>
                </div>
                <p className="skillsTitle">Express.js</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '80%' }} ></div>
                </div>

                <p className="skillsTitle">MongoDB</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '80%' }} ></div>
                </div>
              </div>
              <div class="mobileSkills">
                <h2 className="skillsCategory">Programming Languages</h2>
                <p className="skillsTitle">Java</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '70%' }} ></div>
                </div>
                <p className="skillsTitle">C++</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '70%' }} ></div>
                </div>
                <p className="skillsTitle">Python</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '80%' }} ></div>
                </div>
                <p className="skillsTitle">C</p>
                <div className="progressBar">
                  <div className="progressBarStatus" style={{ height: '24px', width: '60%' }} ></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Contact></Contact>
      <div className="footer">
        <div className="footerSocial">
          <ul>
            <li><a href="mailto:rgarciahernandez.ucsd.edu"><FontAwesomeIcon icon={faEnvelope} className="footerList" /></a></li>
            <li> <a href="https://github.com/ronaldo719" target="_blank"><FontAwesomeIcon className="footerList" icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/ronaldogarcia7/" target="_blank"><FontAwesomeIcon className="footerList" icon={faLinkedin} /></a></li>
          </ul>
        </div>


        <div className="copyright">@ Copyright 2022 Ronaldo Garcia</div>
      </div>

    </>

  );

}
export default App;

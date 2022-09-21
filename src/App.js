
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faLocationDot, faFlagUsa, faGraduationCap, faCalendar, faStar } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import portfolioImg from "./images/portfolio.jpg"
import profileImg from "./images/IMG_4184.jpeg"
import Navbar from "./sections/Navbar";
import Contact from './sections/Contact'



class App extends Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
      <>
        <Navbar></Navbar>
        <div className="aboutContainer">
          <img className="portfolioImg" src={portfolioImg} alt="background image of man looking at the sky"></img>
          <div className="aboutInfo">
            <h1 className="nameTitle">I'm Ronaldo Garcia.</h1>
            <p className="aboutDescription">I'm a senior majoring in <strong>Computer Science</strong> at the <strong>University of California, San Diego</strong>.
          <br></br>
              <br></br>
          In my free time, you can catch me on the field playing soccer, at the beach, or exploring beautiful San Diego.
                    </p>
            <div className="socialLinks">
              <a href="https://github.com/ronaldo719" target="_blank"><FontAwesomeIcon className="socialLink" icon={faGithub} /> </a>
              <a href="https://www.linkedin.com/in/ronaldogarcia7/" target="_blank"><FontAwesomeIcon className="socialLink" icon={faLinkedin} /></a>
            </div>
            <a href={portfolioImg} download="Ronaldo's Resume"><button className="aboutButtons" id="downloadResume">Resume <FontAwesomeIcon icon={faDownload} />
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
              Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.
          </p>

            <div class="aboutGrid">
              <div class="div1"><FontAwesomeIcon icon={faLocationDot} />  <span className="bulletPoints"> <strong className="bulletTitles">Location:</strong> San Diego, CA</span></div>
              <div class="div2"><FontAwesomeIcon icon={faCalendar} />  <span className="bulletPoints"> <strong className="bulletTitles"> Age:</strong> 22</span> </div>
              <div class="div3"><FontAwesomeIcon icon={faFlagUsa} /> <span className="bulletPoints">  <strong className="bulletTitles">Nationality: </strong>American</span></div>
              <div class="div4"> <FontAwesomeIcon icon={faStar} />  <span className="bulletPoints"> <strong className="bulletTitles">Interests:</strong> Soccer, Hiking, House of the Dragons</span></div>
              <div class="div5"><FontAwesomeIcon icon={faGraduationCap} /> <span className="bulletPoints"> <strong className="bulletTitles"> Study:</strong> Univisty of California, San Diego</span> </div>
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
                  <br></br>
                  GPA: 3.4
             </p>

              </div>
              <div className="sectionInformation">

                <h2 className="leftTitle"> Natural Science and Mathematics, Physics A.S. </h2>
                <p className="subInfo">
                  <i>Napa Valley College</i>  - June 2020
                       <br></br>
                  GPA: 3.7
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

                <h2 className="leftTitle">Mary's Hair Salon </h2>
                <p className="subInfo">
                  <i> Replit IDE, Next.js, React.js, Twitch API	</i>  - Summer 2021
             </p>
                <ul className="resumeBullet">
                  <li>Collaborated on a next.js web app that connects to the Twitch API and database to help a user track their favorite streamers.
</li>
                  <li>Developed a custom API to obtain the twitch channel data from the Twitch API after a user enters a streamer's name.</li>
                  <li>  Built a function to storage our Streamer data onto the Replit database.  </li>
                </ul>
              </div>

              <div className="sectionInformation">

                <h2 className="leftTitle">Android App </h2>
                <p className="subInfo">
                  <i> Replit IDE, Next.js, React.js, Twitch API	</i>  - Summer 2021
             </p>
                <ul className="resumeBullet">
                  <li>Collaborated on a next.js web app that connects to the Twitch API and database to help a user track their favorite streamers.
</li>
                  <li>Developed a custom API to obtain the twitch channel data from the Twitch API after a user enters a streamer's name.</li>
                  <li>  Built a function to storage our Streamer data onto the Replit database.  </li>
                </ul>
              </div>
              <div className="sectionInformation">

                <h2 className="leftTitle">Personalized Twitch Dashboard </h2>
                <p className="subInfo">
                  <i> Replit IDE, Next.js, React.js, Twitch API	</i>  - Summer 2021
             </p>
                <ul className="resumeBullet">
                  <li>Collaborated on a next.js web app that connects to the Twitch API and database to help a user track their favorite streamers.
</li>
                  <li>Developed a custom API to obtain the twitch channel data from the Twitch API after a user enters a streamer's name.</li>
                  <li>  Built a function to storage our Streamer data onto the Replit database.  </li>
                </ul>
              </div>

              <div className="sectionInformation">

                <h2 className="leftTitle">Weather </h2>
                <p className="subInfo">
                  <i> HTML, CSS, and JavaScript		</i>  - Fall 2021
             </p>
                <ul className="resumeBullet">
                  <li>Built a weather webapp to display the weather of major cities around the world by utilizing the MetaWeather API.
</li>
                  <li>Utilized the jQuery getJSON function to turn the weather sevrer data into JSON data. </li>
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
                    <div className="progressBarStatus" style={{ height: '24px', width: '80%' }} ></div>
                  </div>
                  <p className="skillsTitle">C++</p>
                  <div className="progressBar">
                    <div className="progressBarStatus" style={{ height: '24px', width: '80%' }} ></div>
                  </div>
                  <p className="skillsTitle">Python</p>
                  <div className="progressBar">
                    <div className="progressBarStatus" style={{ height: '24px', width: '80%' }} ></div>
                  </div>
                  <p className="skillsTitle">C</p>
                  <div className="progressBar">
                    <div className="progressBarStatus" style={{ height: '24px', width: '70%' }} ></div>
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


          <span className="copyright">@ Copyright 2022 Ronaldo Garcia</span>
        </div>

      </>

    );
  }
}
export default App;

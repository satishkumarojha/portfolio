import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/profile4.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Satish Kumar Ojha </span> and I belong to {" "}
                <span className="different">
                  {" "}
                  Indore, Madhya-pradesh, India.               </span>
                 I have completed my graduation in BTech (Electronics and Instrumentation Engineering)
                from{" "}
                <span className="different">
                  Medicaps University, Indore (MP) {" "}
                </span>
                with a specialization in Computer Technology
                . After Completing my gradutation I joined {" "}
                <span className="different">Masai School</span>, where I developed my programming skills.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Filmmaking{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Creative Thinking{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Esports{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Player{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
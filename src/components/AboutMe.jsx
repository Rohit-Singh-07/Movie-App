import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="overflow-hidden h-[92.7vh] relative">
        <div className="absolute h-full w-full backdrop-blur-sm flex justify-center items-center gap-[4vw]">
          <img
            className="rounded-full "
            src="https://media.licdn.com/dms/image/D5635AQFDYUla5bTr7A/profile-framedphoto-shrink_200_200/0/1710848527516?e=1712156400&v=beta&t=ZWiPy_3rGxgdgCS-UP7iRw8JRlflv1Z5M57Chz6Rrmc"
            alt=""
          />
          <div className="w-fit">
            <h1 className="text-[4vw] text-zinc-300 top-0 left-0">Namaste!</h1>
            <h1 className="text-[4vw] text-yellow-300 top-0 left-0">
              I'm Rohit Singh
            </h1>
            <p className="w-[30vw] text-zinc-300 text-[1vw]">
              currently studying Computer Science Engineering at Lovely
              Professional University. Passionate about web development, I
              specialize in React, Redux, and Tailwind CSS. I love bringing
              websites to life with animations using GSAP, Framer Motion, and
              Locomotive Scroll. Let's explore the endless possibilities of
              technology together!
            </p>
            <br />
            <div className="flex gap-[2vw]">
              <a
                href="www.linkedin.com/in/rohitsingh77"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-[2.5vw] w-[6vw] rounded-md object-cover"
                  src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2023/08/1637655738-linkedin-101-hero2x.jpg?resize=738%2C320&ssl=1"
                  alt=""
                />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-[2.5vw] w-[6vw] rounded-md object-cover"
                  src="https://allvectorlogo.com/img/2021/12/github-logo-vector.png"
                  alt=""
                />
              </a>

              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  className="h-[2.5vw] w-[2.5vw] rounded-md object-cover"
                  src="https://us.123rf.com/450wm/aiart30/aiart302303/aiart30230303494/199524793-pixel-camera-icon-on-colorful-gradient-background-pixel-camera-icon-pixel-camera-vector-icon.jpg?ver=6"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <img
          className="w-screen h-full object-cover"
          src="https://removal.ai/wp-content/uploads/2021/09/black-background-08-vecteezy.png"
          alt=""
        />
      </div>
    </>
  );
};

export default AboutMe;

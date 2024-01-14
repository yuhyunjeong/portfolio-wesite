"use client";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <section>
      <div className="grid grid-cols-1 ">
        <div className="place-self-center text-center">
          <h1 className="text-black mb-4 text-4xl lg:text-6xl font-extrabold">
            {""}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Yuhyun",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Jade",
                1000,
                "web developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br></br>
          <p className="text-black text-lg lg:text-xl">
            I have experience with full-stack development using Java,
            Spring(boot), MySQL, Oracle on the backend and React,
            JavaScript(JQuery), HTML5, CSS, Bootstrap on the frontend. Other
            skills include experience with Docker, Linux and a little bit of
            Matlab. I can be a good front-end developer who can consider both
            users and back-end developers.
          </p>
        </div>
      </div>
    </section>
  );
}

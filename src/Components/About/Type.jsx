import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Full Stack Web Developer", "Filmmaking", "Creative Thinking", "Esports"],
          autoStart: true,
          loop: true,
          deleteSpeed: 40
        }}
      />
    </>
  );
};
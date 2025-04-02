import { JSX } from "react";

interface AboutData {
  info: JSX.Element;
}

/**
 * TODO: replace `info` with your personal information.
 */
const aboutData: AboutData = {
  info: (
    <>
      <p>
        Hey, my name is Enzo, and I'm originally from Fresno, Califronia,
        But I've moved around from China back into the states in Maine! Currently, I'm a sophomore and aspiring entrepuernuer studying at Boston University.
      </p>
      <p>
        I absolutely love learning new skills and challenging myself in
        different respects. To learn more about what I've been working on, feel
        free to check out my <a href="https://www.flicksbyenzo.com/">GitHub</a>{" "}
        😁.
      </p>
    </>
  ),
};

export default function About() {
  return (
    <>
      <h2 id="about">About me</h2>
      {aboutData.info}
    </>
  );
}

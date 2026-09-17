import Post from "../ui/post/post";
import Cards from "../ui/cards/cards";

import pic1 from "/picture1.png";
import pic2 from "/picture2.png";
import pic3 from "/picture3.png";

export default function HomePage() {
  return (
    <>
      <section className="introduction">
        <div className="introduction-textbox">
          <h1 className="introduction-title">
            Hi, I am John, Creative Technologist
          </h1>
          <p className="introduction-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="introduction-button">Download Resume</button>
        </div>
        <img src="/avatar.png" alt="" className="introduction-avatar" />
      </section>
      <section>
        <h2>Recent posts</h2>
        <div className="row">
          <Post
            title="Making a design system from scratch"
            date="12 Feb 2020"
            annotation="Design, Pattern"
          />
          <Post
            title="Creating pixel perfect icons in Figma"
            date="12 Feb 2020"
            annotation="Figma, Icon Design"
          />
        </div>
      </section>
      <section>
        <h2>Featured works</h2>
        <ul className="collumn">
          <li>
            <Cards
              images={pic1}
              title="Designing Dashboards"
              date="2020"
              annotation="Dashboard"
            />
          </li>
          <li>
            {" "}
            <Cards
              images={pic2}
              title="Vibrant Portraits of 2020"
              date="2018"
              annotation="Illustration"
            />
          </li>

          <li>
            {" "}
            <Cards
              images={pic3}
              title="36 Days of Malayalam type"
              date="2018"
              annotation="Typography"
            />
          </li>
        </ul>
      </section>
    </>
  );
}

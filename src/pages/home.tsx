import Post from "../ui/post/post";
import Cards from "../ui/cards/cards";
import Footer from "../ui/footer/footer";

import pic1 from "/picture1.png";
import pic2 from "/picture2.png";
import pic3 from "/picture3.png";

export default function HomePage() {
  return (
    <>
      <section>
        <h1>Hi, I am John, Creative Technologist</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <img src="/avatar.png" alt="" />
        <div>Download Resume</div>
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
        <div className="collumn">
          <Cards
            images={pic1}
            title="Designing Dashboards"
            date="2020"
            annotation="Dashboard"
          />
          <Cards
            images={pic2}
            title="Vibrant Portraits of 2020"
            date="2018"
            annotation="Illustration"
          />
          <Cards
            images={pic3}
            title="36 Days of Malayalam type"
            date="2018"
            annotation="Typography"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

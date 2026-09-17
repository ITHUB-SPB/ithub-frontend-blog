import Post from "../ui/post/post";
import Cards from "../ui/cards/cards";
import pic1 from "/images.jpg"
import Footer from "../ui/footer/footer";

export default function HomePage() {
  return (
    <>
      <h1>Hi, I am John, Creative Technologist</h1>
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
        <div>
          <Cards
            images={pic1}
            title="Designing Dashboards"
            date="2020"
            annotation="Dashboard"
          />
          {/* <Cards
            images={pic1}
            title="Vibrant Portraits of 2020"
            date="2018"
            annotation="Illustration"
          />
          <Cards
            images={pic1}
            title="36 Days of Malayalam type"
            date="2018"
            annotation="Typography"
          /> */}
        </div>
      </section>
      <Footer/>
    </>
  );
}

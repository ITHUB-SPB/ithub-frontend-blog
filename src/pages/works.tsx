import Cards from "../ui/cards/cards";
import Footer from "../ui/footer/footer";

import pic1 from "/picture1.png";
import pic2 from "/picture2.png";
import pic3 from "/picture3.png";
import pic4 from "/picture4.png";

export default function WorksPage() {
  return (
    <>
      <h1>Works</h1>
      <section>
        <h2>Featured works</h2>
        <div>
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
          <Cards
            images={pic4}
            title="Componentse"
            date="2018"
            annotation="Components, Design"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

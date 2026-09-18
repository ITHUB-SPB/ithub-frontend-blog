import Cards from "../ui/cards/cards";

import pic1 from "/picture1.png";
import pic2 from "/picture2.png";
import pic3 from "/picture3.png";
import pic4 from "/picture4.png";

export default function WorksPage() {
  return (
    <>
      
      <section className="featured__works">
        <h1 className="title__works">Works</h1>
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
            <Cards
              images={pic2}
              title="Vibrant Portraits of 2020"
              date="2018"
              annotation="Illustration"
            />
          </li>
          <li>
            <Cards
              images={pic3}
              title="36 Days of Malayalam type"
              date="2018"
              annotation="Typography"
            />
          </li>
          <li>
            <Cards
              images={pic4}
              title="Componentse"
              date="2018"
              annotation="Components, Design"
            />
          </li>
        </ul>
      </section>
    </>
  );
}

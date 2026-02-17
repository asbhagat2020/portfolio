// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Ashwin Bhagat </span>
//             from <span className="purple"> Gondia, Maharastra.</span>
//             <br />
//             I am Full-Stack WebDeveloper
//             <br />
//             I have completed Bachelor of Science in Computer Science from Nagpur University. 
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Cricket
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Coocking
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//             "Strive to build things that make a difference!"{" "}
//           </p>
//           <footer className="blockquote-footer">Ashwin</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;






import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Ashwin Bhagat</span> from{" "}
            <span className="purple">Gondia, Maharashtra, India.</span>
            <br />
            <br />

            I am a passionate{" "}
            <span className="purple">Full Stack MERN Developer</span> with
            2+ years of hands-on experience building scalable and
            production-ready web applications.
            <br />
            <br />

            I specialize in developing end-to-end platforms using{" "}
            <span className="purple">
              MongoDB, Express.js, React.js, and Node.js
            </span>
            , along with modern frameworks like <span className="purple">Next.js</span>.
            <br />
            <br />

            I have contributed to real-world products including
            e-commerce marketplaces and property platforms — working on
            REST APIs, payment integrations (Stripe), dashboards, and
            performance optimization.
            <br />
            <br />

            I hold a Bachelor of Science in Computer Science from
            Nagpur University and continuously strive to learn new
            technologies and improve my development skills.
            <br />
            <br />

            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>

          <footer className="blockquote-footer">
            Ashwin Bhagat
          </footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

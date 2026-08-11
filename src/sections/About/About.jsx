import { journey } from "../../data/journey";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">

                {/* About Me */}
                <div className="about-content">
                    <h2>About Me</h2>

                    <p>
                        I'm a final year Engineering student passionate about
                        solving problems and building meaningful products.
                    </p>

                    <p>
                        I love working with the MERN stack and have a strong
                        foundation in Data Structures & Algorithms.
                    </p>

                    <p>
                        When I'm not coding, you'll find me playing cricket,
                        drawing or exploring new technologies.
                    </p>
                </div>

                {/* My Journey */}
                <div className="journey-content">
                    <h2> My Journey</h2>

                    <div className="journey-timeline">
                        {journey.map((item) => (
                            <div className="journey-item" key={item.year}>
                                <span className="journey-year">{item.year}</span>

                                <span className="journey-title">
                                    {item.title}
                                </span>

                                <span className="journey-dot"></span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
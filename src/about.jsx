import resume from "./assets/resume.pdf";

function About() {
    return(
        <section className="about" id="about">
            <div className="row">
                <h2>About Me</h2>
                <div className="about__content">
                    <div className="about__text">
                        <p>
                            A Tech enthusiast who's goal is to build a fulfilling career in software and web development, cybersecurity, and ethical hacking. I’m
                            passionate about creating innovative solutions, strengthening digital security, and contributing to a safer online world while growing and
                            learning in these fields.
                        </p>
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="btn">My Resume</a>
                    </div>

                </div>
            </div>
        </section>
    );
}1

export default About;
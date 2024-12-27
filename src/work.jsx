import github from "./images/github.svg";
import minesweeper from "./images/minesweeper.jpg";
import vipershell from "./images/vipershell.jpg";
import encryptor from "./images/encryptor.jpg";
import keylogger from "./images/keylogger.jpg";
import roulette from "./images/roulette.jpg";
import drowsiness from "./images/drowsiness.jpg";

function Work() {
    return(
        <section className="work" id="work">
            <div className="row">
                <h2>My Works</h2>
                <div className="work__boxes">
                <hr style={{border: "1px solid white", marginBottom: "-30px"}} />

                    <div className="work__box">
                        <div className="work__text">
                            <h3>Minesweeper</h3>
                            <p>
                                A Classic Minesweeper game using HTML, CSS, and Js.
                            </p>
                            <ul className="work__list">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>

                            <div className="work__links">
                                <a href="https://github.com/FireBolt393/minesweeper/" target="_blank" className="link__text">
                                Visit Site <span>&rarr;</span>
                                </a>
                                <a href="https://github.com/FireBolt393/minesweeper/" title="View Source Code" target="_blank">
                                <img src={github} className="work__code" alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className="work__image-box">
                        <img src={minesweeper} className="work__image" alt="Project 1" />
                        </div>
                    </div>
                    <hr style={{border: "1px solid white", marginBottom: "10px"}} />

                    <div className="work__box">
                        <div className="work__text">
                            <h3>Drowsiness Detector</h3>
                            <p>
                                A Convolutional neural network model that uses webcam to detect drowsiness in real time.
                            </p>
                            <ul className="work__list">
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>Tensorflow</li>
                                <li>Keras</li>
                                <li>OpenCV</li>
                            </ul>

                            <div className="work__links">
                                <a href="https://github.com/FireBolt393/Drowsiness-Detector" target="_blank" className="link__text">
                                Visit Site <span>&rarr;</span>
                                </a>
                                <a href="https://github.com/FireBolt393/Drowsiness-Detector" title="View Source Code" target="_blank">
                                <img src={github} className="work__code" alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className="work__image-box">
                        <img src={drowsiness} className="work__image" alt="Project 1" />
                        </div>
                    </div>
                    <hr style={{border: "1px solid white", marginBottom: "-30px"}} />

                    <div className="work__box">
                        <div className="work__text">
                            <h3>XOR Encryptor and Decryptor</h3>
                            <p>
                            Basic Encryptor and Decryptor using XOR operation and base64 encoding.
                            </p>
                            <ul className="work__list">
                                <li>Python</li>
                            </ul>

                            <div className="work__links">
                                <a href="https://github.com/FireBolt393/XOR-Encryptor-and-Decryptor/" className="link__text">
                                Visit Site <span>&rarr;</span>
                                </a>
                                <a href="https://github.com/FireBolt393/XOR-Encryptor-and-Decryptor/">
                                <img src={github} className="work__code" title="View Source Code" alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className="work__image-box">
                        <img src={encryptor} className="work__image" alt="Project 1" />
                        </div>
                    </div>
                    <hr style={{border: "1px solid white", marginBottom: "10px"}} />

                    <div className="work__box">
                        <div className="work__text">
                            <h3>Login Triggered Key Logger</h3>
                            <p>
                            Python-based keylogger designed to activate when a login page is detected on the user's screen.
                            </p>
                            <ul className="work__list">
                                <li>Python</li>
                                <li>Socket</li>
                                <li>Tesseract OCR</li>
                            </ul>

                            <div className="work__links">
                                <a href="https://github.com/FireBolt393/Login-Triggered-Key-Logger" className="link__text">
                                Visit Site <span>&rarr;</span>
                                </a>
                                <a href="https://github.com/FireBolt393/Login-Triggered-Key-Logger">
                                <img src={github} className="work__code" title="View Source Code" alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className="work__image-box">
                        <img src={keylogger} className="work__image" alt="Project 3" />
                        </div>
                    </div>
                    <hr style={{border: "1px solid white", marginBottom: "10px"}} />

                    <div className="work__box">
                        <div className="work__text">
                            <h3>ViperShell-backdoor</h3>
                            <p>
                            Python-based backdoor designed for remote control over a victim's machine, featuring a terminal interface styled to mimic the look and feel of Kali Linux.
                            </p>
                            <ul className="work__list">
                                <li>Python</li>
                                <li>Socket</li>
                                <li>Subprocess</li>
                            </ul>

                            <div className="work__links">
                                <a href="https://github.com/FireBolt393/ViperShell-backdoor" target="_blank" className="link__text">
                                Visit Site <span>&rarr;</span>
                                </a>
                                <a href="https://github.com/FireBolt393/ViperShell-backdoor" title="View Source Code" target="_blank">
                                <img src={github} className="work__code" alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className="work__image-box">
                        <img src={vipershell} className="work__image" alt="Project 1" />
                        </div>
                    </div>
                    <hr style={{border: "1px solid white", marginBottom: "-5px"}} />
                    <div className="work__box">
                        <div className="work__text">
                            <h3>MBR-Roulette</h3>
                            <p>
                                A Russian-Roulette inspired multiplayer game that overwrites loser's Master Boot Record if playing on a virtual machine.
                            </p>
                            <ul className="work__list">
                                <li>Python</li>
                                <li>Socket</li>
                            </ul>

                            <div className="work__links">
                                <a href="https://github.com/FireBolt393/ViperShell-backdoor" target="_blank" className="link__text">
                                Visit Site <span>&rarr;</span>
                                </a>
                                <a href="https://github.com/FireBolt393/ViperShell-backdoor" title="View Source Code" target="_blank">
                                <img src={github} className="work__code" alt="GitHub" />
                                </a>
                            </div>
                        </div>
                        <div className="work__image-box">
                        <img src={roulette} className="work__image" alt="Project 1" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;
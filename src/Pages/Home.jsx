import '../App.css'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hand from "/hand.webp";
import memoji from "/memoji_new.webp";
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';


function Home() {

    const navigate = useNavigate();
    return (
        <div className='global-body'>

            <div className='background-wrapper'>
                <div className='gradient'></div>
            </div>
            <Header noBack="true" />
            <div>
                <div className="memoji-container">
                    <img src={memoji} alt="arnav's memoji" className="memoji" />
                    <img src={hand} alt="arnav's memoji" className="hand" />
                </div>

            </div>
            <h1>Hi, I{"'"}m Arnav Johri !</h1>
            <div className='tagline'>
                <code>Code, Netflix, Chill, Repeat.</code>

            </div>
            <div className="card">
                <div className="reach-icons">
                    <button
                        onClick={
                            () => {
                                navigate('/about')
                            }
                        }
                        className='glow-button'
                    >
                        About Me
                    </button>
                    <p>
                        Learn more about me or Get in touch!
                    </p>
                </div>





                <div className='reach-icons'>

                    <a href="mailto:ajohri2002@gmail.com">
                        <button >
                            < FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </a>

                    <a href="https://github.com/aj-02">
                        <button >
                            <FontAwesomeIcon icon={faGithub} />
                        </button>
                    </a>



                    <a href="https://www.linkedin.com/in/arnav-johri-7756072b9/">
                        <button >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </button>
                    </a>

                    <a href="https://gold-jayme-55.tiiny.site/">
                        <button >
                            <FontAwesomeIcon icon={faFile} />
                        </button>
                    </a>


                </div>


            </div>
        </div>
    )
}

export default Home;

/* eslint-disable react/no-unescaped-entities */
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import prev_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"
import { useRef } from "react"
const Testimonials = () => {

    const slider = useRef()

    let tx = 0

    const slideForward = () => {
        if (tx > -50) {
            tx -=25;
        }

        slider.current.style.transform =`translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx +=25;
        }

        slider.current.style.transform =`translateX(${tx}%)`
    }


    return (
        <div className="testimonials">
            <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
            <img src={prev_icon} alt="" className="back-btn" onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Julia Santos</h3>
                                    <span>Curitiba,PR</span>
                                </div>
                            </div>
                            <p>Gyansity University became my second family—a place where opportunities abound and lasting connections are forged. Grateful for the enriching experiences and invaluable connections I've cultivated here.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Passos</h3>
                                    <span>Apucarana,PR</span>
                                </div>
                            </div>
                            <p>At Gyansity University, I've uncovered a dynamic and inclusive environment, ripe with avenues for both academic advancement and personal development. Our passionate and devoted educators, coupled with unparalleled resources, foster an atmosphere of excellence. I'm truly grateful to contribute to and be nurtured by this inspiring community.</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Amanda Cristina</h3>
                                    <span>Londrina,PR</span>
                                </div>
                            </div>
                            <p>My time at Gyansity University has been nothing short of transformative. From the exceptional caliber of instruction to the rich tapestry of cultural diversity, every facet of my experience has been uniquely enriching. What sets this institution apart is its unwavering commitment to fostering both academic excellence and personal growth. I am immensely proud to call myself a member of this esteemed community.</p>

                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Joseph xandra</h3>
                                    <span>Pinhais,PR</span>
                                </div>
                            </div>
                            <p>My journey at Gyansity University was nothing short of extraordinary! From the passionate instructors to the inspiring peers, every moment was filled with growth and enlightenment. This institution not only equipped me for my professional path but also nourished my personal development in profound ways. I am deeply thankful to belong to such an outstanding academic family.</p>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
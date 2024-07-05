import React from 'react'
import { BsAwardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from '../../shared/CallToAction';
import "./style.scss";


const IntroContent = () => {
  return <div className="intro-content">
    <div className="layout">
        <div className="left-col">
            <h1 className='title'>
                <span className="small-text">
                    <span className="text">Hello</span>
                    <span className='icon'>
                        <img src={hand} />
                    </span>
                    <span className='text'>, I Am </span>
                </span>
                <span className="big-text">Pranjali Mishra</span>
            </h1>
            <p>A passionate and dedicated web developer and designer with a keen interest in cloud computing and technology. My journey in these fields has been driven by a relentless pursuit of innovation and excellence.

            I have actively participated in the Cloud Arcade program to enhance my knowledge of cloud computing and am a proud member of the Microsoft Learn Student Community. </p>
            <CallToAction text="Contact me"/>
            </div>
        <div className="right-col">
            <img src={girl} atl="JS Dev Hindi"/>
            <div className="highlights horizontal">
                <div className="icon">
                    <BsAwardFill/>
                </div>
                <div className="text">GDSC</div>
            </div>
            <div className="highlights verticle">
                <div className="icon">
                    <FaUser />
                </div>
                <div className="text">MLSA</div>
            </div>
        </div>
    </div>
  </div>
}

export default IntroContent
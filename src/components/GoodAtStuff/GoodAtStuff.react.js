import React from 'react';
import './GoodAtStuff.css'; // Path to your CSS file
import circlePic from './circle.png';
import selfieImage from './aboutJake.jpg'; // Path to your image file

function GoodAtStuff() {
    return (
        <div className="section-container">
            <img src={circlePic} className="circle-image"/>
            <div className="image-and-text-box">
                <img src={selfieImage} alt="Selfie" className="selfie"/>
                <div className="text-area">
                    <div className='title-text'>
                        <div className='name'>
                            <span className="jake-about yellow">Jake </span> 
                            <span className="lately-about turqiose">Lately</span>                              
                        </div>
                        <h1 className='about-subtitle'>Unusually Good at Stuff</h1>
                    </div>
                    <div className='info-sections'>
                        <div className='left-info'>
                            <h2>
                                Meta's Megamind
                            </h2>
                            <p>
                                After dropping out of College with a full-time job offer in hand from Facebook, <span className='yellow'>Jake </span><span className='turqiose'>Lately </span>spent 3 years on the Computational Photography team alongside his PhD peers. Amidst industry-wide layoffs, <span className='yellow'>Jake </span>was promoted to Meta's brand new Generative AI Product Group as a Senior Generative AI Research Engineer where he is leading the development of Instagram’s first GenAi features.
                            </p>
                        </div>
                        <div className='right-info'>
                            <h2>
                                More Than Code
                            </h2>
                            <p>
                            <span className='yellow'>Jake</span> can build an app, program a website, and produce videos for the music he creates. He can also use Artificial Intelligence to do all that for him. But <span className='yellow'>Jake </span><span className='turqiose'>Lately </span> doesn't restrict himself to 1's and 0's. When he's not helping NASA with images coming from the Mars Rover or helping Billionaire Heiresses with their Social Media, he's giving creative advice to those working with Kendrick Lamar, Juice WRLD, BTS and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Other sections or elements */}
        </div>
    );
}

export default GoodAtStuff;
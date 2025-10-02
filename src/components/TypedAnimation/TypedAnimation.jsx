import React from 'react'
import './TypedAnimation.css'
import { TypeAnimation } from 'react-type-animation';

export const TypedAnimation = () => {
    return (
        <div className='role'>
            <p className='typed-animation'>
                <TypeAnimation
                    sequence={[
                        'Full Stack Developer | MERN Stack',
                        1000, // Waits 1 second
                        '',
                        0,
                        'Python Developer | Django',
                        1000,
                        '',
                        0,
                        'Java Developer | JSP and Servlets',
                        1000,
                        '',
                        0,
                        


                        () => { console.log('Welcome message completed'); }, // Optional callback
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '1.8rem', fontWeight: '500', color: '#a0a0a0', marginBottom: '2.5rem' }} />
            </p>

        </div>

    )
}

export default TypedAnimation


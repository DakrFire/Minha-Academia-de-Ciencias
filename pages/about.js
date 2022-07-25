import React from "react";
import { Intro, Products , Skills, Testimonials } from '../components'

const About = () => {

    return (
        <>
        <div>
            <div>
                <Intro/>

                <div>
                    <Skills/>

                    <Testimonials/>

                    <Products/>

                </div>
            </div>

        </div>
        </>
    )
}

export default About;
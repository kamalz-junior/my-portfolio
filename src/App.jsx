import ReactLenis from "lenis/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Work from "./components/Work";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { element } from "prop-types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {

    useGSAP(() => {
        const elements = gsap.utils.toArray('.reveal-up');

        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            })
        })
    })

    return (
        <ReactLenis root>
            <Header/>
                <main>
                    <Hero/>
                    <About/>
                    <Skill/>
                    <Work/>
                    <Contact/>
                    <Footer/>
                </main>   
        </ReactLenis>
             
    )
}

export default App;
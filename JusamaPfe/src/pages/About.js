import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'


import './AbouStyle.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Navbar/>
        <Menu/>
        


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        WHO?
                    </h1>
                <p>

                SportDrip is a Swedish company, part of the Global Council of Sports Sciences. It was founded in February, 2019 by Dr Ali Faleh Salman who holds an impressive resume in sport medicine as well as playing handball internationally and coaching high level teams. With all his sport knowledge, he decided to launch a new sportswear. Initially, destined to supply mainly handball and football teams, however thanks to the success and the positive feedback, SportDrip will be distributed commercially starting early 2020.

We primarily specialize in uniforms for professional and amateur level sports teams; we also have a huge selection of products for everyday use. Including warm-ups, tracksuits, T-shirts, leggings…

We provide excellent customer service, quick turnarounds, and top-quality art. Our experienced, friendly reps are eager to help.

Our productsinclude: fitness, track and field, yoga, basketball, football.
</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535720d39923630d5487d7_peep-47.svg' alt="Segun Adebayo"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535d4c5197057a87a74020_peep-100.svg' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        Our Vision?
                    </h1>
                <p>The  Global Council of Sport Science in Sweden (GCSS) supports all unions and continues contacts between bodies wishing to cooperate with each other  to create a network of experiences with companies, unions and organizations with scientific expertise in the field of sports, physical and health to implement the projects of knowledge expansion through the holding of training courses and seminars for the purpose of achieving responsibility development Sustainable sports in the community through the construction of specialized cadres and rich in modern sports science.
The  Global Council of Sport Science (GCSS) is linked to strong relations with various international and European federations, some Olympic committees and various sports councils. On the other hand, there is a clear roundabout in the research side. The members of the  Global Council of Sport Science (GCSS) are academic specialists and researchers in scientific research centers of the best universities and have many internationally published research and academic resonance. They have the most important fingerprints in laying mathematical concepts on everyone without distinction or distinction. From this perspective, we strive to disseminate all the knowledge, administrative and organizational capabilities we have to our members and bodies interested in scientific, professional and technical advancement.</p>
                </div>
            </div>
            <Footer/>
        </>
    
    )
}

export default About
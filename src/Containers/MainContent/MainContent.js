import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Houses from '../../components/Houses/Houses'
import InstructorInfo from '../../components/InstructorInfo/InstructorInfo'
import Maklers from '../../components/Maklers/Maklers'
import MobileUI from '../../components/MobileUI/MobileUI'
import Partners from '../../components/Partners/Partners'
import Question from '../../components/Question/Question'
import WhyWe from '../../components/WhyWe/WhyWe'

const MainContent = () => {
    return (
        <div>
            <AboutUs />
            <InstructorInfo />
            <Houses />
            <MobileUI />
            <Maklers />
            <WhyWe />
            <Partners />
            <Question />
        </div>
    )
}

export default MainContent

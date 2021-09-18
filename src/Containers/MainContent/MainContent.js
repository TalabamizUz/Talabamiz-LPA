import React from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Houses from '../../components/Houses/Houses'
import InstructorInfo from '../../components/InstructorInfo/InstructorInfo'
import MobileUI from '../../components/MobileUI/MobileUI'

const MainContent = () => {
    return (
        <div>
            <AboutUs />
            <InstructorInfo />
            <Houses />
            <MobileUI />
        </div>
    )
}

export default MainContent

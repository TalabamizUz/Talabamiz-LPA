import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <React.Fragment>
            <div className="question">
                <div className="container">
                    <div className="question__box">
                        <div className="question__texts">
                            <h1 className="question__title">Sizda qandaydir savollar bormi?</h1>
                            <p className="question__subtitle">Bizning Telegram botimizga murojaat yo’llang!!!</p>
                        </div>
                        <div className="question__button">
                            <button className="question__btn">Savol yo'llash</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Question

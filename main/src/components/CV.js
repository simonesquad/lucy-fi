import React from 'react'
import Nav from './Nav';

import '../styles/CV.css';

function CV() {
    
    return (
        <div className="cv-container">
            <Nav 
                firstTxt='Home'
                firstLink='/'
                twoTxt='About'
                twoLink='/about'
                threeTxt='Contact'
                threeLink='/contact'
            />
            <div className="goals">
                    <h2>Professional Goals</h2>
                    <h3>Dynamic Neuropsychology graduate, with excellent cultural sensitivity and communication skills. Confidently seeking further skill development in User Experience Research. Adept at working both as a cross-functional team member and individual contributor.</h3>
                </div>
            <div className="all-text">
            <div className="all-text-left">
                <div className="projects">
                    <h2>Research Projects</h2>
                    <h3>User experience review and analysis: Microsoft Teams</h3>
                    <h4>"Perceived usability evaluation of an online learning platform"</h4>
                    <p>
                    - singlehandedly designed and carried out a study evaluating the use of MS Teams as (a learning platform) an online education delivery platform in primary education school<br></br>
                    - carried out surveys, user interviews, concept testing and UX evaluations to discover current state experiences with the software<br></br>
                    - presented the findings to leadership and proposed solutions for reframing platform consumption resulting in implementation of a new collaboration system among school employees</p>
                    <h4>Emotion Communication in Electronic Music</h4>
                    <p>
                    - managed a project, constructed multidimensional questionnaire, carried out data collection, data analysis, and presented the results producing a scientific article<br></br>
                    - demonstrated excellent research skills and creative thinking by finding solutions to complex data analysis requirements
                    </p>
                </div>
                <div className="work-experience">
                    <h2>Work Experience</h2>
                    <h3>Consultancy work: primary and high school education</h3>
                    <h4>Psychology | Workshops | Research</h4>
                    <h4>2019 - 2021</h4>
                    <p>
                    - structuring e-learning lectures in school education during COVID -19 pandemic, educating stakeholders about research principles, design thinking, and innovation<br></br>
                    - offering psychological help for students
                    </p>
                    <h3>Voyage Select</h3>
                    <h4>Booking assistant | Client Manager</h4>
                    <h4>2019</h4>
                    <p>
                    - managing booking flow - processing booking requests, liaising with clients (promoters/managers/artists), contracting, invoicing<br></br>
                    - managing advancing requirements
                    </p>
                    <h3>Netherlands Institute for Neuroscience</h3>
                    <h4>Research</h4>
                    <h4>2018</h4>
                    <p>
                    - generated and worked on various research projects developed using refined research methodologies and advanced statistics (eye tracking studies, contextual inquiry, heuristic evaluation etc.)
                    </p>
                </div>
                </div>

                <div className="all-text-right">
                    <div className="education">
                        <h2>Education</h2>
                        <h3>VU University Amsterdam</h3>
                        <h4>MSc. Cognitive Neuropsychology</h4>
                        <h4>2019 - 2021</h4>
                    </div>
                    <div className="specializations">
                        <h2>Specializations</h2>
                        <p>
                        - User psychology<br></br>
                        - Research design<br></br>
                        - Interviewing/prototype testing<br></br>
                        - Stakeholder analysis<br></br>
                        - Client-facing research presentations/workshops<br></br>
                        - Data collection and analysis (ethnographic, interviews, surveys, statistics, or analytics)<br></br>
                        - Data visualization<br></br>
                        - SPSS<br></br>
                        - Python<br></br>
                        - Google Analytics<br></br> 
                        </p>
                    </div>
                    <div className="languages">
                        <h2>Languages</h2>
                        <p>
                           English | Spanish | Slovenian | Dutch | Croatian 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV

import React from 'react'
import './LandingPage.css'


const LandingPage = () => {
    return (
        <div className='container'>
            <div className='fsimg'>
                <img className='ffimg' src='https://www.shapelink.com/images/startpage.jpg' />
            </div>
            <div className='txt'>
                <h1 className='startheading'>The personal coach in your pocket.
                    When, where and how you want.</h1>
                <p>As a member you can log your workouts in your workout log directly in the app. Follow your results, get individual results, personal coaching and statistics.</p>
            </div>
            <div className='button'>
               <a href='./Signup'> <button>Create account</button> </a>
            </div>
            <div className='secondimg'>
                <div className='fimg'>
                    <h1 className='Heading'>WHAT IS TWIIK?</h1>

                    <p>Twiik App is a digital fitness log and coach that's always with you. As a member you can log your workouts, track results, follow programs, boost and challenge friends and join social groups for motivation.</p>
                    <div className='mobileImg'>
                        <img src='https://kcdn.twiikapp.com/images/startpage_twiik_app.png' />
                    </div>

                </div>
            </div>
            <div className='simg'>
                <img src='https://kcdn.twiikapp.com/images/startpage_stats.png' />
                <div className='chart'>

                    <h2 className='Heading'>KEEP TRACK OF YOUR HABITS WITH OUR WORKOUT LOG</h2>
                    <ul>
                        <ol>Your own digital fitness log</ol>
                        <ol>Log all types of activities</ol>
                        <ol>Follow your results and keep track of your progress and habits</ol>
                    </ul>
                </div>
            </div>
            <div className='WorkoutProgramCoaching'>
                <div className='wtext'>

                    <h2 className='Heading'>WORKOUTS PROGRAMS & COACHING</h2>
                    <p>With The Twiik app you can easily find lots of workout programs to follow. Find the program that suits your needs.</p>
                </div>
                <div className='wimg'>
                    <img src='https://kcdn.twiikapp.com/images/startpage_coach.png' />
                </div>
            </div>
            <div className='challengeBoost'>
                <div className='cimg'>
                    <img src='https://kcdn.twiikapp.com/images/startpage_stream.jpg' />
                </div>
                <div className='ctxt'>
                    <h2 className='Heading'>CHALLENGE & BOOST</h2>
                    <p>
                        Add and follow your friends. Boost and write comments on each others workouts.
                        Why not create a challenge to create that extra bit of motivation.
                        Create social groups where you can chat and share info.
                    </p>

                </div>

            </div>
            <div className='twiiiiik'>
                <h1 className='Heading'>THIS IS INCLUDED IN TWIIK</h1>
            </div>
            <div className='fchart'>

                <div className='fst'>
                    <div className='img'>
                        <img src='https://kcdn.twiikapp.com/images/pt/icons/dumbell.png' alt='camps' style={{width:"50px" ,backgroundColor:"rgb(101, 101, 240)",borderRadius:"50%"}} />
                    </div>
                    <div className='ftxt'>
                        <h2 className='Heading'>PROGRAM, BOOT CAMPS AND WORKOUTS</h2>
                        <p>By single workouts, programs and plans or Boot Camps together with other people. Individual setups or shared plans for groups.</p>

                    </div>

                </div>
                <div className='fst'>
                    <div className='img'>
                        <img src='https://kcdn.twiikapp.com/images/pt/icons/youtube.png' alt='video' style={{width:"50px" ,backgroundColor:"rgb(101, 101, 240)",borderRadius:"50%"}} />
                    </div>
                    <div className='ftxt'>
                        <h2 className='Heading'>EXERCISES & DETAILED WORKOUTS</h2>
                        <p>Workouts with exercises with videos, set, time and reps. Log and follow in detail</p>

                    </div>

                </div>
                <div className='fst'>
                    <div className='img'>
                        <img src='https://kcdn.twiikapp.com/images/pt/icons/growth.png' alt='workoutlog' style={{width:"50px" ,backgroundColor:"rgb(101, 101, 240)",borderRadius:"50%"}} />
                    </div>
                    <div className='ftxt'>
                        <h2 className='Heading'>Growth
                            WORKOUT LOG & STATISTICS</h2>
                        <p>Get insights of your workout habits and progress with our detailed workout log and statistics.</p>

                    </div>

                </div>
                <div className='fst'>
                    <div className='img'>
                        <img src='https://kcdn.twiikapp.com/images/pt/icons/import.png' alt='import' style={{width:"50px" ,backgroundColor:"rgb(101, 101, 240)",borderRadius:"50%"}} />
                    </div>
                    <div className='ftxt'>
                        <h2 className='Heading'>IMPORT WORKOUTS</h2>
                        <p>You can log all your workouts and import data from services like FitBit, Garmin, Polar, Apple Health, Google Fit, Suunto and more.</p>

                    </div>

                </div>
                <div className='fst'>
                    <div className='img'>
                        <img src='https://kcdn.twiikapp.com/images/pt/icons/whatsapp.png' alt='whatsapp' style={{width:"50px" ,backgroundColor:"rgb(101, 101, 240)",borderRadius:"70%"}}/>
                    </div>
                    <div className='ftxt'>
                        <h2 className='Heading'>Whatsapp
                            CHAT & HANG OUT</h2>
                        <p>Chat with your coach directly in the app. Join social groups where you can find other members with the same interests.</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default LandingPage;
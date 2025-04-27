//pages/Routine/Routines.jsx

import React, { useContext } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer";
import useFetch from '../../useFetch';
import { AuthContext } from '../../authContext'
import './routine.css'
import { Link } from 'react-router-dom';
import { Url } from '../../assets/data';
const Routines = () => {
    const { user } = useContext(AuthContext)
    const { data } = useFetch(`${Url}/routines/${user._id}`)

    return (
        <div className='routinesView'>
            <Navbar />
            <div className="routinesViewContainer">
                {
                    data?.map((r, index) => (
                        <div className="routineViewItem" key={index}>

                            <div className="routineDetails">
                                <div className="routineName">{r.name}</div>
                                <div className="routineType">{r.workout_type}</div>
                                <div className="routinePart">{r.body_part}</div>
                            </div>
                            {r.link && <Link to={r.link} style={{ textDecoration: "none", color: "black" }}>
                                <div className="routineLink">Watch Workout Video</div>
                            </Link>}
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Routines

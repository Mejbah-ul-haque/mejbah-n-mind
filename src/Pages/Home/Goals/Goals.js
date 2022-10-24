import React, { useEffect, useState } from 'react';
import Goal from '../Goal/Goal';


const Goals = () => {

    const [goals, setGoals] = useState([]);

    useEffect(() => {
        fetch('goals.json')
            .then(res => res.json())
            .then(data => setGoals(data));
    }, [])

    return (
        <div className='container' style={{marginTop: "200px"}}>
            <div className='row ' style={{borderBottom:'2px solid black', marginBottom:'200px'}}>
                
            <h6 className='text-primary text-center text-uppercase'>What is MY GOAL</h6>
            <h2 className='text-light lead-heading text-center mb-5'>My Future Plan</h2>
                {
                    goals.map(goal => <Goal
                        key={goal.id}
                        goal={goal}
                    ></Goal>)
                }
            </div>
        </div>
    );
};

export default Goals;
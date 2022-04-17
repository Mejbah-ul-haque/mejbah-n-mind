import React, { useEffect, useState } from 'react';
import Goal from '../Goal/Goal';


const Goals = () => {

    const [goals, setGoals] = useState([]);
    console.log(goals);

    useEffect(() => {
        fetch('goals.json')
            .then(res => res.json())
            .then(data => setGoals(data));
    }, [])

    return (
        <div className='container'>
            <h4 className='text-center mt-5'>GOALS <span className='text-success fw-bold'>2022</span></h4>
            <div className='row'>
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
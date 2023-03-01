import { computeHeadingLevel } from '@testing-library/react';
import { useEffect, useRef, useState, useMemo, useCallback, useReducer } from 'react';
// import { SET_JOB, ADD_JOB, DELETE_JOB } from './constant'
// import {setJob, addJob, deleteJob} from './action'
import {SET_JOB, ADD_JOB, DELETE_JOB} from './constant';
import {setJob, addJob, deleteJob} from './action';
import reducer, {initial} from './reducer'
import blog from './bloger'

function Todolist() {
    const [todolists, dispatch] = useReducer(blog(reducer), initial);
    const { job, jobs } = todolists;

    const refElement = useRef();

    const handleChange = (e) => {
        dispatch(setJob(e.target.value))
    }

    const handleClick = (e) => {
        dispatch(addJob(job));
        dispatch(setJob(''))
        refElement.current.focus();
    }

    const handleDelete = (e, index) => {
        dispatch(deleteJob(index))
    }

    return (
        <div>
            <input
                ref={refElement}
                value={job}
                placeholder='Add input'
                onChange={(e) => handleChange(e)}
            />
            <button onClick={handleClick}>ADD</button>

            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>{job} <button onClick={(e) => handleDelete(e, index)}>X</button></li>
                    )
                })}
            </ul>

        </div>
    )
}

function App() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <div key={'abc'} style={{ padding: 32 }}>
            <button onClick={handleClick}>Toggle</button>
            {/* {click && <Counter/>} */}
            {click && <Todolist />}
        </div>
    )
}

export default App;

import React, {useState} from 'react'
import { Route, Link, Routes, useMatch} from 'react-router-dom'
import Assign2 from './Assign2';
import { Outlet } from 'react-router-dom';


export default function Assign1(props) {
    
  const [sem, setsem] = useState("choosesem");
  const semester = (event) => {
      setsem(event.target.value);
  }
  console.log(sem);

    return (
        <>
            <div style={props.Style} className="assign">
                <div className="container">
                    <h1 className="container my-3">Assignment Upload</h1>
                    <hr />
                    <div className="container mx-3">
                        <h5>Select Semester</h5>
                        <select id= "semester" onChange={semester} className="form-select" aria-label="Default select example">
                            <option value="choosesem" selected>-- Choose Semester --</option>
                            <option value="fallsem21">Fall Semester 2021-22</option>
                            <option value="wintersem20">Winter Semester 2020-21</option>
                            <option value="fallsem20">Fall Semester 2020-21</option>
                        </select>
                    </div>
                </div>
            </div>
            <Link to="sem"></Link>
            <Routes>
            <Route path="sem" element={<Assign2 sem={sem} Style={props.Style}/>}></Route>
            {console.log(`/assignment/${sem}`)}
            </Routes>
        </>
    )
}

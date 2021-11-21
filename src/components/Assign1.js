import React, { useState } from 'react'
import { Link, Routes} from 'react-router-dom'



export default function Assign1(props) {
    
    const [sem, setsem] = useState("");
    const semester = (event) => {
        setsem(event.target.value)
        // console.log(event.target.options.selected.text)
    };
    props.message(sem);
  
    return (
        <>
            <div style={props.Style} className="assign">
                <div className="container">
                    <h1 className="container my-3">Assignment Upload</h1>
                    <hr />
                    <div className="container mx-3">
                        <h5>Select Semester</h5>
                        <select id="semester" onChange={semester} className="form-select" aria-label="Default select example">
                            <option value="choosesem" selected>-- Choose Semester --</option>
                            <option value="Fall Semester 2021-22">Fall Semester 2021-22</option>
                            <option value="Winter Semester 2020-21">Winter Semester 2020-21</option>
                            <option value="Fall Semester 2020-21">Fall Semester 2020-21</option>
                        </select>
                    </div>
                </div>
                <div className="container my-5 tablecenter">
                    <h3 className={sem==="choosesem"?"display":"none"}>No Data Found</h3>
                    <table className={`table ${(sem!=="choosesem"&&sem!=="")?"display":"none"}`}>
                        <thead>
                            <tr>
                                <th>Sl. No</th>
                                <th>Class Nbr</th>
                                <th>Course Code</th>
                                <th>Course Title</th>
                                <th>Course Type</th>
                                <th>Faculty Name</th>
                                <th>Dashboard</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>VL2021220100575</td>
                                <td>ITE1002</td>
                                <td>Web Technologies</td>
                                <td>ETH</td>
                                <td>VIJAYAN R - SITE</td>
                                <td><Link to="Assign2"><i class="fas fa-folder-open folder"></i></Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>VL2021220100577</td>
                                <td>ITE1002</td>
                                <td>Web Technologies</td>
                                <td>ELA</td>
                                <td>VIJAYAN R - SITE</td>
                                <td><Link to="Assign2"><i class="fas fa-folder-open folder"></i></Link></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>VL2021220100575</td>
                                <td>ITE1002</td>
                                <td>Web Technologies</td>
                                <td>ETH</td>
                                <td>VIJAYAN R - SITE</td>
                                <td><Link to="Assign2"><i class="fas fa-folder-open folder"></i></Link></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>VL2021220100575</td>
                                <td>ITE1002</td>
                                <td>Web Technologies</td>
                                <td>ETH</td>
                                <td>VIJAYAN R - SITE</td>
                                <td><Link to="Assign2"><i class="fas fa-folder-open folder"></i></Link></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>VL2021220100575</td>
                                <td>ITE1002</td>
                                <td>Web Technologies</td>
                                <td>ETH</td>
                                <td>VIJAYAN R - SITE</td>
                                <td><Link to="Assign2"><i class="fas fa-folder-open folder"></i></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Routes>
                    
                </Routes>
            </div>
        </>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function Assign2(props) {
    return (
        <>
            <div style={props.Style} className="assign">
                <div className="container">
                <h3 className="container my-3">Assignment Upload</h3>
                <hr />
                <table class="table">
                    <thead>
                        <tr>
                            <th>Semester</th>
                            <th>Course Code</th>
                            <th>Course Title</th>
                            <th>Course Type</th>
                            <th>Class Number</th>
                        </tr>
                        <tr>
                            <td>{props.Msg}</td>
                            <td>ITE1002</td>
                            <td>Web Technologies</td>
                            <td>ETH</td>
                            <td>VL2021220100575</td>
                        </tr>
                    </thead>
                </table>
                <br />
                <br />
                <br />
                <table class="table">
                    <tr>
                        <th rowSpan="2">Sl. No</th>
                        <th rowSpan="2">Title</th>
                        <th rowSpan="2">Max. Mark</th>
                        <th rowSpan="2">Weightage %</th>
                        <th rowSpan="2">Due Date</th>
                        <th rowSpan="2">QP</th>
                        <th colSpan="2">Document Details</th>
                    </tr>
                    <tr>
                        <th>Last Updated</th>
                        <th>Upload/Edit/Download</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Digital Assigment 1</td>
                        <td>10</td>
                        <td>10</td>
                        <td>03-Nov-2021</td>
                        <td><i class="fas fa-download"></i></td>
                        <td>03 Nov 2021 05:52 PM</td>
                        <td><i class="fas fa-pen"></i></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Digital Assigment 2</td>
                        <td>10</td>
                        <td>10</td>
                        <td>03-Nov-2021</td>
                        <td><i className="fas fa-download"></i></td>
                        <td>03 Nov 2021 05:52 PM</td>
                        <td><i className="fas fa-pen"></i></td>
                    </tr>
                </table>
                <br /><br />
                <button type="button" class="btn btn-dark"><Link to="/assignment" id="goback">Go Back</Link></button>
                </div>
            </div>
        </>
    )
}

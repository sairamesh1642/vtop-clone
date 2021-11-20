import React from 'react'

export default function Spotlight(props) {
    return (
        <>
            <div style={props.Style} className="assign">
                <div className="container">
                    <h2 className="container my-3 spotlight">Spotlight</h2>
                    <hr />
                    <div className="container">
                        <ul>
                            <h4>Academics</h4>
                            <li className="spotlight-li">
                                Regular arrear and Re-FAT on 20th Nov and 22nd Nov 2021
                            </li>
                        </ul>
                        <ul>
                            <h4>Academic Research</h4>
                            <li className="spotlight-li">
                                FAT Registration for Coursework Exam (FALL 2021-22) has been extended till 14.11.2021
                            </li>
                            <li className="spotlight-li">
                                Coursework Syllabus
                            </li>
                            <li className="spotlight-li">
                                Standard Operating Procedure
                            </li>
                            <li className="spotlight-li">
                                Downloadable Formats for Students
                            </li>
                        </ul>
                        <ul>
                            <h4>Others</h4>
                            <li className="spotlight-li">
                                Useful Email Contacts
                            </li>
                            <li className="spotlight-li">
                                Link for National Scholarship Portal
                            </li>
                            <li className="spotlight-li">
                                B.Tech-Freshers_CompleteInfo
                            </li>
                            <li className="spotlight-li">
                                Central Library - Resource Guidelines
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

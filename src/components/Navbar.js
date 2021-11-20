import React from 'react'

import {Link} from 'react-router-dom'

export default function Navbar(props) {
    const toggleMenu = (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    }

    document.getElementsByClassName("fa-graduation-cap").onmouseover = function(){
        document.getElementsByTagName("html")[0].style.overflowY="scroll";
    }

    return (
        <>
            <div className={`sidebar ${props.mode === "close" ? "close" : ""}`}>
                <div className="logo-details">
                <i className="fas fa-school"></i>
                    <span className="logo_name">VTOP</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                            <i className="fas fa-phone-square-alt"></i>
                                <span className="link_name">Contact Us</span>
                            </Link>
                            {/* <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i> */}
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Contact Us</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                            <i className="fas fa-briefcase"></i>
                                <span className="link_name">My Info</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">My Info</Link></li>
                            <li><Link to="/">Profile</Link></li>
                            <li><Link to="/">Your Credentials</Link></li>
                            <li><Link to="/">Dayboarder Info</Link></li>
                            <li><Link to="/">Acknowledgement View</Link></li>
                            <li><Link to="/">Student Bank Info</Link></li>
                            <li><Link to="/">DigitalPad Device Credentials</Link></li>
                            <li><Link to="/">My Digital ID Card</Link></li>
                            <li><Link to="/">Vaccinated Details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                            <i className="fas fa-info-circle"></i>
                                <span className="link_name">Info Corner</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Info Corner</Link></li>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/">Spotlight</Link></li>
                            <li><Link to="/">View Circular(s)</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                            <i className="fas fa-paw"></i>
                                <span className="link_name">Proctor</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Proctor</Link></li>
                            <li><Link to="/">View Proctor Details</Link></li>
                            <li><Link to="/">View VTOP Message from Proctor</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-graduation-cap' ></i>
                                <span className="link_name">Academics</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Academics</Link></li>
                            <li><Link to="/">HOD and Dean Info</Link></li>
                            <li><Link to="/">Faculty Info</Link></li>
                            <li><Link to="/">Course Feedback 24x7</Link></li>
                            <li><Link to="/">Biometric Info</Link></li>
                            <li><Link to="/">Class Messages</Link></li>
                            <li><Link to="/">Regulation</Link></li>
                            <li><Link to="/">My Curriculum</Link></li>
                            <li><Link to="/">Minor/Honour</Link></li>
                            <li><Link to="/">Time Table</Link></li>
                            <li><Link to="/">Course Option Change</Link></li>
                            <li><Link to="/">Course Withdraw</Link></li>
                            <li><Link to="/">Class Attendance</Link></li>
                            <li><Link to="/">Course Page</Link></li>
                            <li><Link to="/">Industrial Internship</Link></li>
                            <li><Link to="/">Project</Link></li>
                            <li><Link to="/assignment">Digital Assignment Upload</Link></li>
                            <li><Link to="/">QCM View</Link></li>
                            <li><Link to="/">SET Conference Registration</Link></li>
                            <li><Link to="/">Co-Extra Curricular</Link></li>
                            <li><Link to="/">WishList Registration</Link></li>
                            <li><Link to="/">Academic Calendar</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-university' ></i>
                                <span className="link_name">Research</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Research</Link></li>
                            <li><Link to="/">My Research Profile</Link></li>
                            <li><Link to="/">SEM Request</Link></li>
                            <li><Link to="/">Course Work Registration</Link></li>
                            <li><Link to="/">Registration Status</Link></li>
                            <li><Link to="/">Meeting Info</Link></li>
                            <li><Link to="/">Attendance View</Link></li>
                            <li><Link to="/">ScholarLeave Request</Link></li>
                            <li><Link to="/">Research Letters</Link></li>
                            <li><Link to="/">Electronic Thesis Submission</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-book' ></i>
                                <span className="link_name">Examination</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Examination</Link></li>
                            <li><Link to="/">Exam Schedule</Link></li>
                            <li><Link to="/">Marks</Link></li>
                            <li><Link to="/">Grades</Link></li>
                            <li><Link to="/">Paper See/Rev</Link></li>
                            <li><Link to="/">Grade History</Link></li>
                            <li><Link to="/">Project File Upload</Link></li>
                            <li><Link to="/">MOOC File Upload</Link></li>
                            <li><Link to="/">ECA File Upload</Link></li>
                            <li><Link to="/">EPT Schedule</Link></li>
                            <li><Link to="/">Comprehensive</Link></li>
                            <li><Link to="/">Arrear Details</Link></li>
                            <li><Link to="/">Re-exam Application</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-space-shuttle' ></i>
                                <span className="link_name">Services</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Services</Link></li>
                            <li><Link to="/">Pat Registration</Link></li>
                            <li><Link to="/">Online Book Recommendation</Link></li>
                            <li><Link to="/">Transcript Request</Link></li>
                            <li><Link to="/">Achievements</Link></li>
                            <li><Link to="/">Programme Migration</Link></li>
                            <li><Link to="/">Late Hour Request</Link></li>
                            <li><Link to="/">Final Year Registration</Link></li>
                            <li><Link to="/">Certificate Upload</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-university' ></i>
                                <span className="link_name">Library</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Library</Link></li>
                            <li><Link to="/">Scanning Requests</Link></li>
                            <li><Link to="/">My Keys</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-certificate' ></i>
                                <span className="link_name">Bonafide</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Bonafide</Link></li>
                            <li><Link to="/">Apply Bonafide</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fab fa-cc-visa' ></i>
                                <span className="link_name">Online Payments</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Online Payments</Link></li>
                            <li><Link to="/">Payments</Link></li>
                            <li><Link to="/">Wallet Amount Add</Link></li>
                            <li><Link to="/">Payment Receipts</Link></li>
                            <li><Link to="/">Fees Intimation</Link></li>
                            <li><Link to="/">Online Transfer</Link></li>
                            <li><Link to="/">Library</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-home' ></i>
                                <span className="link_name">Hostels</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Hostels</Link></li>
                            <li><Link to="/">My Room Information</Link></li>
                            <li><Link to="/">Leave Request</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-rupee-sign' ></i>
                                <span className="link_name">Receipt Book</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Receipt Book</Link></li>
                            <li><Link to="/">External Billing</Link></li>
                            <li><Link to="/">My Collection Report</Link></li>
                            <li><Link to="/">Internal Billing</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-book' ></i>
                                <span className="link_name">ASC FDP</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">ASC FDP</Link></li>
                            <li><Link to="/">FDP Registration</Link></li>
                            <li><Link to="/">Participant Certificate</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-shield-alt' ></i>
                                <span className="link_name">Events</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">Events</Link></li>
                            <li><Link to="/">University Day</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-trophy' ></i>
                                <span className="link_name">SW Events</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">SW Events</Link></li>
                            <li><Link to="/">Event Requisition</Link></li>
                            <li><Link to="/">Event Attendance</Link></li>
                            <li><Link to="/">Event Registration</Link></li>
                        </ul>
                    </li>
                    <li>
                        <div className="iocn-link">
                            <Link to="/">
                                <i className='fas fa-lock' ></i>
                                <span className="link_name">My Account</span>
                            </Link>
                            <i className='bx bxs-chevron-down arrow' onClick={toggleMenu} ></i>
                        </div>
                        <ul className="sub-menu">
                            <li><Link className="link_name" to="/">My Account</Link></li>
                            <li><Link to="/">Change Password</Link></li>
                            <li><Link to="/">Update LoginID</Link></li>
                        </ul>
                    </li>

                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                            <i className='fas fa-user' ></i>
                            </div>
                            <div className="name-job">
                                <div className="profile_name">20BIT0022</div>
                                <div className="job">Student</div>
                            </div>
                            <i className='bx bx-log-out' ></i>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

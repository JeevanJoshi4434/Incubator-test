import React from 'react'
import { Link } from 'react-router-dom'
import "./Css/Admin.css"

const AdminCell = () => {
    return (
        <div>
            <input type="checkbox" id="nav-toggle" />
            <div class="sidebar">
                <div class="sidebar-brand">
                    <h2><span class="lab la-accusoft"></span> <span>Incubator</span></h2>
                </div>

                <div class="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="" class="active"><span class="las la-igloo"></span><span>Dashboard</span></Link>
                        </li>
                        <li>
                            <Link to="#"><span class="las la-users" id="customersButton"></span><span>Recruiters</span></Link>
                        </li>
                        <li>
                            <Link to=""><span class="las la-clipboard-list"></span><span>Events</span></Link>
                        </li>
                        <li>
                            <Link to=""><span class="las la-shopping-bag"></span><span>Course</span></Link>
                        </li>
                        <li>
                            <Link to=""><span class="las la-receipt"></span><span>Registrations</span></Link>
                        </li>
                        <li>
                            <Link to="Accounts/Account.html"><span class="las la-user-circle"></span><span>Users</span></Link>
                        </li>
                        <li>
                            <Link to=""><span class="las la-clipboard-list"></span><span>Colleges</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="main-content">
                <header>
                    <h2>
                        <label for="nav-toggle">
                            <span class="las la-bars"></span>
                        </label>

                        <span id="dashboardName"><span>Dashboard</span></span>
                    </h2>

                    {/* <div class="search-wrapper">
                        <span class="las la-search"></span>
                        <input type="search" placeholder="Search here" />
                    </div> */}

                    <div class="user-wrapper">
                        <img src="Images/user's/user.jpg" width="60px" height="60px" alt="" />
                        <div>
                            <h4>Admin Data</h4>
                            <small>Admin Cell</small>
                        </div>
                    </div>
                </header>

                <main id="mainPage">

                    <div class="dashboard-cards">
                        <div class="card-single">
                            <div>
                                <h1>54</h1>
                                <span>Customers</span>
                            </div>
                            <div>
                                <span class="las la-users"></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>79</h1>
                                <span>Projects</span>
                            </div>
                            <div>
                                <span class="las la-clipboard-list"></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>124</h1>
                                <span>Orders</span>
                            </div>
                            <div>
                                <span class="las la-shopping-bag"></span>
                            </div>
                        </div>
                        <div class="card-single">
                            <div>
                                <h1>$0</h1>
                                <span>Income</span>
                            </div>
                            <div>
                                <span class="lab la-google-wallet"></span>
                            </div>
                        </div>
                    </div>

                    <div class="recent-grid">
                        <div class="projects">
                            <div class="card">
                                <div class="card-header">
                                    <h3>Recent Projects</h3>

                                    <button>See all <span class="las la-arrow-right"></span></button>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table width="100%">
                                            <thead>
                                                <tr>
                                                    <td>Project Title</td>
                                                    <td>Department</td>
                                                    <td>Status</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>UI/UX Design</td>
                                                    <td>UI Team</td>
                                                    <td>
                                                        <span class="status purple"></span>
                                                        review
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Web Development</td>
                                                    <td>Frontend</td>
                                                    <td>
                                                        <span class="status pink"></span>
                                                        in progress
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ushop app</td>
                                                    <td>Mobile Team</td>
                                                    <td>
                                                        <span class="status orange"></span>
                                                        Pending
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="customers">
                            <div class="card">
                                <div class="card-header">
                                    <h3>New Customer</h3>

                                    <button>See all <span class="las la-arrow-right"></span></button>
                                </div>
                                <div class="card-body">
                                    <div class="customer">
                                        <div class="info">
                                            <img src="Images/user's/users.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>Lewis S.Cunninghem</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phone"></span>
                                        </div>
                                    </div>
                                    <div class="customer">
                                        <div class="info">
                                            <img src="Images/user's/users.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>Lewis S.Cunninghem</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phone"></span>
                                        </div>
                                    </div>
                                    <div class="customer">
                                        <div class="info">
                                            <img src="Images/user's/users.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>Lewis S.Cunninghem</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phone"></span>
                                        </div>
                                    </div>
                                    <div class="customer">
                                        <div class="info">
                                            <img src="Images/user's/users.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>Lewis S.Cunninghem</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phone"></span>
                                        </div>
                                    </div>
                                    <div class="customer">
                                        <div class="info">
                                            <img src="Images/user's/users.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>Lewis S.Cunninghem</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phone"></span>
                                        </div>
                                    </div>
                                    <div class="customer">
                                        <div class="info">
                                            <img src="Images/user's/users.png" width="40px" height="40px" alt="" />
                                            <div>
                                                <h4>Lewis S.Cunninghem</h4>
                                                <small>CEO Excerpt</small>
                                            </div>
                                        </div>
                                        <div class="contact">
                                            <span class="las la-user-circle"></span>
                                            <span class="las la-comment"></span>
                                            <span class="las la-phone"></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </div>
    )
}

export default AdminCell

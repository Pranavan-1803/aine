import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'
import Logo from '../images/Logo_task.JPG';
import PersonIcon from '@material-ui/icons/Person';
import BookIcon from '@material-ui/icons/Book';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';


function Navbar() {

    return (
        <div className='app'>
        <div className="Left">
            <div className="Logo">
                <img
                alt="Logo"
                className="header__logo"
                src={Logo}></img>
            </div>
            <div className="links">
                <div className="navContainer">
                <PersonIcon className='icon' style={{fontSize: '40px'}}/>
                <Link className='link' >Students</Link>
                </div>
                <div className="navContainer">
                <BookIcon className='icon' style={{fontSize: '40px'}}/>
                <Link className='link'>LessonPlan</Link>
                </div>
                <div className="navContainer">
                <SettingsIcon className='icon' style={{fontSize: '40px'}}/>
                <Link className='link'>Settings</Link>
                </div>
            </div>
        </div>
        <div className="Right">
            <div className='arrow'>
            <ArrowLeftIcon style={{fontSize: '25px'}}/>
            <h1>Videos</h1>
            </div>
            <div className="textInput">
            <input className="textBox" type="text" name="name" placeholder="Insert URL here" />
            <p>or</p>
            <input className="custom-file-upload" type="file"></input>
            </div>

        </div>
        </div>
    )
}

export default Navbar
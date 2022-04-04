import React from 'react'
import { Link } from 'react-router-dom'
import '../img/DMTFK1.png'
import '../img/logo_dmtfc.png'
import logo_dmtk from '../img/logo_dmtfc.png'

const NavMenu = () => {

   const modeSwitch = () => {
      const body = document.querySelector("body"),
            modeText = body.querySelector(".mode-text")
      body.classList.toggle("dark")

      if(body.classList.contains("dark")){
         modeText.innerText = "Світла тема"
      }else{
         modeText.innerText = "Темна тема"
      }
   };

   const slidebarClose = () => {
      const body = document.querySelector("body")
      const sidebar = body.querySelector(".sidebar")
      sidebar.classList.toggle("close")
   }
   



   return (
      <nav className='sidebar close'>
         <header>
            <div className="image-text">
               <span className='image'><img src={logo_dmtk} alt="logo" /></span>
               <div className="text header-text">
                  <span className="name">ДМТФК</span>
                  <span className="profession">Електронний журнал</span>
               </div>
            </div>
            <i class='bx bx-chevron-right toggle' onClick={slidebarClose}></i>
         </header>
         <div className="menu-bar">
               <div className="menu">
                  <ul className="menu-links">
                     <li className='nav-link'>
                        <Link to="/" className='a'>
                           <i class='bx bx-home icon'></i>
                           <span className='text nav-text'>Головна</span>
                        </Link>
                     </li>
                     <li className='nav-link'>
                        <Link to="/ZhurnalStudentPage" className='a'>
                           <i class='bx bx-book-content icon'></i>
                           <span className='text nav-text'>Журнал</span>
                        </Link>
                     </li>
                     <li className='nav-link'>
                        <Link to="/HometaskStudentPage" className='a'>
                           <i class='bx bx-task icon'></i>
                           <span className='text nav-text'>Домашнє</span>
                        </Link>
                     </li>
                     <li className='nav-link'>
                        <Link to="/AbsenteeismStudentPage" className='a'>
                        <i class='bx bxs-calendar-x icon'></i>
                           <span className='text nav-text'>Пропуски</span>
                        </Link>
                     </li>
                     <li className='nav-link'>
                        <Link to="/TimeTableStudentPage" className='a'>
                        <i class='bx bx-table icon'></i>
                           <span className='text nav-text'>Розклад</span>
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="bottom-content">
               <li className=''>
                  <Link to="/" className='a'>
                     <i class='bx bx-log-out icon'></i>
                     <span className='text nav-text'>Вийти</span>
                  </Link>
               </li>
               <li className='mode'>
                  <div className="moon-sun">
                     <i className='bx bx-moon icon moon'></i>
                     <i className='bx bx-sun icon sun'></i>
                  </div>
                  <span className="mode-text text">Темна тема</span>
                  <div className="toggle-switch" onClick={modeSwitch}>
                     <span className="switch"></span>
                  </div>
               </li>
               </div>
            </div>
      </nav>
   );
}

export default NavMenu;

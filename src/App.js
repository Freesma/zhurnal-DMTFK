
import { useState } from 'react';
import { Route, Routes} from 'react-router-dom'
import { HomePage, ZhurnalStudentPage, HometaskStudentPage, AbsenteeismStudentPage, TimeTableStudentPage } from './pages'
import { NavMenu } from './components'


import './styles/css/App.css'


function App() {

  const [isLoginned, setIsLoginned] = useState(true);
  const [Access, setAccess] = useState(3);

  const loginUser = () => {
    setIsLoginned(true)
  }

  return (
    <div className="App">
      <div className='nav'>
      <NavMenu />
      </div>
      <div className='content'>
      <Routes>
            <Route path='/' element={<HomePage isLoginned={isLoginned} />} />
            <Route path='/ZhurnalStudentPage' element={<ZhurnalStudentPage isLoginned={isLoginned}/>} />
            <Route path='/HometaskStudentPage' element={<HometaskStudentPage isLoginned={isLoginned} />} />
            <Route path='/AbsenteeismStudentPage' element={<AbsenteeismStudentPage isLoginned={true} />} />
            <Route path='/TimeTableStudentPage' element={<TimeTableStudentPage isLoginned={true} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

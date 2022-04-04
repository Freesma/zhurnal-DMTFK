import React, { Component } from 'react';
import { Login, StudentMarks } from '../components'

class Zhurnalstudentpage extends Component {
   render() {

      const MarksList = [
         ['ІЗВП', [4, 5, 2, 5, 3, 4, 3, 4], 3],
         ['Комп. і мікр. системи', [4, 4, 4, 4, 4], 4],
         ['Алг. осн. криптології', [3, 4, 3, 4, 4], 4],
         ['ПАІС', [5, 5, 5, 5, 5], 5],
         ['Прогр. моб. платф', [4, 3, 4, 3, 3], 3],
         ['ООП', [5, 5, 5, 5, 5, ], 5],
         ['Осн. прогрм. інж.', [5, 5, 5, 5, 5], 5],
         ['Констр. ПЗ', [5, 5, 5, 5, 5], 5],
         ['Фізвиховання', [5, 5, 5, 5, 5], 5],
         ['SEO оптиміз. проект.', [5, 5, 5, 5, 5], 5],
         ['Англ. мова', [5, 5, 5, 5, 5], 5]
      ]


      return(
         <div className='ZhurnalPage'>
            { this.props.isLoginned ?  <div> 
               <h2>Журнал</h2>
               <div className="user">
                  <p className="role">Студент</p>
                  <p className='name'>Дзюбак Роман</p>
                  <p className='group'>Група ПК-41</p>
               </div>
               <div className="marksBlock">
               {MarksList.map((marks) => <StudentMarks subject={marks[0]} Smarks={marks[1]} serMark={marks[2]} />)}
               </div>
               </div> : (<Login />)}
         </div>
      );
   }
}

export default Zhurnalstudentpage;

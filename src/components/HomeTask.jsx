import React, { Component } from 'react';

class Hometask extends Component {
   render(...props) {
      return (
         <div className='task'>
            <p className='predm'>{this.props.predm}</p>
            <p className='zav'>{this.props.zav}</p>
            <p className='date'>{this.props.date}</p>
            <p className='missed'>{this.props.missed}</p>
         </div>
      );
   }
}

export default Hometask;

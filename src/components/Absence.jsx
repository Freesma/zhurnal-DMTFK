import React, { Component } from 'react';

class Absence extends Component {
   render(...props) {
      return (
         <div className='abs'>
            <div className='predmet'>{this.props.predm}</div>
            <div className='propysks'>{this.props.abs.map((ab) => <p className='propysk'>{ab[0]}/{ab[1]}</p>)}</div>
         </div>
      );
   }
}

export default Absence;

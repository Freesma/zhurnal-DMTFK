import React, { Component } from 'react';
import { Mark } from './'

class Studentmarks extends Component {
   render(...props) {
      const marks = this.props.Smarks
      return (
         <div className='studentMark'>
            <p className="subject">{this.props.subject}</p>
            <div className="markBlock">
             {marks.map((mark) => <Mark mark={mark} />)}
            </div>
            { this.props.serMark ===2 ? <div className="serMark redMark">{this.props.serMark}</div> : 
            (this.props.serMark ===3 ? <div className="serMark orangeMark">{this.props.serMark}</div> :
            (this.props.serMark ===4 ? <div className="serMark yellowMark">{this.props.serMark}</div> :
            (this.props.serMark ===5 ? <div className="serMark greenMark">{this.props.serMark}</div> : (<div></div>)))) }
         </div>
         
      );
   }
}

export default Studentmarks;

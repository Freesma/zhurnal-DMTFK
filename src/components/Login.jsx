import React, { useState } from 'react';



var login = "Roman"
var password = "11111"


function Login(){   

   const [Error, setError] = useState("");
   const [Access, setAccess] = useState();

   function isUser(log, pass) {
      if(log === login && pass === password){
         
         setAccess(3)
         setError("")
         if(Access === 1){

         }else if(Access === 2){

         }else if(Access === 3){
            
            
         }
      }else if(log === "" || pass === ""){
         setError("Введiть логiн та пароль")
      } else { setError("Введiть правильний логiн та пароль") }
   }

   return (
      <div className='login' id='log'>
         <div className="login-block">
            <h3>Вхід</h3>
            <input className='log-pass' id='loginField' type="text" placeholder='Логін'/>
            <input className='log-pass' id='passwordField' type="password" placeholder='Пароль'/>
            <p id='error'>{Error}</p>
            <input className='btn' type="button" value="Ввiйти" onClick={(() => {
               var text = document.getElementById("loginField")
               var logi = text.value
               text = document.getElementById("passwordField")
               var pass = text.value
               isUser(logi, pass)
            })} />
         </div>
      </div>
   );

}

export default Login;

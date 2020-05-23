import React, { useState} from 'react';
import '../App.css';

import { IoMdMail } from 'react-icons/io';
import { AiOutlineGithub } from 'react-icons/ai';
const Menu = ['Home','About']

function Layout(props) {

  const [index,setIndex] = useState(0);

  const [alertState,setAlertState] = useState('none');

  const pageScroll = (event) =>{
    console.log(event.deltaY);
    if(event.deltaY < 0){
      if(index > 0){
        setIndex(index-1);
      }
    } else if (event.deltaY > 0) {
      if(index < props.children.length-1){
        setIndex(index+1);
      }
      // index +
    } else {
      // 0
    }
  }
  const pageIndex = (number) =>{
    setIndex(number);
  }

  const copy = (text) =>{
    var textarea = document.createElement('textarea');
    textarea.value = text;

    document.body.appendChild(textarea);
    textarea.select();  
    
    document.execCommand('copy');
    document.body.removeChild(textarea);
    setTimeout(()=>setAlertState('hide'),2000);
    setAlertState('popup');
  }

  return (

    <div className="App" onWheel={pageScroll}>
      <header className="App-header">
      </header>
      <main>
        <section>
            {props.children[index]}
        </section>
        <aside className="profile">
          <div className="picture" style={{width:200,height:200, borderWidth:3, borderColor:"#FFF",borderRadius:300,overflow:"hidden"}}>
            <img style={{width:200,position:"relative",top:-20}}src={require('../myface.jpg')} alt=""/>
          </div>
          <div>
          <div className="name">
            Park Sangmin
          </div>
          <div className="menu">
            {Menu.map((item, i) => { return(<div onClick={()=>pageIndex(i)} className={index === i ? "selected" : "unselected"}>{item}</div>) })}
          </div>
          <div className="contact">
            <div className="row" onClick={()=>copy('raspberry-pi@kakao.com')}>
              <IoMdMail size={25} color="#FFF"/><span className="content">raspberry-pi@kakao.com</span>
            </div>
            <div className="row" onClick={()=>{window.open('https://github.com/psm7177')}}>
              <AiOutlineGithub size={25} color="#FFF"/><span className="content">psm7177</span>
            </div>
          </div>
          </div>
        </aside>
      </main>
      <footer className="alert" >
        <div className={"content "+alertState}>copied 'raspberry-pi@kakao.com' to clipboard</div>
      </footer>
    </div>
  );
}

export default Layout;
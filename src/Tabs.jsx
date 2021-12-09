import './Tabs.css';
import {useEffect, useRef, useState} from 'react'

let tabsValue = ['Job Focus', 'Soft Skills', 'Technical Skills', 'Functional Expertise', 'Domain Expertise', 'Patent Expertice', 'Personal Expertise', 'Hard Expertise', 'Domain Expertise', 'Domain Expertise', 'Domain Expertise']



function useHorizontalScroll() {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) {
          return
        };
        if (e.deltaY <= -0) {
          el.style.boxShadow = 'inset -30px 0 0 -10px rgba(196, 196, 191, 1)';
        };
        if (e.deltaY >=  -0) {
          el.style.boxShadow = 'inset 20px 0 0 -3px rgba(196, 196, 191, 1)';
        };
        // это первый варик el.style.boxShadow = 'inset -30px 0 0 -10px rgba(196, 196, 191, 1)';
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

function Tabs() {
  const scrollRef = useHorizontalScroll();
  const  handleClick = (e) => {
      e.target.className += ' active'
  }
  return(
    <nav className='tabs' ref={scrollRef}>
  
        {tabsValue.map((el, i) => {
          return(
            <div className={`tab ${i === 1? 'disabled': ''}`} onClick={e =>handleClick(e)} key={i}>
              {el}
            </div>
          );
        })}
    </nav>
  ) 
}

export default Tabs;
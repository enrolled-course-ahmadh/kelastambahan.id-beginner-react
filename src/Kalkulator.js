import React, { useState, useEffect } from 'react';
import './Kalkulator.css';

function Kalkulator() {
  const [display, setDisplay] = useState('');
  
  useEffect(() => {
    const tombolWrapper = document.querySelector('.tombol-tombol');
    /* use event delegation instead of loop each button to add event on click */
    const handleClick = (e) => {
      let tombol = e.target;
			let nilai = tombol.innerText;
			switch (nilai) {
				case 'C':
					setDisplay('');
					break;
				case '<':
					setDisplay(display.slice(0, -1));
					break;
				case '=':
					/* javascript able to translate math in string to get result using eval() */
					// eslint-disable-next-line
					setDisplay(String(eval(display)));
					break;
				case '.':
					if (!display.includes('.')) {
						setDisplay(display + nilai);
					}
					break;
				default:
					setDisplay(display + nilai);
					break;
			}
    };
    tombolWrapper.addEventListener('click', handleClick, false);
    return () => {
			tombolWrapper.removeEventListener('click', handleClick);
		};
  }, [display]);

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <input id="display" value={display} onChange={e => setDisplay(e.target.value)} />
        <div className="tombol-tombol">
            <span className="tombol operator">C</span>
            <span className="tombol operator">&lt;</span>
            <span className="tombol operator">.</span>
            <span className="tombol operator">/</span>
            <span className="tombol">7</span>
            <span className="tombol">8</span>
            <span className="tombol">9</span>
            <span className="tombol operator">*</span>
            <span className="tombol">4</span>
            <span className="tombol">5</span>
            <span className="tombol">6</span>
            <span className="tombol operator">+</span>
            <span className="tombol">1</span>
            <span className="tombol">2</span>
            <span className="tombol">3</span>
            <span className="tombol operator">-</span>
            <span className="tombol" id="nol">0</span>
            <span className="tombol" id="hitung">=</span>
        </div>
      </div>
    </div>
  );
}

export default Kalkulator;
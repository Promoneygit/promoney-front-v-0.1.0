import Otp from './Otp';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Selectre() {
  return (
    <div className="App">
      <div className='Selectre'>
        <div>
          เลือกวิธีการสมัคร
          <button class="button-48" role="button">
            <span class="text">
              <Link to='/Otp'>สมัครบริการโดยการกรอกข้อมูล</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Selectre


import card1 from './img/card1.png';
import {Link} from 'react-router-dom';

function Selectre() {
  return (
    <div className='Background'>
       <div className='selectre'>
        <div>
          เลือกวิธีการสมัคร
          
          <ul>
          <Link to='/Otp'>
          <button class="button-48">
          <img src={card1} alt="card1" />สมัครบริการโดยการกรอกข้อมูล
          </button>
          </Link>
          </ul>
          
        </div>
      </div>
    </div>
     
  )
}

export default Selectre


import React, { Component } from "react";
import OtpInput from "react-otp-input";

export default class App extends Component {
  state = { otp: "" };

  handleChange = otp => this.setState({ otp });

  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>-</span>}
      />
    );
  }
}

// function Otp() {

//   return (

//     <div className='App'>
//       <div>
//           <div className="Selectre">
//           กรอกรหัส OTP
          
//           </div>
//           <div>
//             รหัส OTP ถูกส่งไปที่
//           </div>
//           <div>
//             เบอร์
//           </div>
//           <div>
//             Ref
//           </div>

//           <button class="button-48" role="button">
//             <span class="text">
//               {/* <Link to='/'>สมัครบริการโดยการกรอกข้อมูล</Link> */}
//             </span>
//           </button>
        
//       </div>
//     </div>
//   )
// }

// export default Otp

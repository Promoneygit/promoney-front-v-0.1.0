import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Otp() {
          const [OTP, setOTP] = useState("");
          const renderButton = (buttonProps) => {
                    return (
                              <button {...buttonProps}>
                                        {buttonProps.remainingTime !== 0 ? `ไม่ได้รับ OTP ขอรหัสใหม่ใน ${buttonProps.remainingTime} วินาที` : "ขอรหัส OTP อีกครั้ง"}
                              </button>
                    );
          };
          const renderTime = () => React.Fragment;
          return (
                    <div className="Background">
                              <div className="selectre">
                                        กรอกรหัส OTP
                                        <ul />
                                        <div>
                                                  รหัส OTP ถูกส่งไปที่
                                        </div>
                                        <div>
                                                  081-234-5678
                                        </div>
                                        <div>
                                                  Ref : (GGCL)
                                        </div>
                                        <ul />
                                        <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} />
                                        <ul />
                                        <ResendOTP renderButton={renderButton} renderTime={renderTime} />
                                        
                                        <Link to='/Registerfront'><button class="button-next" >ดำเนินการต่อ</button></Link>

                              </div>
                    </div>

          );
}

export default Otp


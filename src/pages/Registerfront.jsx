import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FiAlertCircle } from "react-icons/fi";

function Registerfront() {
          return (
                    <div className='Background'>
                              <div className="selectre">
                                        <div>
                                                  <h3>ข้อมูลบัตรประชาชน</h3>
                                        </div>
                                        <div class='input-fields '>
                                                  <input type='text' placeholder='ชื่อ(ภาษาไทย)' class='input-line full-width '></input>
                                                  
                                                  <input type='text' placeholder='นามสกุล(ภาษาไทย)' class='input-line full-width'></input>

                                                  <input type='text' placeholder='วัน/เดือน/ปีเกิด(พ.ศ.)' class='input-line full-width'></input>

                                                  <input type='text' placeholder='เลขที่บัตรประชาชน' class='input-line full-width'></input>
                                                  <input type='text' placeholder='เลข Laser หลังประชาชน ' class='input-line full-width' ></input>
                                                  <FiAlertCircle style={{color: 'white', fontSize: '21px'}}/>

                                                  {/* <input type='email' placeholder='Email' class='input-line full-width'></input>
                                                  <input type='password' placeholder='Password' class='input-line full-width'></input> */}

                                        </div>

                                        <Link to='/otp'><button class="button-next" >ดำเนินการต่อ</button></Link>

                              </div>
                    </div>

          )
}

export default Registerfront

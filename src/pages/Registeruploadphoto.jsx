import React from "react";
import ReactDOM from "react-dom";
import UploadComponent from "./UploadComponent";
import frontcard from './img/front-card.jpg';
import backcard from './img/back-card.jpg';



class Registeruploadphoto extends React.Component {
  state = {
    upload: {
      pictures: [],
      maxFileSize: 5242880,
      imgExtension: [".jpg", ".png"],
      defaultImages: [
      ]
    }
  };

  handleChange = (files) => {
    const { pictures } = this.state.upload;
    console.warn({ pictures, files });

    this.setState(
      {
        ...this.state,
        upload: {
          ...this.state.upload,
          pictures: [...pictures, ...files]
        }
      },
      () => {
        console.warn("It was added!");
      }
    );
  };

  confirmUpload = () => {
    const { pictures, defaultImages } = this.state.upload;
    console.warn("Confirm Upload =>", [...pictures]);
  };

  render() {
    return (
      <div className="Background">
          <div className="selectre">
          <h1>อัพโหลดรูปบัตร</h1>
              
          </div>
          <h2>กรุณาอัพโหลดรูปบัตร</h2>
          <hr/>
          <h2>ด้านหน้า</h2>  
        <img src={frontcard} width={250} height={155} alt="frontcard" /><hr />
          <h2>ด้านหลัง</h2>
        <img src={backcard} width={250} height={155} alt="backcard" />

        <hr />

        <button onClick={this.confirmUpload}>ยินยัน</button>

        <UploadComponent 
          {...this.state.upload}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Registeruploadphoto />, rootElement);
export default Registeruploadphoto;
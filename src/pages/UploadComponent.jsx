import React from "react";
import ImageUploader from "react-images-upload";

class UploadComponent extends React.Component {
  onDrop = (pictureFiles, pictureDataURLs) => {
    const newImagesUploaded = pictureDataURLs.slice(
      this.props.defaultImages.length
    );
    console.warn("pictureDataURLs =>", newImagesUploaded);
    this.props.handleChange(newImagesUploaded);
  };

  render() {
    return (
      <ImageUploader 
        withIcon={false}
        withLabel={false}
        withPreview={true}
        buttonText={"เพิ่มรูปภาพ"}
        fileSizeError={"รูปภาพขนาดใหญ่ไป"}
        fileTypeError={"ไม่รองรับไฟล์นี้"}
        onChange={this.onDrop}
        imgExtension={this.props.imgExtension}
        maxFileSize={this.props.maxFileSize}
        defaultImages={this.props.defaultImages}
      />
    );
  }
}

export default UploadComponent;

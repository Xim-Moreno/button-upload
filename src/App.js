import React, { useState } from 'react';

const FileUpload = () => {

  const uploadImage = async (event) => {
    let fileHandle;
    [fileHandle] = await window.showOpenFilePicker();
    const formData=fileHandle.body;
    
    try {
      const response = await fetch('https://0au73exycb.execute-api.us-east-2.amazonaws.com/v3_image/images-upload?image_name=Desert.jpg', {
        method: 'PUT',
        body: formData,
      });
      if (response.ok) {
        alert('File uploaded successfully');
      } else {
        alert('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
        <button type="submit" onClick={uploadImage}>Upload</button>
    </div>
  );
};

export default FileUpload;
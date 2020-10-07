import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import { Icon } from 'antd';
import S3 from 'react-aws-s3';

function FileUpload(props) {
    const [Images, setImages] = useState([])

    const onDrop = (files) => {

        let formData = new FormData();
        

        const config2 = {
            bucketName: 'cheaperone',
            dirName: 'media', /* optional */
            region: 'us-east-2',
            accessKeyId: process.env.REACT_APP_CLIENT_ACCESS_KEY_ID,
            secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
        }


        const ReactS3Client = new S3(config2);

        const uuidv4 = require('uuid/v4'); // lets chose v4 
        
        var newFileName = uuidv4();
         
        
 
    ReactS3Client
        .uploadFile(files[0], newFileName)
        .then(data => {
        setImages([...Images, data.location])
        props.refreshFunction([...Images, data.location])
        })
        .catch(err => console.error(err, "error"))
 
  /**
   * {
   *   Response: {
   *     bucket: "myBucket",
   *     key: "image/test-image.jpg",
   *     location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
   *   }
   * }
   */
     formData.append("file", files[0])
    
    }


    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: '300px', height: '240px', border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{ fontSize: '3rem' }} />

                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>
                
                {
                Images.map((image, index) => (  
                    <div key={index} onClick={() => onDelete(image)}>
                        <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={image} alt={`productImg-${index}`} />
                    </div>
                ))}


            </div>

        </div>
    )
}

export default FileUpload

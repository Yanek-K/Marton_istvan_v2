import React, { useState, useEffect } from "react";
import { app } from "./../../firebase/index";
import { firestore } from "./../../firebase/index";
import "firebase/storage";
import "./styles.scss";

const ImageUpload = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const [images, setImages] = useState([]);
  const timeStamp = new Date();

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageName = e.target.imageName.value;
      const price = e.target.price.value;
      const imageNumber = e.target.imageNumber.value;
      if (!imageName) return;
      await firestore.collection("gallery").doc(imageName).set({
        imageName,
        imageNumber,
        imagePrice: price,
        imageUrl: fileUrl,
        createdDate: timeStamp,
      });
      console.log("Image Uploaded");
      alert("Image Uploaded");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      const imageCollection = await firestore
        .collection("gallery")
        .orderBy("createdDate", "asc")
        .get();
      setImages(
        imageCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchImages();
  }, []);
  return (
    <div className="imageUpload">
      <form onSubmit={onSubmit} className="form">
        <input type="file" onChange={onFileChange} />
        <input type="text" name="imageName" placeholder="Image Name" />
        <input type="text" name="imageNumber" placeholder="Image Number" />
        <input type="text" name="price" placeholder="Price" />
        <button>Submit</button>
      </form>
      <div className="images">
        <ul className="image">
          {images.map((image) => {
            return (
              <li key={image.imageNumber}>
                <img src={image.imageUrl} alt="media" />
                <p>{image.imageName}</p>
                <p>${image.imagePrice}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ImageUpload;

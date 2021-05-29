import { firestore } from "./../../firebase/index";

export const handleFetchProducts = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("gallery")
      .get()
      .then((snapshot) => {
        const productsArray = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            documentID: doc.id,
          };
        });
        resolve(productsArray);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

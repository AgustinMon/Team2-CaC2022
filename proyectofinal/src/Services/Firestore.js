import { getFirestore, collection, addDoc } from "firebase/firestore";
import { UserProfileModel } from "../Models/UserProfileModel";
import app from "./Firebase";

// 1) Initialize Firebase *ya importado desde Firebase.js //

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const user = UserProfileModel;

user.age = 21;
user.language = 'en';
user.logo = 2;

const addElement = async (userId) => {
    user.userId = userId;
    
    try {
        const docRef = await addDoc(collection(db, "FakeFlix-Users"), {
          user
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export default addElement;

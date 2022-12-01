import { getFirestore, collection, addDoc, query, getDocs, where } from "firebase/firestore";
import { UserProfileModel } from "../Models/UserProfileModel";
import app from "./Firebase";

// 1) Initialize Firebase *ya importado desde Firebase.js //

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const user = UserProfileModel;

user.age = 21;
user.language = 'en';
user.logo = 2;

const getDataById = async (userId) => {
  user.userId = userId;
  console.log("userId in getDataById", userId);

    const doc = collection(db, "FakeFlix-Users");
    const q = query(doc, where("userId", "==", userId));
    
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot",querySnapshot);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
}

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

export { addElement, getDataById };

import { getFirestore, collection, addDoc, query, getDoc, getDocs, where, doc, updateDoc, FieldValue } from "firebase/firestore";
import { UserProfileModel } from "../Models/UserProfileModel";
import app from "./Firebase";

// 1) Initialize Firebase *ya importado desde Firebase.js //

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
console.log("db", db);
const user = new UserProfileModel();

const getDataById = async (userId) => {
  const doc = collection(db, "FakeFlix-Users");
  const q = query(doc, where("userId", "==", userId));
  await getDocs(q)
    .then((data) => {
      data.forEach((d) => {
        user.userId = d.data().userId;
        user.profiles = d.data().profiles;
      })
    });
  return user;
}

// const getAllData = async (userId) => {
//   user.userId = userId;
//   const doc = collection(db, "FakeFlix-Users");
//   await getDocs(doc)
//     .then((data) => {
//       console.log("querySnapshot 2", data)
//       data.forEach((d) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(d.id, " => ", d.data());
//       })
//     });

// }

const updateElement = async (user, profiles)=>{
  const q = query(collection(db, 'FakeFlix-Users'), where("userId", "==", user));
  const querySnapshot = await getDocs(q);
  const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  for (const document of documents) {
      const documentRef = doc(db, 'FakeFlix-Users', document.id);

      await updateDoc(documentRef, { profiles: profiles });
  }
}

const addElement = async (user) => {
  /* requiere un objeto user cumpliendo con la estructura de Models/UserProfileModel */
  try {
    const docRef = await addDoc(collection(db, "FakeFlix-Users"), {
      ...user
    })
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { addElement, getDataById, updateElement };

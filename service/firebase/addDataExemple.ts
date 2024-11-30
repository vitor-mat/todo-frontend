import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "./config";

//The add function can be used to create and also to update data on firestore
export const addOrUpdateDataExemple = async (data: any) => {

  const bookListRef = collection(db, "collectionName");

  await setDoc(doc(bookListRef, `documentName`), data)
};

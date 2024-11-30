import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";

export const getExemple = async (): Promise<any> => {
  const docRef = doc(db, "collectionName", `documentName`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) return docSnap.data();

  return {};
};

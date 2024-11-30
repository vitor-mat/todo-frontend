import { auth } from './config';
import { signOut as sigbOutFirebase } from "firebase/auth";

export const signOut = () => {
    sigbOutFirebase(auth).then(() => {}).catch((error) => {});
}
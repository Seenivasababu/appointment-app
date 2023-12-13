import { atom } from "recoil";
import { User } from "../user/[id]/page";

export const userAtom = atom<User>({
   key : "user",
   default : {
    email: "",
    name: "",
    isDoctor: false,
    isAdmin: false,
   }
})
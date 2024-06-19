import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref("");

let createAccount = async (email, password, displayName) => {
  try {
    let res = await auth.createUserWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Could not create new user");
    }
    await res.user.updateProfile({ displayName });
    return res;
  } catch (err) {
    error.value = err.message;
    console.log(err);
    return null;
  }
};

export default function useSignup() {
  return { error, createAccount };
}

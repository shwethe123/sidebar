import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);

let signIn = async (email, password) => {
  try {
    let res = await auth.signInWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Can't log in to the account");
    }
    return res;
  } catch (err) {
    error.value = err.message;
    console.log(err);
  }
}

let useLogin = () => {
  return { error, signIn }
}

export default useLogin;

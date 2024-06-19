// composables/useCollection.js

import { ref } from 'vue';
import { db5 } from '@/firebase/config'; // Assuming db5 is the Firestore database reference

const useCollection = (collection) => {
  let error = ref(null);

  const addDoc = async (doc) => {
    try {
      await db5.collection(collection).add(doc);
    } catch (error) {
      console.error('Error adding document:', error.message);
      error.value = 'Could not send message';
    }
  };

  return { error, addDoc };
};

export default useCollection;

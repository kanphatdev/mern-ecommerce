import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";
import axios from "axios";
const ecomStore = (set) => ({
  user: null,
  token: null,
  actionLogin: async (form) => {
    const response = await axios.post("http://localhost:5000/api/login", form);
    
    set({
      user: response.data.payload,
      token: response.data.token,
    });

    return response;
  },
});
const userPersist = {
    name: 'ecom-store',
    storage:createJSONStorage(() => localStorage)
}
const useEcomStore = create(persist(ecomStore,userPersist));

export default useEcomStore;

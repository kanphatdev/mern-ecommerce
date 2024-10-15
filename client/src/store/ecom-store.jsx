import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";
import axios from "axios";
import { listCategory } from "../api/Category";
import { listProduct } from "../api/product";

const ecomStore = (set) => ({
  user: null,
  token: null,
  categories : [],
  products: [],
  actionLogin: async (form) => {
    const response = await axios.post("http://localhost:5000/api/login", form);
    
    set({
      user: response.data.payload,
      token: response.data.token,
    });

    return response;
  },
   getCategory:async (token) => {
    try {
      const res = await listCategory(token);
      set({categories:res.data});
    } catch (error) {
     console.log(error);
     
    }
  },
  getProducts:async (token,count) => {
    try {
      const res = await listProduct(token,count);
      set({products:res.data});
    } catch (error) {
     console.log(error);
     
    }
  },
});
const userPersist = {
    name: 'ecom-store',
    storage:createJSONStorage(() => localStorage)
}
const useEcomStore = create(persist(ecomStore,userPersist));

export default useEcomStore;

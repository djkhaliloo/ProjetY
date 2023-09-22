import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import produitSlice from "./ProduitSlice/produitSlice";
import commandeSlice from "./CommandeSlice/commandeSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    produit:produitSlice,
    commande:commandeSlice
  },
});

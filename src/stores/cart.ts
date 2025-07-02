import { CartItem } from "@/types/cart-item"
import { create } from "zustand"

type Store = {
  openCart: boolean
  setOpenCart: (open: boolean) => void

  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: number) => void
}

export const useCart = create<Store>()((set) => ({
  openCart: false,
    items: [],
  setOpenCart: (openCart) => set(state => ({...state, openCart})),
  addItem: (item) => set(state => {
    let cloneItems = [...state.items]
    const existingItem = state.items.find(i => i.productId === item.productId)
    
    if(existingItem) {
      for(let key in cloneItems) {
        if(cloneItems[key].productId === item.productId) {
          cloneItems[key].quantity += item.quantity
        }
      }
    } else {
      cloneItems.push(item)
    }

    return {...state, items: cloneItems}
  }),

  removeItem: (productId) => set(state => ({
    ...state,
    items: state.items.filter(item => item.productId !== productId)
  }))
}))
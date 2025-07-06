"use client"

import { useCart } from "@/stores/cart"
import { Drawer, DrawerContent, DrawerTitle } from "../ui/drawer"
import { useEffect, useState } from "react"
import { CartEmpty } from "./cart-Empty"
import { CartList } from "./cart-list"

export const Cart = () => {
  const cart = useCart()

  const [open, setOpen] = useState(cart.openCart)
  useEffect(() => {
    setOpen(cart.openCart)
  }, [cart])

  return(
    <Drawer
      direction="right"
      open={open}
      onOpenChange={open => cart.setOpenCart(open)}
    >
      <DrawerContent className="p-4">
        <DrawerTitle>Carrinho</DrawerTitle>
        {cart.items.length <= 0 && <CartEmpty />}
        {cart.items.length > 0 && <CartList />}
        
      </DrawerContent>
    </Drawer>
  )
}
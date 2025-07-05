"use client"

import { useCart } from "@/stores/cart"
import { Drawer, DrawerContent, DrawerTitle } from "../ui/drawer"
import { useEffect, useState } from "react"

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
      <DrawerContent>
        <DrawerTitle>Carrinho</DrawerTitle>
        ...
      </DrawerContent>
    </Drawer>
  )
}
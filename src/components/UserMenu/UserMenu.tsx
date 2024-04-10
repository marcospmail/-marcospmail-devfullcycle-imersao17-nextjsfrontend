"use client"

import { MouseEvent } from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { IconButton, Menu, MenuItem, Typography } from "@mui/material"

import Link from "next/link"

import LogoutIcon from "@mui/icons-material/Logout"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ListAltIcon from "@mui/icons-material/ListAlt"

import AccountCircle from "@mui/icons-material/AccountCircle"

export type UserMenuProps = {
  user: any | null
}

export function UserMenu(props: UserMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const router = useRouter()

  const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const redirectToCart = () => {
    handleClose()
    router.push("/my-cart")
  }

  const redirectToMyOrder = () => {
    handleClose()
    router.push("/my-orders")
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    handleClose()
  }

  return props.user ? (
    <div>
      <IconButton size="large" onClick={handleMenu}>
        <AccountCircle />
      </IconButton>

      <Menu
        keepMounted
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={redirectToCart}>
          <ShoppingCartIcon />
          <Typography>Meu carrinho</Typography>
        </MenuItem>
        <MenuItem onClick={redirectToCart}>
          <ListAltIcon />
          <Typography>Meus pedidos</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <LogoutIcon />
          <Typography>Sair</Typography>
        </MenuItem>
      </Menu>
    </div>
  ) : (
    <Link href="/login" style={{ textDecoration: "none" }}>
      <Typography color="text.primary" sx={{ ml: 3, fontWeight: 500 }}>
        Entrar
      </Typography>
    </Link>
  )
}

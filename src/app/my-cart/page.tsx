import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Button,
  Divider,
  Link,
} from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import DeleteIcon from "@mui/icons-material/Delete"

import React from "react"
import { Total } from "@/components/Total/Total"

const products = [
  {
    id: 1,
    name: "Camiseta",
    image_url: "https://via.placeholder.com/500",
  },
  {
    id: 2,
    name: "Calça",
    image_url: "https://via.placeholder.com/500",
  },
]

const cart = {
  items: [
    {
      product_id: 1,
      quantity: 100,
      total: 1_000,
    },
    {
      product_id: 2,
      quantity: 20,
      total: 1_000,
    },
  ],
  total: 2_000,
}

function MyCart() {
  return (
    <Box>
      <Typography variant="h3">
        <ShoppingCartIcon /> Meu carrinho
      </Typography>

      <Grid2 container>
        <Grid2 xs={10} sm={7} md={4}>
          <List className="my-cart-list">
            {cart.items.map((item, key) => {
              const product = products.find(
                (product) => product.id == item.product_id
              )

              return (
                <React.Fragment key={key}>
                  <ListItem
                    sx={{ display: "flex", alignItems: "flex-start", mt: 3 }}
                  >
                    <ListItemAvatar>
                      <Avatar src={product.image_url} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="button">
                            {product.name} - Qtd. {item.quantity}
                          </Typography>
                          <Typography sx={{ color: "primary.main" }}>
                            {new Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(item.total)}
                          </Typography>
                        </Box>
                      }
                    ></ListItemText>
                  </ListItem>

                  <ListItem
                    sx={{ display: "flex", justifyContent: "end", p: 0 }}
                  >
                    <form>
                      <input type="hidden" name="index" value={key} />
                      <Button
                        color="error"
                        startIcon={<DeleteIcon />}
                        type="submit"
                      >
                        Excluir
                      </Button>
                    </form>
                  </ListItem>
                  <Divider variant="inset" component="li" sx={{ ml: 0 }} />
                </React.Fragment>
              )
            })}

            {!cart.items.length && (
              <ListItem>
                <ListItemText>Nenhum item no carrinho</ListItemText>
              </ListItem>
            )}
          </List>

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Total total={cart.total} />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
            {cart.items.length ? (
              <Button LinkComponent={Link} href="/checkout">
                Finalizar Compra
              </Button>
            ) : (
              <Button LinkComponent={Link} href="/checkout">
                Continuar Comprando
              </Button>
            )}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default MyCart

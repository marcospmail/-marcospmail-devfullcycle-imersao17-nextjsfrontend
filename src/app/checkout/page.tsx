import { Total } from "@/components/Total/Total"
import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import { CheckoutForm } from "./CheckoutForm"

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

function Checkout() {
  return (
    <Box>
      <Typography variant="h3">Checkout</Typography>
      <Grid2 container spacing={3}>
        <Grid2 xs={12} md={6}>
          <CheckoutForm />
        </Grid2>
        <Grid2 xs={0} md={1}>
          <Divider orientation="vertical" />
        </Grid2>
        <Grid2 xs={12} md={5}>
          <Typography variant="h5">Resumo do Pedido</Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Produto</TableCell>
                <TableCell>Qtd.</TableCell>
                <TableCell>Preço</TableCell>
              </TableRow>
              {cart.items.map((item, key) => {
                const product = products.find(
                  (product) => product.id === item.product_id
                )

                return (
                  <TableRow key={key}>
                    <TableCell>{product?.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.total)}
                    </TableCell>
                  </TableRow>
                )
              })}

              {/* insert another table row with a table cell */}
              <TableRow>
                <TableCell colSpan={3}>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Total total={cart.total} />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Checkout

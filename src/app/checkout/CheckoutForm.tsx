import PaidIcon from "@mui/icons-material/Paid"
import { Box, Button, TextField } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"

export const CheckoutForm = () => {
  return (
    <Box
      component={"form"}
      //   action={async (prevState: any, formData: FormData) => {
      //     try {
      //       const card_hash: string = "123456789"
      //       formData.set("card_hash", card_hash)
      //       await checkoutAction(prevState, formData)
      //     } catch (e) {
      //       return { error: e }
      //     }
      //   }}
    >
      <Grid2 container spacing={3}>
        <Grid2 xs={12} md={6}>
          <TextField
            name="cc-name"
            required
            label="Nome do Cartão"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            defaultValue="João da Silva"
          />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <TextField
            name="cc-number"
            required
            label="Número do Cartão"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            defaultValue={"4111111111"}
          />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <TextField
            name="cc-exp"
            required
            label="Data de expiração MM/YYYY"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            defaultValue={"12/2022"}
          />
        </Grid2>
        <Grid2 xs={12} md={6}>
          <TextField
            name="cc-csc"
            required
            label="CVV"
            helperText="Código de segurança"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            defaultValue={"12/2022"}
          />
        </Grid2>
      </Grid2>
      <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
        <Button type="submit" sx={{ mt: 3 }} startIcon={<PaidIcon />}>
          Pagar
        </Button>
      </Box>
    </Box>
  )
}

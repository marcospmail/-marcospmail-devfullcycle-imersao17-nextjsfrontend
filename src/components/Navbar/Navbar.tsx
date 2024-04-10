import {
  Toolbar,
  Typography,
  Button,
  AppBar,
  Box,
  IconButton,
  Link,
} from "@mui/material"
import Image from "next/legacy/image"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import HomeIcon from "@mui/icons-material/Home"
import { SearchBar } from "../SearchBar/SearchBar"
import { UserMenu } from "../UserMenu/UserMenu"
import { SelectCategory } from "../SelectCategory/SelectCategory"

export async function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ bgcolor: "background.paper" }}>
        <Image
          src="/logo.png"
          alt="logo"
          width={147.66}
          height={63.66}
          priority
        />
        <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "center", ml: 1 }}
        >
          <SearchBar />
        </Box>

        <IconButton LinkComponent={Link} size="large" href="/my-cart">
          <ShoppingCartIcon />
        </IconButton>

        <UserMenu user={null} />
      </Toolbar>

      <Toolbar
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          alignContent: "center",
          p: 1,
        }}
      >
        <SelectCategory categories={[]} />

        <Box
          component={Link}
          href="/products"
          sx={{
            textDecoration: "none",
            display: "flex",
            // alignItems: "center",
            ml: 3,
          }}
        >
          <HomeIcon sx={{ color: "text.primary" }} />
          <Typography variant="button" sx={{ ml: 1 }}>
            Home
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

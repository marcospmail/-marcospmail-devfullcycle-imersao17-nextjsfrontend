"use client"

import { Category } from "@/models"
import { FormControl, MenuItem, Select } from "@mui/material"
import { grey } from "@mui/material/colors"

type SelectCategoryProps = {
  categories: Category[]
}

export function SelectCategory(props: Readonly<SelectCategoryProps>) {
  return (
    <FormControl size="small" sx={{ width: 200 }}>
      <Select
        name="select-category"
        sx={{ backgroundColor: grey[400] }}
        value={0}
        // onChange={(event) => {}}
      >
        <MenuItem value="0">Todas as categorias</MenuItem>
        {props.categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

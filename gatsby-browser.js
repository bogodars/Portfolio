import React from "react"
import "lazysizes"

import { ThemeProvider } from "./src/components/ThemeContext"
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

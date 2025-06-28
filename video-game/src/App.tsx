import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

function App() {


  return (
    <Grid templateAreas={
      {
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"'  //1024px
      }}>
      <GridItem area='nav' bg='white'>
        <Navbar />
      </GridItem>
      <GridItem area='aside' bg='gold'>Aside</GridItem>

      <GridItem area='main' bg='skyblue'>Main</GridItem>
    </Grid>
  )
}

export default App

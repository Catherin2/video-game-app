import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./GameGrid"
import GenreMenu from "./components/GenreMenu"

function App() {


  return (
    <Grid templateAreas={
      {
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"'  //1024px
      }}>
      <GridItem area='nav' bg='white'>
        <Navbar onSearch={function (searchText: string): void {
          throw new Error("Function not implemented.")
        }} />
      </GridItem>
      <GridItem area='aside' bg='black'>
        <GenreMenu />
      </GridItem>
      <GridItem area='main' bg='#212121'>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App

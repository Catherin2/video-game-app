import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./GameGrid"
import GenreMenu from "./components/GenreMenu"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"

function App() {

  const [filteredGenre, setFilteredGenre] = useState<Genre | null>(null)
  return (
    <Grid
      templateAreas={
        {
          base: '"nav" "main"',
          lg: '"nav nav" "aside main"'  //1024px
        }}
      templateColumns={{
        base: 'ifr',
        lg: '200px'
      }}
    >
      <GridItem area='nav' bg='white'>
        <Navbar onSearch={function (searchText: string): void {
          throw new Error("Function not implemented.")
        }} />
      </GridItem>
      <Show when='>lg'>
        <GridItem area='aside' bg='black' paddingX={5}>
          <GenreMenu filteredGenre={filteredGenre} onSelectGenre={(genre) => setFilteredGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area='main' bg='#212121'>
        <GameGrid filteredGenre={filteredGenre} />
      </GridItem>
    </Grid>
  )
}

export default App

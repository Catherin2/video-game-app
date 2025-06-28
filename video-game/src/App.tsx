import { Grid, GridItem, Show } from "@chakra-ui/react"

function App() {


  return (
    <Grid templateAreas={
      {
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"'  //1024px
      }}>
      <GridItem area='nav' bg='red'>Nav</GridItem>

      <GridItem area='aside' bg='gold'>Aside</GridItem>

      <GridItem area='main' bg='skyblue'>Main</GridItem>
    </Grid>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import { Box, Grid, GridItem } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Grid  border={"1px solid red"} className='grid'>
        <GridItem w='100%' h='300' bg='blue.500'  display='flex' justifyContent='center' alignItems='center'>
          <h2 style={{fontWeight:"700",color:"white",fontSize:"30px"}}>Nav</h2>
        </GridItem>
        <GridItem w='100%' h='300' bg='orange.500' display='flex' justifyContent='center' alignItems='center'>
        <h2 style={{fontWeight:"700",color:"white",fontSize:"30px"}}>Content</h2>
        </GridItem>
        <GridItem w='100%' h='300' bg='red.500' display='flex' justifyContent='center' alignItems='center'>
        <h2 style={{fontWeight:"700",color:"white",fontSize:"30px"}}>Widget</h2>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;

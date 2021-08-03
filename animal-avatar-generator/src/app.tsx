import React from 'react'
import { Grid } from './components/grid'
import { GridCell } from './components/grid-cell'
import { Header } from './components/header'
import { Footer } from './components/footer'

const names = [
  'Temeka Lynam',
  'Kim Moodie',
  'Nathaniel Ellsworth',
  'Jacob Texeira',
  'Natashia Harrold',
  'Sol Langston',
  'Nickie Tortora',
  'Zandra Spano',
  'Maritza Linden',
  'Katharina Franks',
  'Luanne Parmenter',
  'Douglas Bodine',
  'Nobuko Frary',
  'Pansy Emmert',
  'Kanesha Brazee',
  'Shera Reece',
  'Onita Esperanza',
  'Ramonita Rearick',
  'Kaye Lanclos',
  'Velda Bronstein',
  'Faye Webster',
  'Deanna Mathis',
  'Ruth Ferguson',
  'Grace Dean',
]

export const App = () => (
  <>
    <Header/>
    <Grid>
      {names.map((name) => <GridCell key={name} title={name}/>)}
    </Grid>
    <Footer/>
  </>
)

export default App

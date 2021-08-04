import React from 'react'
import { Grid } from './components/grid'
import { GridCell } from './components/grid-cell'
import { Promo } from './components/promo'
import { Footer } from './components/footer'

const names = [
  'Temeka Lynam',
  'Kim Moodie',
  'Faith Hardy',
  'Jacob Texeira',
  'Natashia Harrold',
  'Sol Langston',
  'Nickie Tortora',
  'Zandra Spano',
  'Maritza Linden',
  'Katharina Franks',
  'Willis Higgins',
  'Douglas Bodine',
  'Nobuko Frary',
  'Pansy Emmert',
  'Kanesha Brazee',
  'Shera Reece',
  'Onita Esperanza',
  'Nicole Kelley',
  'Kaye Lanclos',
  'Velda Bronstein',
  'Faye Webster',
  'Deanna Mathis',
  'Ruth Ferguson',
  'Grace Dean',
  'Betty Quinn',
  'Ebony Guerrero',
]

export const App = () => (
  <>
    <Promo/>
    <Grid>
      {names.map((name) => <GridCell key={name} title={name}/>)}
    </Grid>
    <Footer/>
  </>
)

export default App

import { Grid } from '../grid'
import { GridCell } from '../grid-cell'
import { useState } from 'react'
import { Option, Radio } from './radio'
import './index.scss'

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
]

const blackoutOptions: Option<boolean>[] = [
  { value: true, className: 'option blackout-on' },
  { value: false, className: 'option blackout-off' },
]

const roundOptions: Option<boolean>[] = [
  { value: true, className: 'option round-on' },
  { value: false, className: 'option round-off' },
]

const sizeOptions: Option<number>[] = [
  { value: 80, className: 'option size-small' },
  { value: 120, className: 'option size-medium' },
  { value: 150, className: 'option size-large' },
]

export const Preview = () => {
  const [size, setSize] = useState(120)
  const [blackout, setBlackout] = useState(true)
  const [round, setRound] = useState(true)

  return (
    <div className="preview">
      <div className="controls">
        <Radio
          value={blackout}
          setValue={setBlackout}
          options={blackoutOptions}
        />
        <Radio
          value={round}
          setValue={setRound}
          options={roundOptions}
        />
        <Radio
          value={size}
          setValue={setSize}
          options={sizeOptions}
        />
      </div>

      <Grid>
        {names.map((name) => (
          <GridCell
            key={name}
            title={name}
            size={size}
            round={round}
            blackout={blackout}
          />
        ))}
      </Grid>
    </div>
  )
}

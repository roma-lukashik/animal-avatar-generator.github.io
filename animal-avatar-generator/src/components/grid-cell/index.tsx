import { FC } from 'react'
import { Avatar } from '../avatar'
import './index.css'

type Props = {
  title: string;
}

export const GridCell: FC<Props> = ({
  title,
}) => (
  <div className="grid-cell">
    <Avatar
      name={title}
      size={120}
    />
    <div className="subtitle">
      {title}
    </div>
  </div>
)

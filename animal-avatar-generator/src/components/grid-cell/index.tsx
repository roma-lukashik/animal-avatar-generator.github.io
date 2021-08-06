import { FC } from 'react'
import { Avatar } from '../avatar'
import './index.scss'

type Props = {
  title: string;
  size: number;
  blackout: boolean;
  round: boolean;
}

export const GridCell: FC<Props> = ({
  title,
  size,
  blackout,
  round,
}) => (
  <div className="grid-cell">
    <Avatar
      name={title}
      size={size}
      blackout={blackout}
      round={round}
    />
    <div className="subtitle">
      {title}
    </div>
  </div>
)

import { FC, useEffect, useRef } from 'react'
import avatar from 'animal-avatar-generator'
import './index.scss'

type Props = {
  name: string;
  size?: number;
  blackout?: boolean;
  round?: boolean;
}

export const Avatar: FC<Props> = ({
  name,
  size,
  blackout,
  round,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = avatar(name, { size, blackout, round })
    }
  }, [name, size, blackout, round])

  return <div className="img" ref={ref}/>
}

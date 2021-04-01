import avatar from 'animal-avatar-generator'
import './index.css'

const createAvatar = (seed?: string) => {
  document.getElementById('avatar')!.innerHTML = avatar(seed || 'Your custom seed')
}

createAvatar()

document.getElementById('seed')!.addEventListener('input', (event: any) => createAvatar(event.target.value))

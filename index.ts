import avatar from 'animal-avatar-generator'

document.getElementById('key')!.addEventListener('input', (event) => {
    document.getElementById('app')!.innerHTML = avatar((event.target as any).value)
})

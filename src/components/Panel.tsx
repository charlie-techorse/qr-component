import './panel.css'

export function Panel() {
  return <div className='panel'>
    <img className='panel__img' src='/image-qr-code.png'></img>
    <div className='panel__text'>
      <h1 className='panel__title'>Improve your front-end skills by building projects</h1>
      <p className='panel__paragraph'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  </div>
}
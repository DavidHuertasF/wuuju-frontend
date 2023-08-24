import './ErrorModal.scss'

const ErrorModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay-error" >
      <div className="modal">
        <div className="modal_container">
          <img className="close-button_img" src="https://res.cloudinary.com/davidhuertas26/image/upload/v1692014726/Wuuju/hebjydavwqfpezricorb.svg" alt="" />
          {children}
          <div className='buttons_container'>
            <button onClick={ () => { window.location.reload(false) }}>Regresar</button>
            <div></div>
            <button onClick={onClose}>Revisar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal

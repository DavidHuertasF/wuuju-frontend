import './QuotationInfo.scss'

const QuotationInfo = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" >
      <div className="modal">
        <div className="modal_container">
          <button onClick={onClose} className="close-button">X</button>
          {children}
        </div>
      </div>
    </div>
  )
}

export default QuotationInfo

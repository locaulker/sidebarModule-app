import { LiaTimesSolid } from "react-icons/lia"
import { useGlobalContext } from "./context"

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <LiaTimesSolid />
        </button>
      </div>
    </div>
  )
}
export default Modal

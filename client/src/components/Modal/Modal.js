import { ItAssetsCalculate } from '../../pages/assets/it-assets/ItAssetsCalculate/ItAssetsCalculate'
import './Modal.styles.scss'

export const Modal = ({ showModal, setShowModal }) => {
    const modal = (showModal ? 
    <div className="modal-wrapper">
    
    <ItAssetsCalculate showModal={showModal} setShowModal={setShowModal}/>
    </div> :
    null)

    return (
        modal   
    )
}
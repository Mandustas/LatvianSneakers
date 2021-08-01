import React from 'react'

export interface ModalProps {
}

function ModalReview({ }: ModalProps) {
    return (
        // <div id="ModalReview" className={`modal fade modal-dialog-scrollable `} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        //     <div className="modal-dialog modal-dialog-centered" role="document">
        //         <div className="modal-content">
        //             <img src="https://sun9-29.userapi.com/impg/KKIKOAbrbxQ10r-leSVK6kuxNhGrT3KhwHQFHg/Em8-Ra9S0Ig.jpg?size=738x1600&quality=96&sign=f9793e2fc7b1bc0716d01f0b1038a4c9&type=album" alt="" />
        //         </div>
        //     </div>
        // </div>

        <div id="ModalReview" style={{ display: "none" }} className="modal fade modal-dialog-scrollable" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ padding: "51px" }}>
                <div className="modal-content">
                    <img src="https://sun9-29.userapi.com/impg/KKIKOAbrbxQ10r-leSVK6kuxNhGrT3KhwHQFHg/Em8-Ra9S0Ig.jpg?size=738x1600&quality=96&sign=f9793e2fc7b1bc0716d01f0b1038a4c9&type=album" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ModalReview

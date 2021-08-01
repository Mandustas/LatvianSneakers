import React from 'react'
import "../components/Rules.scss"

function Rules() {
    return (
        <>
            <div className="rules-container">
                <div className="rules-header">Правила</div>
                <div className="rules-container container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12" style={{marginBottom: "20px"}}>1. Вы прямо подтверждаете, что используете этот сайт на свой страх и риск. LATVIANSNEAKERS предоставляет этот сайт и его содержимое на условиях «как есть, так доступно» и не делает никаких заявлений о каких-либо гарантиях в отношении этого сайта или его содержимого. LATVIANSNEAKERS отказывается от всех заявлений и гарантий, включая коммерческую ценность и гарантии пригодности для определенной цели. Кроме того, LATVIANSNEAKERS не заявляет и не гарантирует, что информация или товары, представленные на этом сайте, являются точными, полными или актуальными.</div>
                        <div className="col-md-6 col-12">
                            <div className="" style={{marginBottom: "20px"}}>2. Информация о продукте, цене и наличии может быть изменена в любое время без предварительного уведомления.
                            </div>
                            <div className="" style={{marginBottom: "20px"}}>3. Возврата денежных средств, а так же замена размера не предусмотрена и невозможна.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Rules

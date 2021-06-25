import React from 'react'

function SortDropdown() {
    return (
        <>
            <div className="dropdown">
                <button className="d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: "white", width: "255px", outline: "0", border: "solid 1px darkgray", }}>
                    По умолчанию
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">По умолчанию</a>
                    <a className="dropdown-item" href="#">Цена: по возрастанию</a>
                    <a className="dropdown-item" href="#">Цена: по убыванию</a>
                    <a className="dropdown-item" href="#">Новинки</a>
                </div>
            </div>
        </>
    )
}

export default SortDropdown

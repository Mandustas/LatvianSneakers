import React from 'react'
import { useHistory } from 'react-router-dom'
import "./AdminSidebar.scss"


function AdminSidebar() {
    const history = useHistory()
    return (
        <>
            <div className="adminsidebar-wrapper">
                <div className="adminsidebar-container">
                    <div className="adminsidebar-title">Администрирование</div>
                    <a className="nav-link text-dark" href="javascript:;" onClick={() => {
                        history.push("/adminpanel-banner")
                    }}>БАННЕРЫ</a>
                    <a className="nav-link text-dark" href="javascript:;" onClick={() => {
                        history.push("/adminpanel-brand")
                    }}>БРЕНДЫ</a>
                    <a className="nav-link text-dark" href="javascript:;" onClick={() => {
                        history.push("/adminpanel-product")
                    }}>ТОВАРЫ</a>
                    <a className="nav-link text-dark" href="javascript:;" onClick={() => {
                        history.push("/adminpanel-review")
                    }}>ОТЗЫВЫ</a>
                    <a className="nav-link text-dark" href="javascript:;" onClick={() => {
                        history.push("/adminpanel-order")
                    }}>ЗАКАЗЫ</a>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar

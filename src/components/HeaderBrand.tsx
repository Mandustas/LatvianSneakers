import React from 'react'
import { useHistory } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { IModel } from './HeaderBrends'

interface HeaderBrandProps {
    key: number;
    id: number;
    title: string;
    models: IModel[];
    onClick: any;
}

function HeaderBrand({ key, id, title, models, onClick }: HeaderBrandProps) {
    let history = useHistory();
    const { changeBreadcrumbs } = useActions()

    return (
        <>
            <li className="nav-item dropdown headerbrends-menu-item">
                <div className="dropdown-toggle headerbrends-menu-item-link-wrapper">
                    <a className="nav-link  headerbrends-menu-item-link" href='javascript:;' onClick={onClick} data-bs-toggle="dropdown">{title}</a>
                    <div className="dropdown-menu headerbrends-menu-dropdown-wrapper">
                        <ul className="headerbrends-menu-dropdown-container">
                            {
                                models.map((model: IModel) => (
                                    <li><a className="dropdown-item headerbrends-menu-dropdown-item" href='javascript:;' onClick={() => {
                                        changeBreadcrumbs(model.brandId, model.id)
                                        history.push("/shop/" + model.brandId + "/" + model.id)
                                    }}>{model.title}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </li>
        </>
    )
}

export default HeaderBrand

import React from 'react'
import "./FilterPanel.scss"


function FilterPanel() {
    return (
        <>
            <div className="filter-wrapper">
                <div className="filter-container">
                    <div className="filter-title">
                        Фильтры
                        <i className="fa fa-filter filter-title-icon"></i>
                    </div>
                    <div className="filter-sizes-container">
                        <div className="filter-sizes-title">
                            РАЗМЕР
                        </div>
                        <div className="filter-sizes-list">
                            <article className="feature1">
                                <input type="checkbox" id="feature1" />
                                <div>
                                    <span>
                                        EUR 35
                                    </span>
                                </div>
                            </article>

                            <article className="feature2">
                                <input type="checkbox" id="feature2" />
                                <div>
                                    <span>
                                        EUR 36
                                    </span>
                                </div>
                            </article>

                            <article className="feature3">
                                <input type="checkbox" id="feature3" />
                                <div>
                                    <span>
                                        EUR 37
                                    </span>
                                </div>
                            </article>

                            <article className="feature4">
                                <input type="checkbox" id="feature4" />
                                <div>
                                    <span>
                                        EUR 38
                                    </span>
                                </div>
                            </article>

                            <article className="feature4">
                                <input type="checkbox" id="feature4" />
                                <div>
                                    <span>
                                        EUR 39
                                    </span>
                                </div>
                            </article>

                        </div>
                    </div>
                    <div className="filter-brends-container">
                        <div className="filter-brends-title">
                            БРЕНД
                        </div>
                        <div className="filter-brends-list">
                            <div id="accordion">
                                <div className="filter-brends-item">
                                    <div className="" >
                                        <div className="mb-0 d-flex justify-content-between align-items-center">
                                            <div className="filter-brends-item-title">BALENCIAGA</div>
                                            <i className="fa fa-plus filter-brends-item-icon " data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1"></i>

                                        </div>
                                    </div>

                                    <div id="collapse1" className="collapse show" data-parent="#accordion">
                                        <div className="filter-brends-line">Line</div>
                                        <div className="filter-brends-line">Line</div>
                                    </div>
                                </div>
                                <div className="filter-brends-item">
                                    <div className="" >
                                        <div className="mb-0 d-flex justify-content-between align-items-center">
                                            <div className="filter-brends-item-title">BALENCIAGA</div>
                                            <i className="fa fa-plus filter-brends-item-icon collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2"></i>

                                        </div>
                                    </div>

                                    <div id="collapse2" className="collapse" data-parent="#accordion">
                                        <div className="filter-brends-line">Line</div>
                                        <div className="filter-brends-line">Line</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="filter-buttons-container">
                        <button className="filter-button filter-button-submit">Применить</button>
                        <button className="filter-button filter-button-clear">Сбросить</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterPanel

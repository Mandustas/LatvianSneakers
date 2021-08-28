import React from 'react'
import { useTranslation } from 'react-i18next';
import "../components/Rules.scss"

function Rules() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="rules-container">
                <div className="rules-header">
                    {t("Rules.Title")}
                </div>
                <div className="rules-container container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-12" style={{ marginBottom: "20px" }}>
                            {t("Rules.Part1")}
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="" style={{ marginBottom: "20px" }}>
                                {t("Rules.Part2")}
                            </div>
                            <div className="" style={{ marginBottom: "20px" }}>
                                {t("Rules.Part3")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Rules

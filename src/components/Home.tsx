import React from 'react'
import BannersContainer from './BannersContainer'
import FilterPanel from './FilterPanel'
import FilterSidebar from './FilterSidebar'
import Shop from './Shop'

function Home() {
    return (
        <>
            <BannersContainer></BannersContainer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <FilterPanel></FilterPanel>
                    </div>
                    <div className="col-lg-9 col-md-12" >
                        <Shop></Shop>
                    </div>
                </div>
            </div>
            <FilterSidebar></FilterSidebar>
            <div className={`overlay`} ></div>
        </>
    )
}

export default Home

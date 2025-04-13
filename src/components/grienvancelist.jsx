import React from 'react'
import GrievanceCard from './grievanceCard'
import "../css/grievancelist.css"
import refreshIcon from "/refreash.svg"
import filterIcon from "/filter.svg"

const Grienvancelist = () => {
  return (
    <div className='grievance-list-cont bg-white'>
      <div className='grie-list-header'>
        <div>
          <div className='list-filter'>
            <img src={filterIcon} alt="" />
            <p> Filter </p>
          </div>
          <div>
            <div className='list-refresh'> 
              <img src={refreshIcon} alt="" />
              <p> Refresh </p>
            </div>
            <div className='list-search'> 
                <input type="search" id="" placeholder='Search Here' className='header-search-input'/>
            </div>
          </div>
        </div>
      </div>
      <div className='grie-card-cont'>
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
        <GrievanceCard />
      </div>
    </div>
  )
};

export default Grienvancelist;
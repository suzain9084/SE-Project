import React from 'react';
import "../css/grievanceCard.css";

const GrievanceCard = () => {
  return (
    <div className="grievance-card">
      <h2 className="grievance-title">Poor Classroom Ventilation</h2>
      <p className="grievance-time">2 days ago</p>
      <p className="grievance-description">
        The ventilation in Room 302 is not working properly. It's very difficult to concentrate in class due to the heat.ksdish sihiasnx ihaisbx ihsix icnapodjwf ojvpoenponskl pojeofnkls c.ksnclskncklsmc lnscklmsk
      </p>
      <div className="grievance-tags">
        <span className="tag">Maintenance</span>
        <span className="tag">Pending</span>
      </div>
    </div>
  );
};

export default GrievanceCard;

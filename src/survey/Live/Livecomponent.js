import React from "react";
import "./live.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import Button from "../../Button/ButtonComponent";
import Amazon from "../../assests/ab.jpg";


const Live=()=>
{

    return (
        <>
           <div className="survey">
             <div className="amazon">
             <div className="survey-category">
              <img src={Amazon} alt="logo"/>
              <div className="employee">
                  <h4 className="live">Live</h4>
                  <h4>Amazon inc</h4>
                  <h1>Employee Engagement Survey Template</h1>
             </div>
             </div>
             <Button />
             </div>
             <div className="feedback">
                <div>Employee Feedback about all the employee has feeling good after rejoining the Company post cvoid and give your feedback on what can be changed. Employee Feedback about all the employee has feeling good after rejoining the Company post cvoid and give your feedback on what can be changed </div>
             </div>
             <div className="calender">
             <div className="date">
             <CalendarMonthIcon/>
                   <div>
                    <div className="week">Start Date</div>
                    <div className="start">12 Sep 2022</div>
                   </div>
                </div>
                 <div className="date">
                 <CalendarMonthIcon/>
                   <div>
                   <div  className="week">End Date</div>
                    <div  className="start">22 Sep 2022</div>
                   </div>
                </div>
                <div className="date">
                  <FormatListBulletedSharpIcon/>
                   <div>
                    <div  className="week">No. of Questions</div>
                    <div className="start">12</div>
                   </div>
                   </div>
                   </div>
                     </div>
        </>
    )
}

export default Live;
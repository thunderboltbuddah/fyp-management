import React, { useEffect } from "react";
import moment from "moment";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";

function TimelineComponent() {
  const groups = [
    { id: 1, title: "Title" },
    { id: 2, title: "Defence" },
    { id: 3, title: "Evaluation" },
    { id: 4, title: "FYP1" },
    { id: 5, title: "Mid 1" },
    { id: 6, title: "FYP2" },
    { id: 7, title: "FYP Evaluation" }
  ];

  const items = [
    {
      id: 1,
      group: 1,
      title: "Proposal Submission",
      start_time: moment("2024-01-01").toDate(),
      end_time: moment("2024-01-15").toDate()
    },


    {
      id: 2,
      group: 2,
      title: "Defence",
      start_time: moment("2024-01-15").toDate(),
      end_time: moment("2024-02-19").toDate()
    },
   
  ];


  return (
    <div className="text-center" style={{ height: "500px", width: "100%" }}>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment("2024-01-01").toDate()}
        defaultTimeEnd={moment("2024-09-01").toDate()}
      />
    </div>
  );
}

export default TimelineComponent;

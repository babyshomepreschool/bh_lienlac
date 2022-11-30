import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import PropTypes from 'prop-types';

function CalendarAttendence({ diemdanhHistory }) {
  const [dayOff, setDayOff] = useState(0);
  const [studiedDay, setStudiedDay] = useState(0);
  let abc = 0;
  useEffect(() => {
    setStudiedDay(abc);
  }, [setStudiedDay, abc]);
  const dateHistory = {};
  if (diemdanhHistory) {
    diemdanhHistory.split('\n').forEach(element => {
      const array = element.split(',');
      dateHistory[new Date(`${array[0]}`)] = array[1];
    });
  }
  return (
    <>
      <div>
        <span style={{ fontWeight: 'bold' }}>Điểm danh:</span>
        <div className="note-table">
          <div className="wrap-row">
            <div>Số ngày đi học: {studiedDay}</div>
          </div>
          <div className="wrap-row">
            <div>Số ngày nghỉ: {dayOff}</div>
          </div>
        </div>
        <br />
        <Calendar
          tileClassName={({ date }) => {
            switch (dateHistory[date]) {
              case 'Đã về':
                abc += 1;
                return 'attendence';
              case 'Đi học':
                return 'studying';
              case 'Nghỉ có phép trừ ăn':
                return 'absent';
              default:
                return '';
            }
          }}
          tileDisabled={({ date }) => date.getDay() === 0}
          onViewChange={() => {
            setDayOff(abc);
            abc = 0;
          }}
        />
        <div className="note-table">
          <div className="wrap-row">
            <div className="attendence-note" />
            <div>Đã về</div>
          </div>
          <div className="wrap-row">
            <div className="absent-note" />
            <div>Nghỉ có phép trừ ăn</div>
          </div>
          <div className="wrap-row">
            <div className="studying-note" />
            <div>Đi học</div>
          </div>
        </div>
      </div>
    </>
  );
}

CalendarAttendence.propTypes = {
  diemdanhHistory: PropTypes.string,
};

export default CalendarAttendence;

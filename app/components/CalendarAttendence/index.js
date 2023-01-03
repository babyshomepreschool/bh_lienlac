import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import PropTypes from 'prop-types';

function CalendarAttendence({ diemdanhHistory }) {
  const [dayOff, setDayOff] = useState(0);
  const [studiedDay, setStudiedDay] = useState(0);

  const dateHistory = {};

  if (diemdanhHistory) {
    diemdanhHistory.split('\n').forEach(element => {
      const array = element.split(',');
      dateHistory[new Date(`${array[0]}`)] = array[1];
    });
  }

  useEffect(() => {
    var studiedD = 0
    var dayO = 0
    for (let day = 1; day <= 31; day++) {
      switch (dateHistory[new Date(new Date().getFullYear(), new Date().getMonth(), day)]) {
        case 'Đã về':
        case 'Đi học':
          studiedD++
          break;
        case 'Nghỉ có phép trừ ăn':
          dayO++
          break;
        default:
          break;
      }
    }
    setStudiedDay(studiedD)
    setDayOff(dayO)
  }, [])

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
          onActiveStartDateChange={({ activeStartDate }) => {
            var studiedD = 0
            var dayO = 0
            console.log(activeStartDate)
            for (let day = 1; day <= 31; day++) {
              switch (dateHistory[new Date(activeStartDate.getFullYear(), activeStartDate.getMonth(), day)]) {
                case 'Đã về':
                case 'Đi học':
                  studiedD++
                  break;
                case 'Nghỉ có phép trừ ăn':
                  dayO++
                  break;
                default:
                  break;
              }
            }
            setStudiedDay(studiedD)
            setDayOff(dayO)
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

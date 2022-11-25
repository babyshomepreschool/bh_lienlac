import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import { FaCalendarAlt, FaImage, FaInfoCircle, FaMoneyBill } from 'react-icons/fa';
import Wrapper from './Wrapper';
import './custom.css';

export function ChildrenListItem(props) {
  const [showProfile, setShowProfile] = useState(false);
  const [showTuition, setShowTuition] = useState(false);
  const [showAttendence, setShowAttendence] = useState(false);
  const { item } = props;
  const dateHistory = {};

  let avatarURL = '';

  if (item.avatar !== undefined) {
    const { avatar } = item;
    avatarURL = avatar.split('=')[0];
  }

  if (item.diemdanhHistory) {
    item.diemdanhHistory.split('\n').forEach(element => {
      const array = element.split(',');
      dateHistory[new Date(`${array[0]}`)] = array[1];
    });
  }

  const displayView = {};
  if (isEmpty(item)) {
    displayView.display = 'none';
  }

  const handleClick = () => { };

  return (
    <Wrapper style={displayView}>
      <div
        className="background"
        style={{ backgroundImage: `url(${avatarURL})` }}
      >
        <img src={`${avatarURL}`} className="avatar" alt="avatar" />
        <div style={{ fontWeight: 'bold' }}>{item.name}</div>
        <div style={{ color: item.class, fontWeight: 'bold' }}>Class: {item.class}</div>
      </div>

      <button
        type="button"
        style={{ width: '100%' }}
        onClick={() => setShowProfile(!showProfile)}
        className="button-bar"
        onKeyDown={handleClick}
      >
        <FaInfoCircle />
        Profile
      </button>

      {showProfile && (
        <div className="information">
          <div>Birthday: {new Date(item.birthday).toLocaleString().split(',')[1]}</div>
          <div>Phone: {item.phone}</div>
          <div>Father name: {item.fatherName}</div>
          <div>Mother name: {item.motherName}</div>
        </div>
      )}

      <button
        type="button"
        style={{ width: '100%' }}
        onClick={() => setShowTuition(!showTuition)}
        className="button-bar"
        onKeyDown={handleClick}
      >
        <FaMoneyBill />
        Tuition
      </button>
      {showTuition && (
        <div className="information">
          <div><span style={{ fontWeight: 'bold' }}>Total tuition: </span>{item.hocphiTong}</div>
          <div><span style={{ fontWeight: 'bold' }}>Details tuition: </span>{item.hocphiChitiet}</div>
          <div><span style={{ fontWeight: 'bold' }}>Tuition history: </span>{`\n${item.hocphiHistory}`}</div>
        </div>
      )}

      <button
        type="button"
        style={{ width: '100%' }}
        onClick={() => setShowAttendence(!showAttendence)}
        className="button-bar"
        onKeyDown={handleClick}
      >
        <FaCalendarAlt />
        Attendence
      </button>
      {showAttendence && (
        <div>
          <span style={{ fontWeight: 'bold' }}>Attendence History:</span>

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
      )}

      <button
        type="button"
        style={{ width: '100%' }}
        className="button-bar"
        onKeyDown={handleClick}
      >
        <FaImage />
        Album
      </button>
    </Wrapper>
  );
}

ChildrenListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(
  null,
  null,
)(ChildrenListItem);

import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FaCalendarAlt,
  FaImage,
  FaInfoCircle,
  FaMoneyBill,
} from 'react-icons/fa';
import Wrapper from './Wrapper';
import './custom.css';
import ImagesGallery from '../../components/ImagesGallery';
import Tuition from '../../components/Tuition';
import CalendarAttendence from '../../components/CalendarAttendence';

export function ChildrenListItem(props) {
  const [showProfile, setShowProfile] = useState(false);
  const [showTuition, setShowTuition] = useState(false);
  const [showAttendence, setShowAttendence] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);
  const { item } = props;

  let avatarURL = '';

  if (item.avatar !== undefined) {
    const { avatar } = item;
    avatarURL = avatar.split('=')[0];
  }

  const displayView = {};
  if (isEmpty(item)) {
    displayView.display = 'none';
  }

  const handleClick = () => {};

  return (
    <Wrapper style={displayView}>
      <div
        className="background"
        style={{ backgroundImage: `url(${avatarURL})` }}
      >
        <img src={`${avatarURL}`} className="avatar" alt="avatar" />
        <div style={{ fontWeight: 'bold' }}>{item.name}</div>
        <div style={{ color: item.class, fontWeight: 'bold' }}>
          Class: {item.class}
        </div>
      </div>
      <button
        type="button"
        style={{ width: '100%' }}
        onClick={() => setShowProfile(!showProfile)}
        className="button-bar"
        onKeyDown={handleClick}
      >
        <FaInfoCircle />
        Thông tin
      </button>

      {showProfile && (
        <div className="information">
          <div>
            Sinh Nhật: {new Date(item.birthday).toLocaleString().split(',')[1]}
          </div>
          <div>Số điện thoại: {item.phone}</div>
          <div>Tên Bố: {item.fatherName}</div>
          <div>Tên Mẹ: {item.motherName}</div>
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
        Học phí
      </button>
      {showTuition && <Tuition {...item} />}

      <button
        type="button"
        style={{ width: '100%' }}
        onClick={() => setShowAttendence(!showAttendence)}
        className="button-bar"
        onKeyDown={handleClick}
      >
        <FaCalendarAlt />
        Điểm danh
      </button>
      {showAttendence && (
        <CalendarAttendence diemdanhHistory={item.diemdanhHistory} />
      )}

      <button
        type="button"
        style={{ width: '100%' }}
        className="button-bar"
        onKeyDown={handleClick}
        onClick={() => setShowAlbum(!showAlbum)}
      >
        <FaImage />
        Album ảnh
      </button>
      {showAlbum && <ImagesGallery albumURL={item.album} />}
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

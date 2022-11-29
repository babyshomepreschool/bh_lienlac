import React, { useEffect, useState } from 'react';

function Tuition({ hocphiTong, hocphiChitiet, hocphiHistory }) {
  const [showTuition, setShowTuition] = useState({});
  let tuitions = [];
  if (hocphiHistory) {
    tuitions = hocphiHistory.split('"2022/');
  }

  useEffect(() => {
    const initialVisibleTuition = {};

    if (tuitions) {
      tuitions.map((tuition, index) => {
        initialVisibleTuition[`tuition${index}`] = false;
      });
    }
    setShowTuition(initialVisibleTuition);
  }, []);

  // Show and hide tuition by month
  const handleShowTuition = (event, key) => {
    event.preventDefault();
    setShowTuition({ ...showTuition, ...{ [key]: !showTuition[key] } });
  };
  return (
    <div>
      <div className="information">
        <div>
          <span style={{ fontWeight: 'bold' }}>Học phí tổng: </span>
          {hocphiTong}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>Học phí chi tiết: </span>
          {hocphiChitiet}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>Lịch sử học phí: </span>
          {tuitions.map((hp, index) => (
            <div key={hp}>
              {hp ? (
                <button
                  onClick={event => handleShowTuition(event, `tuition${index}`)}
                  className="button-46"
                >
                  Tháng {hp.substring(0, 2).split('"')[0]}
                </button>
              ) : null}
              {showTuition[`tuition${index}`] && <div>"2022/{hp}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tuition;

import React, { useEffect, useState } from 'react';

function Tuition({ hocphiTong, hocphiChitiet, hocphiHistory }) {
  const [showTuition, setShowTuition] = useState();
  const [tuitionYear, setTuitionYear] = useState(2023);
  const years = Array.from({ length: 6 }, (_, i) => i - 5 + new Date().getFullYear())
  let tuitions = [];
  if (hocphiHistory) {
    tuitions = hocphiHistory.split(`"${tuitionYear}/`);
    tuitions.shift();
  }
  
  useEffect(() => {
    setShowTuition(tuitions[0])
  }, [])

  // Show and hide tuition by month
  const handleShowTuition = (event) => {
    setShowTuition(event.target.value);
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
          <select
            defaultValue={years[years.length - 1]}
            onChange={(event) => {
              setTuitionYear(event.target.value)
              setShowTuition(hocphiHistory.split(`"${event.target.value}/`)[1])
            }}
          >
            {years.map((year) => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
          <select onChange={(event) => handleShowTuition(event)}>
            {tuitions.map((hp, index) => (
              <option
                key={hp}
                value={hp.substring(0, 2).split('"')[0] == '12' ? hp.split(`"${parseInt(tuitionYear) + 1}/1`)[0] : hp}
              >
                {
                  hp ?
                    `Tháng ${hp.substring(0, 2).split('"')[0]}`
                    : null
                }
              </option>
            ))}
          </select>
          <br />
          {showTuition}
        </div>
      </div>
    </div >
  );
}

export default Tuition;

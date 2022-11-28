import React, { useState } from "react";

const Tuition = ({ hocphiTong, hocphiChitiet, hocphiHistory }) => {
    const [showTuition, setShowTuition] = useState(getInitialData())
    let tuitions = []
    var initialVisibleTuition = {}
    if (hocphiHistory) {
        tuitions = hocphiHistory.split('"2022/')
    }

    function getInitialData() {
        if (tuitions) {
            tuitions.map((tuition, index) => {
                initialVisibleTuition['tuition' + index] = false
            })
        }
        return initialVisibleTuition
    }

    console.log(showTuition)

    return (
        <div>
            <div className="information">
                <div><span style={{ fontWeight: 'bold' }}>Học phí tổng: </span>{hocphiTong}</div>
                <div><span style={{ fontWeight: 'bold' }}>Học phí chi tiết: </span>{hocphiChitiet}</div>
                <div><span style={{ fontWeight: 'bold' }}>Lịch sử học phí: </span>{tuitions.map(hp => (<div key={hp}>{hp}</div>))}</div>
            </div>
        </div>
    )
}

export default Tuition
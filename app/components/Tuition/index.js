import React, { useEffect, useState } from "react";

function Tuition({ hocphiTong, hocphiChitiet, hocphiHistory }) {
    const [showTuition, setShowTuition] = useState({})
    let tuitions = []
    if (hocphiHistory) {
        tuitions = hocphiHistory.split('"2022/')
    }

    useEffect(() => {
        var initialVisibleTuition = {}

        if (tuitions) {
            tuitions.map((tuition, index) => {
                initialVisibleTuition['tuition' + index] = false
            })
        }
        setShowTuition(initialVisibleTuition)
    }, [setShowTuition])

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
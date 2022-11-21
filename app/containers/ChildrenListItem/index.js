import { isEmpty } from "lodash";
import { array } from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Wrapper from "./Wrapper";
import Calendar from "react-calendar";
import './custom.css'

export function ChildrenListItem(props) {
    const { item } = props
    let avatarURL = '';
    if (item.avatar !== undefined) {
        const avatarURLRaw = item.avatar;
        avatarURL = avatarURLRaw.split("=")[0];
    }
    let dateHistory = {}
    if (item.diemdanhHistory) {
        item.diemdanhHistory.split("\n").forEach(element => {
            let array = element.split(",")
            dateHistory[new Date(`${array[0]}`)] = array[1]
        });
    }
    console.log(dateHistory)
    let displayView = {}
    if (isEmpty(item)) {
        displayView.display = 'none'
    }

    return (
        <Wrapper style={displayView}>
            <div>Name: {item.name}</div>
            <div>Class: {item.class}</div>
            <div>Birthday: {item.birthday}</div>
            <div>Phone: {item.phone}</div>
            <img src={`${avatarURL}`} max-height="300xp" max-width="400px" />
            <div>Father name: {item.fatherName}</div>
            <div>Mother name: {item.motherName}</div>
            <div>Total tuition: {item.hocphiTong}</div>
            <div>Details tuition: {item.hocphiChitiet}</div>
            <span style={{fontWeight: 'bold'}}>
                Attendence History:
            </span>
            <Calendar

                tileClassName={({ date, view }) => {
                    switch (dateHistory[date]) {
                        case 'Đã về':
                            return 'attendence'
                        case 'Nghỉ có phép trừ ăn':
                            return 'absent'
                        default:
                            break;
                    }
                }}
                tileDisabled={({ date }) => date.getDay() === 0}
            />
            <div>Tuition history: {'\n' + item.hocphiHistory}</div>
        </Wrapper>
    )
}

export default connect(null, null)(ChildrenListItem)

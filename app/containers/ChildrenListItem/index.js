import { isEmpty } from "lodash";
import { array } from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Wrapper from "./Wrapper";

export function ChildrenListItem(props) {
    const { item } = props
    let avatarURL = '';
    if (item.avatar !== undefined) {
        const avatarURLRaw = item.avatar;
        avatarURL = avatarURLRaw.split("=")[0];
    }

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
            <div>Attendence history:{'\n' + item.diemdanhHistory}</div>
            <div>Tuition history: {'\n' + item.hocphiHistory}</div>
        </Wrapper>
    )
}

export default connect(null, null)(ChildrenListItem)

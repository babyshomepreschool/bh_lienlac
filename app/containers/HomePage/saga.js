/**
 * Gets the information of children
 */

import { call, put, select, takeLatest } from "redux-saga/effects";
import { LOAD_CHILDREN } from "../App/constant";
import { loadChildrenError, loadChildrenSuccess } from "../App/action";
import request from 'utils/request';
import { makeSelectIdChild } from "./selectors";

export function* getChildren() {
    const userId = yield select(makeSelectIdChild());
    const requestURL = `https://eoy4w58q1v7207b.m.pipedream.net/${userId}`;

    try {
        const information = yield call(request, requestURL);
        yield put(loadChildrenSuccess(information));
    } catch (err) {
        yield put(loadChildrenError(err))
    }
}

export default function* childrenData() {
    yield takeLatest(LOAD_CHILDREN, getChildren)
}
import { isEmpty } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './custom.css';
import ImagesGallery from '../../components/ImagesGallery';
import Tuition from '../../components/Tuition';
import CalendarAttendence from '../../components/CalendarAttendence';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';


export function ChildrenListItem(props) {
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

  const handleClick = () => { };

  return (
      <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-2 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <MDBCardImage src={avatarURL}
                      alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  </div>
                  <div className="ms-7" style={{ marginTop: '120px', fontSize: 'small' }}>
                    <MDBTypography style={{ whiteSpace: 'nowrap' }}>{item.name}</MDBTypography>
                    <MDBCardText>{item.class}</MDBCardText>
                  </div>
                </div>
                <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <MDBCardText className="mb-1 h5">253</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa', whiteSpace: 'nowrap', fontSize: 'small' }}>
                      <MDBCardText className="text1 mb-1">
                        Sinh Nhật: {new Date(item.birthday).toLocaleString().split(',')[1]}
                      </MDBCardText>
                      <MDBCardText className="text1 mb-1">Số điện thoại: {item.phone}
                      </MDBCardText>
                      <MDBCardText className="text1 mb-0">
                        Tên Bố: {item.fatherName}
                      </MDBCardText>
                      <MDBCardText className="text1 mb-0">
                        Tên Mẹ: {item.motherName}
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Học phí</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa', fontSize: 'small' }}>
                      <Tuition {...item} />
                    </div>
                  </div>
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Điểm danh</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa', fontSize: 'small' }}>
                      <CalendarAttendence diemdanhHistory={item.diemdanhHistory} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">Photos</MDBCardText>
                    <MDBCardText className="mb-0"><a href={item.album} target="_blank" rel="noopener noreferrer" className="text-muted">Show all</a></MDBCardText>
                  </div>
                  <MDBRow>
                    <ImagesGallery albumURL={item.album} />
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
  );
}

ChildrenListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(
  null,
  null,
)(ChildrenListItem);

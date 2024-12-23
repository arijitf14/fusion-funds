import LayoutHOC from "@components/core/CommonLayout";
import { Accordion, Col, Row } from "react-bootstrap";
import "./ManageProfile.css";
import ContactIcon from "@assets/customSvg/Contact";
import { PillIcons } from "@assets/svg";
import CustomButton from "@components/core/CustomButton/CustomEditButton";
import SidePanel from "@components/core/SidePanel";
import { useEffect, useState } from "react";
import EditProfile from "@components/EditProfile/EditProfile";
import { MyCustomModal } from "@components/core/MyCustomModal/MyCustomModal";
import TwoFA from "@components/TwoFA/TwoFA";
import ChangePassword from "@components/ChangePassword/ChangePassword";

const ManageProfile = () => {
  const [previewModal, setShowPreviewModal] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [changePasswordModalShow, setChangePasswordModalShow] =
    useState<boolean>(false);

  const profileDetail = {
    contactDetail: {
      phoneNumber: "981-904-4652 0896",
      email: "rahulduitta@gmail.com",
    },
    personalDetail: {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      country: "chocolate",
      city: "strawberry",
      state: "chocolate",
      zipCode: "10001",
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
    },
  };

  return (
    <div className="my-4">
      <div className="my-4">
        <h3>Manage Profile</h3>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className="custom-accordion-item mb-4">
          <Accordion.Header className="headerClass">
            <div className="header-content">
              <span className="header-icon">
                <PillIcons />
              </span>
              <span className="header">Contact Details</span>
            </div>
          </Accordion.Header>
          <Accordion.Body className="bodyClass">
            <div className="">
              <span className="body-header">Contact Details</span>
              <Row className="w-100 h-100 ms-0 mt-2">
                <Col xs={12} md={3} className="px-0">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Mobile Number</span>
                    <span className="body-containt-text">
                      +1 {profileDetail?.contactDetail?.phoneNumber}
                    </span>
                  </div>
                </Col>
                <Col xs={12} md={8} className="px-0">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Email</span>
                    <span className="body-containt-text">
                      {profileDetail?.contactDetail.email}
                    </span>
                  </div>
                </Col>
              </Row>
              <hr className="hrLine" />
              <span className="body-header">Personal Details </span>
              <Row className="w-100 h-100 ms-0 mt-2">
                <Col xs={12} md={3} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">First Name</span>
                    <span className="body-containt-text">
                      {profileDetail.personalDetail.firstName}
                    </span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Middle Name</span>
                    <span className="body-containt-text">
                      {profileDetail.personalDetail.middleName}
                    </span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Last Name</span>
                    <span className="body-containt-text">
                      {profileDetail.personalDetail.lastName}
                    </span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Country</span>
                    <span className="body-containt-text">
                      {profileDetail?.personalDetail.country}
                    </span>
                  </div>
                </Col>
                <Col xs={12} md={3} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">City</span>
                    <span className="body-containt-text">
                      {profileDetail?.personalDetail.city}
                    </span>
                  </div>
                </Col>
                <Col xs={12} md={3} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">State</span>
                    <span className="body-containt-text">
                      {profileDetail?.personalDetail.state}
                    </span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Zip Code</span>
                    <span className="body-containt-text">
                      {profileDetail?.personalDetail.zipCode}
                    </span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Address Line 1</span>
                    <span className="body-containt-text">
                      {profileDetail?.personalDetail.addressLine1}
                    </span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Address Line 2</span>
                    <span className="body-containt-text">
                      {profileDetail?.personalDetail.addressLine2}
                    </span>
                  </div>
                </Col>
              </Row>

              {/* <AccordionCustomButton icon={AddCircle} text="Edit" onClick={() => console.log("Edit button clicked")}/> */}
              <div className="mt-3">
                <CustomButton
                  title="Edit"
                  icon="+"
                  onSelect={() => {
                    setShowPreviewModal(true);
                  }}
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="custom-accordion-item mb-4">
          <Accordion.Header className="headerClass">
            <div className="header-content">
              <span className="header-icon">
                <ContactIcon />
              </span>
              <span className="header-text">Account Settings</span>
            </div>
          </Accordion.Header>
          <Accordion.Body className="bodyClass">
            <div className="">
              <span className="body-header">
                2 Factor Authentication Settings
              </span>
              <div className="d-flex flex-column">
                <span className="body-containt-title">Preferred Option</span>
                <span className="body-containt-text">Email ID</span>
              </div>
              <div className="mt-3">
                <CustomButton
                  title="Edit"
                  icon="+"
                  onSelect={() => {
                    setModalShow(true);
                  }}
                />
              </div>
            </div>
            <hr className="hrLine" />
            <div className="changePasswordDiv">
              <span className="body-containt-text">Change Password</span>
              <div className="mt-3">
                <CustomButton
                  title="Change"
                  icon="+"
                  onSelect={() => {
                    setChangePasswordModalShow(true);
                  }}
                />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {previewModal && (
        <SidePanel
          position="right"
          setSidePanelVisibility={() => setShowPreviewModal(false)}
          sidePanelHeading="Edit Personal Details"
          size="sm"
          contentfullHeight
        >
          <div className="vh-100 panel-container">
            <EditProfile profileData={profileDetail.personalDetail} />
          </div>
        </SidePanel>
      )}
      <MyCustomModal show={modalShow} onHide={() => setModalShow(false)}>
        <TwoFA
          onHide={() => setModalShow(false)}
          onSuccess={() => {}}
          // showOtp={showOtp}
          // setShowOtp={setShowOtp}
        />
      </MyCustomModal>
      <MyCustomModal
        show={changePasswordModalShow}
        onHide={() => setChangePasswordModalShow(false)}
      >
        <ChangePassword
          onHide={() => setChangePasswordModalShow(false)}
          onSuccess={() => {}}
        />
      </MyCustomModal>
    </div>
  );
};

export default LayoutHOC(ManageProfile);

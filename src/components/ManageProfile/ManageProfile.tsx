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
  const [changePasswordModalShow, setChangePasswordModalShow] = useState<boolean>(false);

  return (
    <div className="my-4">
      <div className="my-4">
        <h3>Manage Profile</h3>

      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className="custom-accordion-item mb-4">
          <Accordion.Header className="headerClass">
            <div className="header-content">
              <span className="header-icon"><PillIcons /></span>
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
                    <span className="body-containt-text">+1 981-904-4652 0896</span>
                  </div>
                </Col>
                <Col xs={12} md={8} className="px-0">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Email</span>
                    <span className="body-containt-text">rahulduitta@gmail.com</span>
                  </div>
                </Col>
              </Row>
              <hr className="hrLine" />
              <span className="body-header">Personal Details </span>
              <Row className="w-100 h-100 ms-0 mt-2">
                <Col xs={12} md={3} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">First Name</span>
                    <span className="body-containt-text">Richard</span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Middle Name</span>
                    <span className="body-containt-text">John</span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Last Name</span>
                    <span className="body-containt-text">Jackman</span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Country</span>
                    <span className="body-containt-text">USA</span>
                  </div>
                </Col>
                <Col xs={12} md={3} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">City</span>
                    <span className="body-containt-text">Orlando City</span>
                  </div>
                </Col>
                <Col xs={12} md={3} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">State</span>
                    <span className="body-containt-text">Westwind</span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Zip Code</span>
                    <span className="body-containt-text">541258</span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Address Line 1</span>
                    <span className="body-containt-text">Holland Road</span>
                  </div>
                </Col>
                <Col xs={12} md={2} className="px-0 mb-2 mb-md-2">
                  <div className="d-flex flex-column">
                    <span className="body-containt-title">Address Line 2</span>
                    <span className="body-containt-text">123 Holland Road</span>
                  </div>
                </Col>
              </Row>

              {/* <AccordionCustomButton icon={AddCircle} text="Edit" onClick={() => console.log("Edit button clicked")}/> */}
              <div className="mt-3">
                <CustomButton title="Edit" icon="+" onSelect={() => { setShowPreviewModal(true)}} />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="custom-accordion-item mb-4">
          <Accordion.Header className="headerClass">
            <div className="header-content">
              <span className="header-icon"><ContactIcon /></span>
              <span className="header-text">Account Settings</span>
            </div>
          </Accordion.Header>
          <Accordion.Body className="bodyClass">
            <div className="">
              <span className="body-header">2 Factor Authentication Settings</span>
              <div className="d-flex flex-column">
                <span className="body-containt-title">Preferred Option</span>
                <span className="body-containt-text">Email ID</span>
              </div>
              <div className="mt-3">
                <CustomButton title="Edit" icon="+" onSelect={() => { setModalShow(true)}} />
              </div>
            </div>
            <hr className="hrLine" />
            <div className="changePasswordDiv">
              <span className="body-containt-text">Change Password</span>
              <div className="mt-3">
                <CustomButton title="Change" icon="+" onSelect={() => { setChangePasswordModalShow(true)}} />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {previewModal && <SidePanel
        position="right"
        setSidePanelVisibility={() => setShowPreviewModal(false)}
        sidePanelHeading="Edit Personal Details"
        size="sm"
        contentfullHeight
      >
        <div className="vh-100 panel-container"><EditProfile/></div>
      </SidePanel>}
      <MyCustomModal show={modalShow} onHide={() => setModalShow(false)}>
      <TwoFA
            onHide={() => setModalShow(false)}
            onSuccess={() => {}}
            // showOtp={showOtp}
            // setShowOtp={setShowOtp}
          />
        </MyCustomModal>
        <MyCustomModal show={changePasswordModalShow} onHide={() => setChangePasswordModalShow(false)}>
      <ChangePassword
            onHide={() => setChangePasswordModalShow(false)}
            onSuccess={() => {}}
          />
        </MyCustomModal>
    </div>
  );
};

export default LayoutHOC(ManageProfile);

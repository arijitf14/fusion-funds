import Confirmation from "@components/Confirmation/Confirmation";
import LayoutHOC from "@components/core/CommonLayout";
import { MyCustomModal } from "@components/core/MyCustomModal/MyCustomModal";
import { RootState } from "@redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearShowNotifyModal } from "@redux/signUpConfirmation";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((gs: RootState) => gs.signUpConfirmationDetails)
  const [confirmModalShow, setConfirmModalShow] = useState<boolean>(false);

  useEffect(() => {
    if (showModal === true) {
      setConfirmModalShow(true);
      dispatch(clearShowNotifyModal());
    }
  }, []);

  return (
    <>
      <div>Dashboard</div>
      <MyCustomModal
        show={confirmModalShow}
        onHide={() => setConfirmModalShow(false)}
      >
        <Confirmation
          onSuccess={() => setConfirmModalShow(false)}
          onHide={() => setConfirmModalShow(false)}
        />
      </MyCustomModal>
    </>
  );
};

export default LayoutHOC(Dashboard);

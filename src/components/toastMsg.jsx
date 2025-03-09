import React, { useEffect } from "react";
import { Toast } from "bootstrap";

export const ToastMsg = () => {
  useEffect(() => {
    const toastEl = document.querySelector(".toast");
    const toast = new Toast(toastEl);
    toast.show();
  }, []);

  return (
    <>
      <div className="toast align-items-center text-bg-success border-5" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">here is some motivation to quit alcohol....😊</div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
        

    </>
  );
};

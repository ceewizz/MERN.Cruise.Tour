import React from "react";

// All previous props here.
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
     X 
    </span>
  );
}

export default DeleteBtn;
import React from "react";

import Icon from "../components/Icon";

export default props => (
  <div className="mt-3">
    <h3>
      <Icon icon="home" /> {props.title}
    </h3>
  </div>
);

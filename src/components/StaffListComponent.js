import { STAFFS } from "../shared/staffs";
import React from "react";

class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = STAFFS;
  }

  render() {
    const list = this.state.map((STAFFS) => {
      return (
        <span>
          <div key={STAFFS.id} className="col ">
            {STAFFS.name}
          </div>
        </span>
      );
    });
    return (
      <div className="staff">
        {list}
      </div>
    );
  }
}

export default StaffList;

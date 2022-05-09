import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import React from "react";
import dateFormat, { masks } from "dateformat";


class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInfo: null,
    };
  }
  onClick = (info) => {
    return this.setState({ selectedInfo: info });
  };
  renderInfo = (info) => {
    if (info != null) {
      return (
        <div className="form-info" key={info.id}>
          <h2>Họ và tên : {info.name}</h2>
          <p>Ngày sinh : {dateFormat(info.doB, "dd/mm/yyyy")}</p>
          <p>Ngày vào công ty : {dateFormat(info.startDate, "dd/mm/yyyy")}</p>
          <p>Phòng ban : {info.department.name}</p>
          <p>Số ngày nghỉ còn lại :  {info.annualLeave}</p>
          <p>Số ngày đã làm thêm :  {info.overTime}</p>
          
        </div>
      );
    } else {
      return <div className="suggest">Bấm vào tên để xem thông tin.</div>;
    }
  };
  render() {
    const list = STAFFS.map((info) => {
      return (
        <span onClick={() => this.onClick(info)}>
          <div key={info.id} className="col">
            {info.name}
          </div>
        </span>
      );
    });
    return (
      <div className="container">
        <div className="staff">{list}</div>;
        <div className="info">{this.renderInfo(this.state.selectedInfo)}</div>
      </div>
    );
  }
}

export default StaffList;

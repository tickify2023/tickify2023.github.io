import React from "react";

export const SimpleTicket = () => {
  return (
    <div className="row ticket-box">
      <div className="item col-11 col-md-8 col-lg-5 row p-0">
        <div className="item-right col-4">
          <h2 className="num">23</h2>
          <p className="day">Feb</p>
          <span className="up-border" />
          <span className="down-border" />
        </div>{" "}
        {/* end item-right */}
        <div className="item-left col-8">
          <p className="event">Music Event</p>
          <h2 className="title">Live In Sydney</h2>
          <div className="sce">
            <div className="icon">
              <i className="fa fa-table" />
            </div>
            <p>
              Monday 15th 2016 <br /> 15:20Pm &amp; 11:00Am
            </p>
          </div>
          <div className="fix" />
          <div className="loc">
            <div className="icon">
              <i className="fa fa-map-marker" />
            </div>
            <p>
              North,Soth, United State , Amre <br /> Party Number 16,20
            </p>
          </div>
          <div className="fix" />
          {/* <button className="tickets">Tickets</button> */}
        </div>{" "}
        {/* end item-right */}
      </div>{" "}
      {/* end item */}
    </div>
  );
};
/* .ticket-box .item {
  padding: 0 20px;
  background: #fff;
  overflow: hidden;
  margin: 10px;
  display: flex;
  flex-wrap: nowrap;
  border: 1px solid var(--gray-vanish);
}
.ticket-box .item-right,
.ticket-box .item-left {
  padding: 20px;
}
.ticket-box .item-right {
  padding: 79px 50px;
  margin-right: 20px;
  position: relative;
  height: 286px;
}
.ticket-box .item-right .up-border,
.ticket-box .item-right .down-border {
  padding: 14px 15px;
  background-color: #ddd;
  border-radius: 50%;
  position: absolute;
}
.ticket-box .item-right .up-border {
  top: -8px;
  right: -35px;
}
.ticket-box .item-right .down-border {
  bottom: -13px;
  right: -35px;
}
.ticket-box .item-right .num {
  font-size: 60px;
  text-align: center;
  color: #111;
}
.ticket-box .item-right .day,
.ticket-box .item-left .event {
  color: #555;
  font-size: 20px;
  margin-bottom: 9px;
}
.ticket-box .item-right .day {
  text-align: center;
  font-size: 25px;
}
.ticket-box .item-left {
  padding: 34px 0px 19px 46px;
  border-left: 3px dotted #999;
}
.ticket-box .item-left .title {
  color: #111;
  font-size: 34px;
  margin-bottom: 12px;
}
.ticket-box .item-left .sce {
  margin-top: 5px;
  display: block;
}
.ticket-box .item-left .sce .icon,
.ticket-box .item-left .sce p,
.ticket-box .item-left .loc .icon,
.ticket-box .item-left .loc p {
  word-spacing: 5px;
  letter-spacing: 1px;
  color: #888;
  margin-bottom: 10px;
}
.ticket-box .item-left .sce .icon,
.ticket-box .item-left .loc .icon {
  margin-right: 10px;
  font-size: 20px;
  color: #666;
}
.ticket-box .item-left .loc {
  display: block;
}
.fix {
  clear: both;
}
.ticket-box .item .tickets,
.booked,
.cancel {
  color: #fff;
  padding: 6px 14px;
  float: right;
  margin-top: 10px;
  font-size: 18px;
  border: none;
  cursor: pointer;
}
.ticket-box .item .tickets {
  background: #777;
}

.linethrough {
  text-decoration: line-through;
}
@media only screen and (max-width: 1150px) {
  .ticket-box .item {
    margin-right: 20px;
  }
} */

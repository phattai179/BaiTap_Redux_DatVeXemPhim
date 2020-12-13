import React, { Component } from 'react'
import { connect } from 'react-redux'
import { datGheAction } from '../Redux/Action/BaiTapBookingTicketAction';

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disable = false;

            // Trạng thái ghế đã bị người khác đặt rồi
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disable = true;
            }

            // Xét trạng thái ghế đang đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)

            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }


            return <button onClick={() => {
                this.props.datGhe(ghe)
            }} disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }


    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className="rowNumber" style = {{marginRight: "0"}}>
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {

        if (this.props.soHangGhe === 0) {
            return <div className="d-flex">
                <p style = {{width : "20px", marginBottom : "0"}}>{this.props.hangGhe.hang}</p>
                <p className = "w-100 my-0">{this.renderSoHang()}</p>

            </div>
        } else {
            return <div className = "d-flex my-0">
                <p style = {{width : "20px", marginBottom: "0"}}>{this.props.hangGhe.hang}</p>
                <p className = "w-100 my-0">{this.renderGhe()}</p>
            </div>
        }


    }

    render() {



        return (
            <div className="text-light text-left mt-2 ml-5" style={{ fontSize: "25px" }}>
                {/* {this.props.hangGhe.hang}
                {this.renderGhe()} */}

                {this.renderHangGhe()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BaiTapBookingTicKetReducer.danhSachGheDangDat


    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)
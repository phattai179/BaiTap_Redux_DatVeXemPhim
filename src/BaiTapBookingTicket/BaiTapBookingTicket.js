import React, { Component, Fragment } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheDaTa from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {

    renderHangGhe = () => {
        return danhSachGheDaTa.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })

        // <Fragment key = {{}} >

        // </Fragment>
    }


    render() {
        return (
            <div className="bookingMovie" style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8 text-center mt-2">
                                <h3 className="text-warning" style = {{fontSize : "45px", marginBottom : 0}}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>

                                <div className="mt-1 text-light" style={{ fontSize: '25px' }} >Màn Hình</div>

                                <div className="mt-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='screen'></div>
                                    <div className = "w-100" style = {{left: '-50%', transform: 'translateX(8%)'}}>
                                        {this.renderHangGhe()}
                                    </div>

                                </div>


                            </div>
                            <div className="col-4">
                                <div style={{ fontSize: '35px' }} className="text-primary mt-3" >Danh Sách Ghế Bạn Chọn</div>

                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

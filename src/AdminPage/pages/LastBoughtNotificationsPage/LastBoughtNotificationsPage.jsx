
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { colors } from '../../color';
import "./lbnotification.css"
import { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import InfiniteScroll from "react-infinite-scroll-component";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchases, resetPage } from '../../../redux/features/boughts/boughts';
import { useNavigate } from 'react-router-dom';
function LastBoughtNotificationsPage() {


    const dispatch = useDispatch();


    const { boughts, page, hasMore } = useSelector(state => state.boughts)

    const next = () => {
        dispatch(getPurchases({ page, body }));
    };

    const [packets, setpackets] = useState();

    const [schoolName, setschoolName] = useState("");
    const [packetName, setpacketName] = useState("");
    const [date1, setDate1] = useState(new Date('2020-1-1'));
    const [date2, setDate2] = useState(new Date());
    const [isActive, setisActive] = useState(true);
    const [isActive2, setisActive2] = useState(false);


    let temp = {
        schoolName,
        packetName,
        isActive: (isActive == true && isActive2 == false ? true : false ),
        createdAt: {
            createdAtStart: date1?.getFullYear() + "-" + (date1?.getMonth() + 1) + "-" + date1?.getDate() || "2020-1-1",
            createdAtEnd: date2?.getFullYear() + "-" + (date2?.getMonth() + 1) + "-" + date2?.getDate() || "2020-1-1"
        }
    }
    useEffect(() => {

        getPackets();

        var body = temp;

        if((isActive == true && isActive2 == true) || (isActive == false && isActive2 == false) ){
            delete body.isActive
        } 

        dispatch(getPurchases({ page, body }));
    }, [schoolName, packetName, isActive, date1, date2,isActive2]);

    const onChangeDate1 = (e) => {
        dispatch(resetPage())
        setDate1(e)
    }

    const onChangeActive2 = (e) => {
        dispatch(resetPage())
        setisActive2(!isActive2)
    }
    const onChangeActive = (e) => {
        dispatch(resetPage())
        setisActive(!isActive)
    }
    const onChangeDate2 = (e) => {
        dispatch(resetPage())
        setDate2(e)
    }

    const onChangePacket = (e) => {
        dispatch(resetPage())
        setpacketName(e.target.value)
    }
    const onChangeSchoolName = (e) => {
        dispatch(resetPage())
        setschoolName(e.target.value)
    }
    const ip = import.meta.env.VITE_IP;

    const getPackets = async () => {
        try {
            const res = await fetch(ip + "admin/list-packets")
            const data = await res.json();

            if (data.success) {

                setpackets(data.data[0])
            }
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     let body = {
    //         schoolName,
    //         packetName,
    //         isActive,
    //         createdAt: {
    //             createdAtStart: date1?.getFullYear() + "-" + date1?.getMonth() + "-" + date1?.getDate() || "2020-01-01",
    //             createdAtEnd: date2?.getFullYear() + "-" + date2?.getMonth() + "-" + date2?.getDate() || "2020-01-01"
    //         }
    //     }
    //     dispatch(getPurchases({page,body}));
    // }, [])

    const navigate = useNavigate();

    return (
        <div className="p-4">

            <div className=" mx-3 mb-3" style={{ color: colors.text.focus }}>
                <div>
                    {/* <SchoolIcon></SchoolIcon> */}
                    <span style={{ color: "#67748e" }}> <ShoppingCartIcon></ShoppingCartIcon> / Satın Alınanlar</span>
                </div>

            </div>
            <div className="listschools bgw">
                <div className='mblistewithd'>

                    <div className="">
                        <h3 style={{ color: "#3A416F" }} className="text-center fw-bold bgw mt-4">Satın Alımlar</h3>

                        <div className='row mt-3'>
                            <div className='col-lg-2 d-flex justify-content-center col-2 border-bottom'>
                                <span className='text-center' style={{ color: "#3A416F" }}>
                                    <FilterAltIcon></FilterAltIcon>
                                </span>
                            </div>
                            <div className="d-flex col-lg-10 col-10 border-bottom mblistsc" style={{ color: colors.text.focus }} >
                                {/* <span className="col-lg-1 col-1 sp fw-bold"></span> */}
                                <span style={{ color: "#3A416F" }} className="col-lg-1 col-1 sp fw-bold">#ID</span>
                                <span style={{ color: "#3A416F" }} className="col-lg-3 col-3 sp fw-bold">İsim</span>
                                <span style={{ color: "#3A416F" }} className="col-lg-2 col-2 sp fw-bold">Paket</span>
                                <span style={{ color: "#3A416F" }} className="col-lg-1 col-1 sp fw-bold">Yıllık Ücret</span>
                                <span style={{ color: "#3A416F" }} className="col-lg-2 col-2 sp fw-bold">Son Fatura</span>
                                <span style={{ color: "#3A416F" }} className="col-lg-1 col-1 sp fw-bold">Aktif</span>
                                <span style={{ color: "#3A416F" }} className="col-lg-2 col-2 sp fw-bold">Oluşturulma Tarihi</span>


                            </div>

                        </div>

                    </div>
                    <div className="d-flex">
                        <div className='col-lg-2 col-2 px-3'>
                            <div className='d-flex flex-column justify-content-around h-100 pb-5'>
                                <div className='d-flex flex-column'>
                                    <p>
                                        İsme Göre Filtre
                                    </p>
                                    <input className='px-1 border-1' value={schoolName} onChange={onChangeSchoolName} style={{ outline: "none", borderRadius: "10px" }} type="text" placeholder='' />

                                </div>

                                <div className='d-flex flex-column'>
                                    <p>
                                        Pakete Göre Filtre
                                    </p>
                                    <select onChange={onChangePacket} className='p-1 cursorpointer' style={{ outline: "none", borderRadius: "10px" }}>
                                        {packets?.length > 0 && packets?.map((element) => {
                                            return (<option className='cursorpointer' key={element.id} value={element.packetName}>{element.packetName}</option>)
                                        })}

                                    </select>

                                </div>
                                <div className='d-flex flex-column'>
                                    <div className='d-flex justify-content-between'>
                                        <span>Son Satın Alımlar</span>
                                        <input style={{width: "15px" }} className='cursorpointer' type='checkbox' checked={isActive} onClick={onChangeActive} />

                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <span>Geçmiş Satın Alımlar</span>
                                        <input style={{width: "15px" }} className='cursorpointer' type='checkbox' checked={isActive2} onClick={onChangeActive2} />

                                    </div>
                                </div>
                                <div className='d-flex flex-column '>
                                    <p>Oluşturulma Tarihi</p>
                                    <div className='d-flex flex-column'>
                                        <DatePicker onChange={onChangeDate1} value={date1} />
                                        <DatePicker onChange={onChangeDate2} value={date2} />

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-10 col-10'>
                            <InfiniteScroll

                                dataLength={5} //This is important field to render the next data
                                next={next}
                                hasMore={hasMore}
                                loader={<div className="d-flex justify-content-center mt-3 mb-2"><div style={{ fontSize: "10px" }} className="spinner-border text-center"></div></div>}
                                //min-height="100vh" // Corrected the syntax here
                                height="65vh" // Corrected the syntax here
                                endMessage={<div></div>}

                            >


                                {boughts.length > 0  && 
                                    boughts.map((element) => {

                                        let date = new Date(element.createdAt)
                                        let day = date.getDate().toString().padStart(2, '0');
                                        let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are zero-based
                                        let year = date.getFullYear();
                                        let hours = date.getHours().toString().padStart(2, '0');
                                        let minutes = date.getMinutes().toString().padStart(2, '0');

                                        let formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

                                        return (
                                            <div onClick={() => navigate("/okullar/" + element.School.id)} key={element.id} className='row cursorpointer eachbought'>

                                                <span className='col-lg-1 col-1 text-center'>{element.id}</span>
                                                <span className='col-lg-3 col-3 text-center'>{element.School.schoolName}</span>
                                                <span className='col-lg-2 col-2 text-center'>{element.School.Packet.packetName}</span>
                                                <span className='col-lg-1 col-1 text-center'>{element.School.Packet.packetPrice}</span>
                                                <span className='col-lg-2 col-2 text-center'>{element.price} TL</span>
                                                <span className='col-lg-1 col-1 text-center'>{element.isActive == true ? "Aktif" : "Pasif"}</span>
                                                <span className='col-lg-2 col-2 text-center'>{formattedDate}</span>
                                            </div>
                                        )
                                    })}

                            </InfiniteScroll>


                        </div>



                    </div>

                </div>
            </div>

        </div>
    );
}

export default LastBoughtNotificationsPage;
import { useEffect, useState } from "react";
import { colors } from "../../../color";
import "./detailsSchool.css";
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useNavigate, useParams } from "react-router-dom";
import Profile from "../../Profile/Profile";
import OwnerProfile from "./DetailsMenus/OwnerProfile";
import RestoreIcon from '@mui/icons-material/Restore';
import DoneIcon from '@mui/icons-material/Done';
import InfoIcon from '@mui/icons-material/Info';
function DetailsSchool() {

    const { id } = useParams()
    const ip = import.meta.env.VITE_IP;

    const navigate = useNavigate();

    const [school, setSchool] = useState();



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const getSchoolDetail = async (action) => {
        try {

            const res = await fetch(ip + "admin/get-school-detail/" + action,)
            const data2 = await res.json().then(async (data) => {
                setSchool(data.data[0])
                const response = await fetch(ip + "admin/list-purchases?page=1", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "schoolName": data.data[0].schoolName,
                        "packetName": ""
                    })
        
                })
                const datae = await response.json();
        
                setpaymentDetails(datae.data[0].data)
        
            })
        } catch (error) {
            console.log(error);

            throw error;
        }
    };


    const [paymentDetails, setpaymentDetails] = useState([]);



    useEffect(() => {
        getSchoolDetail(id)
    }, [])

    const formattedDate = new Date(school?.createdAt || "2023-6-6");

    const day = String(formattedDate.getDate()).padStart(2, '0');
    const month = String(formattedDate.getMonth() + 1).padStart(2, '0'); // Ay değeri 0'dan başlar, bu nedenle 1 ekleyerek düzeltiyoruz.
    const year = formattedDate.getFullYear();
    
    const formattedDateString = `${day}-${month}-${year}`;

    return (
        <div >
            <div className="container-fluid">

                <div className="">
                    <div className="h50 border-bottom">
                        <div className=" pt-4">
                            <h2 className="text-center" style={{ color: colors.text.main }}>{school?.schoolName}(#{school?.id})</h2>
                        </div>

                        <div className="d-flex justify-content-center h-75">
                            <div className="col-6 d-flex justify-content-around h-100 flex-wrap">

                                <div className="d-flex flex-column justify-content-around">
                                    <div className="schooldetailsbox" onClick={() => navigate("/siniflar/" + school?.id, {
                                        state: {
                                            data: school
                                        }
                                    })}>
                                        <SchoolIcon className="mx-2" /> Sınıflar
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-around">
                                    <div className="schooldetailsbox" onClick={handleClickOpen}>
                                        <BusinessCenterIcon className="mx-2" /> Yönetici
                                    </div>


                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="h50">
                        <div className="h-100 d-flex justify-content-center align-items-center">
                            <div className="paymentSec col-lg-8 col-11 d-flex flex-column">
                                <div style={{ color: colors.text.focus }} className="border-bottom p-3 d-flex  justify-content-center align-items-center">
                                    <InfoIcon className="mx-2"></InfoIcon> Genel Bilgiler
                                </div>
                                <div className="d-flex h-100">
                                    <div className="col-6 altsectionbox p-3">
                                        <h5 style={{ color: colors.text.focus }} className="pb-2">Son Ödemeler</h5>

                                        {paymentDetails.length > 0 && paymentDetails.map((element) => {
                                            return (

                                                <div key={element.id} className="mb-2 p-2 paid overflow-auto">
                                                    <div className="eachelementpaid" style={{ color: colors.text.focus }} >
                                                        <CreditCardIcon style={{ color: colors.text.focus }}></CreditCardIcon>
                                                    </div>
                                                    <div className="eachelementpaid" style={{ color: colors.text.focus }} >
                                                        {element.price}
                                                    </div>
                                                    <div style={{ color: colors.text.focus }} >
                                                        {!(element.isActive) ? <RestoreIcon></RestoreIcon> : <DoneIcon></DoneIcon> }
                                                    </div>
                                                </div>

                                            )
                                        })}



                                    </div>
                                    <div className="col-6 altsectionbox border-start d-flex justify-content-center align-items-center">
                                        <div className="creditcart d-flex flex-column  align-items-center w-75 h-75">
                                            <InfoIcon style={{ fontSize: "4rem", color: colors.text.focus }}></InfoIcon>
                                            <div className="d-flex flex-column overflow-auto" style={{ color: colors.text.focus }}>
                                                <span className="fw-bold">{formattedDateString}</span> <span>Tarihinden Beri KreşApp Kullanıyor</span>

                                                <span>Şu an <span className="fw-bold">{school?.Packet?.packetName}</span> paketini kullanıyor.</span>
                                                <span>Yıllık Ödemesi <span className="fw-bold">{school?.Packet?.packetPrice} TL</span></span>



                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <OwnerProfile open={open} onClose={handleClose} element={school}></OwnerProfile>

        </div>
    );
}

export default DetailsSchool;
import { useEffect, useState } from "react";
import { colors } from "../../../color";
import "./detailsSchool.css";
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useNavigate, useParams } from "react-router-dom";
import ShowOwnerMenu from "./DetailsMenus/OwnerProfile";
import Profile from "../../Profile/Profile";
function DetailsSchool() {

    const { id } = useParams()
    const ip = import.meta.env.VITE_IP;

    const navigate = useNavigate();

    const [school, setSchool] = useState();
    console.log(school);



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const getSchoolDetail = async (action) => {
        try {

            const res = await fetch(ip + "schools" +"21" ,)// action,)
            const data = await res.json();

            setSchool(data.data)
        } catch (error) {
            console.log(error);

            throw error;
        }
    };

    console.log(school);

    useEffect(() => {
        getSchoolDetail(id);
    }, [])


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
                                    <div className="schooldetailsbox" onClick={() => setOpen(true)}>
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
                                    <CreditCardIcon className="mx-2"></CreditCardIcon> Ödeme Bilgileri
                                </div>
                                <div className="d-flex h-100">
                                    <div className="col-6 altsectionbox p-3">
                                        <h5 style={{ color: colors.text.focus }} className="pb-2">Son Ödemeler</h5>
                                        <div className="mb-2 p-2 paid overflow-auto">
                                            <div className="eachelementpaid" style={{ color: colors.text.focus }} >
                                                <CreditCardIcon style={{ color: colors.text.focus }}></CreditCardIcon>
                                            </div>
                                            <div  className="eachelementpaid" style={{ color: colors.text.focus }} >
                                                5000TL
                                            </div>
                                            <div style={{ color: colors.text.focus }} >
                                                18/06/2023
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 altsectionbox border-start d-flex justify-content-center align-items-center">
                                        <div className="creditcart d-flex flex-column  align-items-center border w-75 h-75">
                                            <CreditCardIcon style={{ fontSize: "5rem", color: colors.text.focus }}></CreditCardIcon>
                                            <div className="d-flex flex-column overflow-auto" style={{ color: colors.text.focus }}>
                                                <p>

                                                    6 Aydır KresApp Kullanıyor
                                                </p>
                                                <p>

                                                    Toplam Ödenen Tutar: 250000
                                                </p>
                                                <p>
                                                    0 TL borç
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <Profile open={open} onClose={handleClose} id={school?.owner?.id} role={"yonetici"}></Profile>

        </div>
    );
}

export default DetailsSchool;
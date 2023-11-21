
import { useEffect, useState } from "react";
import { colors } from "../../color";
import OpenedSchoolChart from "./Chart";
import "./adminpaneldashboard.css"
import HomeIcon from '@mui/icons-material/Home';

import male from "../../assets/images/person.png"
import female from "../../assets/images/femaleperson.png"
import PaymentChart from "./PaymentChart";
import PaymentChartWeekly from "./PaymentChartWeekly";
import Box from "./Box";
import { useDispatch, useSelector } from "react-redux";
import { getGains, getGainsThisYear, getGainsWeekly, getKresCount, getOpenedKresThisYear, getOwnerCount, getStudentCount, getTeacherCount } from "../../../redux/features/dashboardStates/dashboardStates";
function AdminPanelDashboard() {

    const boughtornek = [{
        name: "Joee",
        surname: "Doee",
        gender: "Male",
        phone: "05455555555",
        email: "deneme@deneme.com",
        id: 1
    }, {
        name: "Joee",
        surname: "Doee",
        gender: "Male",
        phone: "05455555555",
        email: "deneme@deneme.com",
        id: 2
    }, {
        name: "Joee",
        surname: "Doee",
        gender: "Female",
        phone: "05455555555",
        email: "deneme@deneme.com",
        id: 3
    }, {
        name: "Joee",
        surname: "Doee",
        gender: "Male",
        phone: "05455555555",
        email: "deneme@deneme.com",
        id: 4
    }, {
        name: "Joee",
        surname: "Doee",
        gender: "Male",
        phone: "05455555555",
        email: "deneme@deneme.com",
        id: 5
    }, {
        name: "Joee",
        surname: "Doee",
        gender: "Female",
        phone: "05455555555",
        email: "deneme@deneme.com",
        id: 6
    }]



    const [lastBoughtKresApp, setLastBoughtKresApp] = useState(boughtornek)



    const { gains ,gainsLoading,gainsweekly , gainsthisyear , openedKresThisYear , ownerCount , teacherCount, studentCount,kresCount} = useSelector(state => state.gains)
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getGains()) 
       dispatch(getGainsWeekly()) 
       dispatch(getGainsThisYear()) 
       dispatch(getOpenedKresThisYear())
       dispatch(getStudentCount())
       dispatch(getOwnerCount())
       dispatch(getTeacherCount())
       dispatch(getKresCount())
    },[])





    return (
        <div className="h-100">

            <div className="pt-3 mx-3" style={{ color: colors.text.focus }}>
                <HomeIcon></HomeIcon> <span style={{ color: "#67748e" }}>/ Anasayfa</span>

            </div>
            <div className="border-bottom mt-3 mx-3">
                <div className="d-flex justify-content-around w-100">
                    <Box bg={["#02B2AF", "#3A416F"]} text={"Son 7 Günün Hasılatı"} info={gains.last7days || 0}></Box>
                    <Box bg={["#02B2AF", "#3A416F"]} text={"Son 30 Günün Hasılatı"} info={gains.last30days || 0}></Box>
                    <Box bg={["#02B2AF", "#3A416F"]} text={"Son 6 Ayın Hasılatı"} info={gains.last6months || 0}></Box>
                    <Box bg={["#02B2AF", "#3A416F"]} text={"Toplam Hasılat"} info={gains.totalGained || 0}></Box>


                </div>
                <div className="mt-1 d-flex justify-content-around">
                    <div>

                        <h5 className="text-center afff" style={{ color: colors.text.focus }}>Bu Hafta</h5>
                        <PaymentChartWeekly paymentArray={gainsweekly}></PaymentChartWeekly>
                    </div>
                    <div className="z-1">

                        <h5 className="text-center afff" style={{ color: colors.text.focus }}>Bu Yıl</h5>
                        <PaymentChart className="z-1" paymentArray={gainsthisyear}></PaymentChart>
                    </div>
                </div>


            </div>

            <div className="pt-5 border-bottom pb-5">
                <div className="d-flex justify-content-center mx-3">
                    <div className="d-flex flex-column">
                        <h5 style={{ color: colors.text.focus }} className="text-center afff">Açılan Kreşler</h5>
                        <OpenedSchoolChart openedSchoolArray={openedKresThisYear}></OpenedSchoolChart>
                    </div>
                    <div className="leftalt w-50 d-flex flex-column align-items-center">
                        <div>
                            <h5 className="pt-2" style={{ color: colors.text.main, backgroundColor: "white" }}>Hizmeti Son Satın Alanlar</h5>
                        </div>
                        <div className="w-100 m-2 overflow-hidden" style={{ background: "white" }}>

                            {lastBoughtKresApp.map((element) => {
                                return (
                                    <div key={element.id} className="kisi mb-3 d-flex justify-content-between align-items-center px-4">
                                        <div>
                                            <img src={element.gender == "Male" ? male : female} style={{ height: "36px" }} alt="" />
                                        </div>
                                        <div>
                                            {element.name} {element.surname}
                                        </div>
                                        <div>
                                            {element.phone}
                                        </div>
                                        <div>
                                            {element.email}
                                        </div>

                                    </div>
                                )
                            })}


                        </div>

                    </div>

                </div>

            </div>
            <div className="mt-5 mx-3 mb-5">
                <div className="d-flex justify-content-around w-100">
                    <Box bg={["#2BD9FE", "#3AAED8"]} text={"Toplam Kreş Sahibi Sayısı"} info={ownerCount}></Box>
                    <Box bg={["#2BD9FE", "#3AAED8"]} text={"Toplam Kreş Sayısı"} info={kresCount}></Box>
                    <Box bg={["#2BD9FE", "#3AAED8"]} text={"Toplam Öğretmen Sayısı"} info={teacherCount}></Box>
                    <Box bg={["#2BD9FE", "#3AAED8"]} text={"Toplam Öğrenci Sayısı"} info={studentCount}></Box>


                </div>

            </div>

        </div>
    );
}

export default AdminPanelDashboard;
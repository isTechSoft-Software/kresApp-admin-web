
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
import { getGains, getGainsThisYear, getGainsWeekly, getLastBought, getOpenedKresThisYear, getStatistic } from "../../../redux/features/dashboardStates/dashboardStates";
import LastBought from "./LastBought";
function AdminPanelDashboard() {






    const { gains,gainsweekly,lastBoughtLoading, lastBought , gainsthisyear , openedKresThisYear , ownerCount , teacherCount, studentCount,kresCount} = useSelector(state => state.gains)
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getGains())
       dispatch(getLastBought());
       dispatch(getGainsWeekly()) 
       dispatch(getGainsThisYear()) 
       dispatch(getOpenedKresThisYear())
       dispatch(getStatistic())
    },[])





    return (
        <div className="h-100">

            <div className="pt-3 mx-3" style={{ color: colors.text.focus }}>
                <HomeIcon></HomeIcon> <span style={{ color: "#67748e" }}>/ Anasayfa</span>

            </div>
            <div className="border-bottom mt-3 mx-3">
                <div className="d-flex flex-wrap justify-content-around w-100">
                    <Box bg={["#02B2AF", "#3A416F"]} text={"Son 7 Günün Hasılatı"} info={gains.last7days || 0}></Box>
                    <Box bg={["#02B2AF", "#3A416F"]} text={"Son 30 Günün Hasılatı"} info={gains.last30days || 0}></Box>
                    <Box bg={["#02B2AF", "#3A416F"]} text={"Son 6 Ayın Hasılatı"} info={gains.last6months || 0}></Box>
                    <Box bg={["#02B2AF", "#3A416F"]} text={"Toplam Hasılat"} info={gains.totalGained || 0}></Box>


                </div>
                <div className="mt-1 d-flex justify-content-around flex-wrap">
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
                <div className="d-flex justify-content-center mx-3 flex-wrap">
                    <div className="d-flex flex-column">
                        <h5 style={{ color: colors.text.focus }} className="text-center afff">Açılan Kreşler</h5>
                        <OpenedSchoolChart openedSchoolArray={openedKresThisYear}></OpenedSchoolChart>
                    </div>
                    <div className="leftalt col-lg-6 col-11 d-flex flex-column align-items-center">
                        <div>
                            <h5 className="pt-2" style={{ color: colors.text.main, backgroundColor: "white" }}>Son Açılan Kreşler</h5>
                        </div>
                        <div className="w-100 m-2 overflow-hidden" style={{ background: "white" }}>
                            {lastBoughtLoading && <div className="d-flex justify-content-center mt-2"><div style={{fontSize: "10px"}} className="spinner-border "></div></div>}
                            {lastBought?.map((element) => {
                                return (
                                    <LastBought key={element._id} element={element}></LastBought>
                                )
                            })}


                        </div>

                    </div>

                </div>

            </div>
            <div className="mt-5 mx-3 mb-5">
                <div className="d-flex justify-content-around w-100 flex-wrap">
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
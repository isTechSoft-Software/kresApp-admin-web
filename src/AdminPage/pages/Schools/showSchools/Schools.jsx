import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../color";
import EachSchool from "./EachSchool";
import "./school.css"
import { useEffect, useState } from "react";
import { getSchools } from "../../../../redux/features/schools/schools";
import SchoolIcon from '@mui/icons-material/School';
import InfiniteScroll from "react-infinite-scroll-component";
function Schools() {

    const { schools, schoolsLoading ,page , hasMore} = useSelector(state => state.schools)
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSchools(page));
    }, [])


    const next = () => {
        dispatch(getSchools(page));
    };


    return (
        <div className="p-4">

            <div className=" mx-3 mb-3" style={{ color: colors.text.focus }}>
                <div>
                    <SchoolIcon></SchoolIcon>
                    <span style={{ color: "#67748e" }}> / Kreşler</span>
                </div>

            </div>
            <div className="listschools bgw">
                <div className="overff">
                    <h3 style={{ color: "#3A416F" }} className="text-center fw-bold bgw m-4">Kreşler</h3>
                    <div className="d-flex mt-3 border-bottom mblistsc" style={{ color: colors.text.focus }} >
                        <span className="col-lg-1 col-1 sp fw-bold"></span>
                        <span style={{ color: "#3A416F" }} className="col-lg-1 col-1 sp fw-bold">#ID</span>
                        <span style={{ color: "#3A416F" }} className="col-lg-3 col-3 sp fw-bold">İsim</span>
                        <span style={{ color: "#3A416F" }} className="col-lg-2 col-2 sp fw-bold">Sahip</span>
                        <span style={{ color: "#3A416F" }} className="col-lg-2 col-2 sp fw-bold">İletişim</span>
                        <span style={{ color: "#3A416F" }} className="col-lg-3 col-3 sp fw-bold">Oluşturulma Tarihi</span>


                    </div>

                </div>
                <div className="overfff px-3 ">
                    <InfiniteScroll

                        dataLength={schools.length} //This is important field to render the next data
                        next={next}
                        hasMore={hasMore}
                        loader={<div className="d-flex justify-content-center mt-3 mb-2"><div  style={{ fontSize: "10px" }} className="spinner-border text-center"></div></div>}
                        // min-height="100vh" // Corrected the syntax here
                        height="65vh" // Corrected the syntax here
                        endMessage={<div></div>}>


                        {
                            schools.map((element) => {
                                return (<EachSchool school={element.School} owner={element.Owner} key={element.id}></EachSchool>)
                            })}

                    </InfiniteScroll>




                </div>
            </div>

        </div>

    );
}
export default Schools;
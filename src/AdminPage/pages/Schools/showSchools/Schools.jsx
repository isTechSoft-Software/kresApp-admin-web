import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../color";
import EachSchool from "./EachSchool";
import "./school.css"
import { useEffect } from "react";
import { getSchools } from "../../../../redux/features/schools/schools";

function Schools() {

    const { schools ,schoolsLoading} = useSelector(state => state.schools)
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getSchools()); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    console.log(schools);
    console.log(schoolsLoading);

    return (
        <div className="p-4">

            <div className="listschools bgw">
                <h3 style={{ color: colors.text.focus }} className="text-center fw-bold bgw">Kreşler</h3>
                <div className="d-flex mt-3 border-bottom" style={{ color: colors.text.focus }} >
                    <span className="col-1 sp fw-bold">#ID</span>
                    <span className="col-1 sp fw-bold">Paket</span>
                    <span className="col-3 sp fw-bold">İsim</span>
                    <span className="col-3 sp fw-bold">Sahip</span>
                    <span className="col-3 sp fw-bold">Oluşturulma Tarihi</span>
                    <span className="col-1"></span>


                </div>
                <div className="overff">
                    
                    {!(schools.length > 0) ? <div className="w-100 d-flex justify-content-center"><div  className="spinner-border text-center" role="status"></div></div> : 

                    schools.map((element) => {
                        return (<EachSchool school={element.School} owner={element.Owner} key={element.id}></EachSchool>)
                    })}



                </div>
            </div>

        </div>

    );
}
export default Schools;
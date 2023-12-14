
import { Dialog } from "@mui/material";
import { colors } from "../../color";
import "./classes.css"

// import EditNoteIcon from '@mui/icons-material/EditNote';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Profile from "../Profile/Profile";
import { useEffect, useState } from "react";
function StudentsMenu({ open, handleClose ,id }) {

    const [students, setstudents] = useState([]);
    
    const ip = import.meta.env.VITE_IP;
    const fetchStudents = async () => {
        try {
            const res = await fetch(ip + "admin/list-students/" + id)
            const data = await res.json()
            setstudents(data.data)

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchStudents()
    }, []);


    return (
        <Dialog open={open} onClose={handleClose}>
            <div className="p-5" style={{ backgroundColor: colors.background.default }}>
                <div className="my-2 mb-4">
                    <h2 className="text-center">Öğrenciler</h2>
                </div>
                <div className="studentlist p-2 " style={{ width: "32rem", height: "25em" }}>
                <div className="row border-bottom">
                    <div className="col-3 text-center">TCNO</div>
                    <div className="col-6 text-center">İsim</div>
                    <div className="col-3 text-center">Veli Telefon</div>
                </div>
                    {students?.length > 0 ? 
                        students?.map((element) => {
                            return (

                                <div className="listttt d-flex justify-content-around p-2 mt-2 align-items-center" key={element.id}>
                                    <div>
                                        {element?.studentTCNo}
                                    </div>
                                    <div>
                                        {element?.studentName} {element?.studentSurname}
                                    </div>
                                    <div>
                                        {element?.StudentParents?.length > 0 &&  element?.StudentParents[0]?.parent?.parentUsername}
                                    </div>
                                </div>)
                        })
                        
                        :

                        <div>Sınıfta Öğrenci Yok</div>
                    }

                </div>
            </div>

        </Dialog>

    );
}

export default StudentsMenu;
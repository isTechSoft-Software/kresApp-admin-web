import { Dialog } from "@mui/material";
import { colors } from "../../color";
import "./classes.css"
import male from "../../assets/images/person.png"
import female from "../../assets/images/femaleperson.png"

import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Profile from "../Profile/Profile";
import { useState } from "react";
function StudentsMenu({ open, handleClose, students }) {

    const [sentToProfileID , setSentToProfileID] = useState();

    const [open2, setOpen2] = useState(false);

    const handleClickOpen2 = (a) => {
        setSentToProfileID(a)
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <div className="p-5" style={{ backgroundColor: colors.background.default }}>
                <div className="my-2 mb-4">
                    <h2 className="text-center">Öğrenciler</h2>
                </div>
                <div className="studentlist p-2 " style={{ width: "32rem", height: "25em" }}>
                    {!(students?.length > 0) ? <div>Sınıfta öğrenci yok</div> :

                        students.map((element) => {
                            return (

                                <div className="listttt d-flex justify-content-around p-1 mt-2 align-items-center" key={element.id}>
                                    <div>
                                        <img src={element.gender == "Male" ? male : female} style={{ height: "36px" }} alt="" />
                                    </div>
                                    <div>
                                        {element.name}
                                    </div>
                                    <div>
                                        {element.phone}
                                    </div>
                                    <div className="d-flex justify-content-around">
                                        <div className="cursorpointer" onClick={() => {handleClickOpen2(element.id)} } style={{ color: colors.info.main }}>
                                            <EditNoteIcon></EditNoteIcon>
                                        </div>
                                        <div className="cursorpointer" style={{ color: colors.error.main }}>
                                            <DeleteForeverIcon></DeleteForeverIcon>
                                        </div>
                                    </div>

                                </div>)
                        })



                    }

                </div>
            </div>
            
            <Profile open={open2} onClose={handleClose2} role={"ogrenci"} id={sentToProfileID}></Profile>
        </Dialog>

    );
}

export default StudentsMenu;
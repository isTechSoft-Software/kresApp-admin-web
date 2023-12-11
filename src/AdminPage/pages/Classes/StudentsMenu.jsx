
import { Dialog } from "@mui/material";
import { colors } from "../../color";
import "./classes.css"

// import EditNoteIcon from '@mui/icons-material/EditNote';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Profile from "../Profile/Profile";
import { useState } from "react";
function StudentsMenu({ open, handleClose, students }) {

    const [sentToProfileID, setSentToProfileID] = useState();

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



                    }

                </div>
            </div>

            <Profile open={open2} onClose={handleClose2} role={"ogrenci"} id={sentToProfileID}></Profile>
        </Dialog>

    );
}

export default StudentsMenu;
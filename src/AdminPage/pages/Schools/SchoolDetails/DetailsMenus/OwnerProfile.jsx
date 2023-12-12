

import { useNavigate } from "react-router-dom";
import "./profile.css"
import Avatar from '@mui/material/Avatar';
// import SaveAsIcon from '@mui/icons-material/SaveAs';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Dialog, DialogContent } from "@mui/material";
import { colors } from "../../../../color";

function OwnerProfile({ open, onClose, element }) {


    const navigate = useNavigate()


    return (
        <Dialog open={open} fullWidth sx={{ minWidth: "md" }}
            maxWidth="md" onClose={onClose}>
            <DialogContent style={{ height: '600px' }}>
                <div className="h-100 ">

                    <div className="d-flex justify-content-around h-50 align-items-center p-5">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <div className="avatar" style={{ height: "150px", width: "150px" }}>

                                <Avatar className="h-100 w-100"><span style={{ fontSize: "70px" }}>{element?.OwnerSchools[0].Owner?.ownerName[0].toUpperCase()}</span></Avatar>
                            </div>
                            <span className="profilename" style={{ color: colors.text.main }}>{element?.OwnerSchools[0].Owner?.ownerName}</span>
                        </div>
                    </div>



                    <div className="h-50 d-flex justify-content-around ">

                        <div className="profilebottombox1 overflow-auto col-lg-5 col-6">
                            <h4 style={{ color: colors.text.main }} className="text-center">Genel Bilgiler</h4>
                            <div>
                                <span style={{ color: colors.text.main }} className="profilespans">İsim: </span>

                                 <span>{element?.OwnerSchools[0].Owner?.ownerName}</span> 
                            </div>
                            <div>
                                <span style={{ color: colors.text.main }} className="profilespans">Telefon: </span>

                               <span>{element?.OwnerSchools[0].Owner?.ownerUsername}</span>

                            </div>
                            <div>
                                <span style={{ color: colors.text.main }} className="profilespans">Email: </span>

                                 <span></span>

                            </div>



                        </div>

                        <div className="profilebottombox1 overflow-auto col-lg-5 col-6">
                            <h4 style={{ color: colors.text.main }} className="text-center">Özel Bilgiler</h4>


                            <div className="yonetici">
                                <span style={{ color: colors.text.main }} className="profilespans">Kreşleri: </span>
                                <span className="profilelinks" onClick={()=> {navigate("/okullar/"+element?.id); onClose()} } >{element?.schoolName} </span>

                            </div>


                        </div>


                    </div>


                </div>
            </DialogContent>

        </Dialog>
    );
}

export default OwnerProfile;
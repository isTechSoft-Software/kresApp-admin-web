
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./profile.css"
import Avatar from '@mui/material/Avatar';
import { colors } from "../../color";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Dialog, DialogContent } from "@mui/material";

function Profile({ open, onClose, role, id }) {

    // const { role, id } = useParams()


    const [editMode, setEditMode] = useState(false);

    const [user, setUser] = useState({});

    const [changed, setChanged] = useState({});

    const ip = import.meta.env.VITE_IP;
    const getUserDetails = async () => {

        const res = await fetch(ip + "getUserDetails" + role + "" + id)  //const res = await fetch(ip + "getUserDetail/"+role +"/"+ id)
        const data = await res.json();

        setUser(data.data)
        setChanged(data.data)

    }


    useEffect(() => {
        console.log("sart");
        getUserDetails();


    }, [open])

    const handleEditbutton = () => {
        setEditMode(!editMode)
    }

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { id, value } = e.target;
        setChanged((prevChanged) => ({
            ...prevChanged,
            [id]: value,
        }));


    }

    return (
        <Dialog open={open} fullWidth sx={{ minWidth: "md" }}
            maxWidth="md" onClose={onClose}>
            <DialogContent style={{ height: '600px' }}>
                <div className="h-100 p-5">

                    <div className="d-flex justify-content-around h-50 align-items-center">
                        <div className="">
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <div className="avatar" style={{ height: "150px", width: "150px" }}>

                                <Avatar className="h-100 w-100"><span style={{ fontSize: "70px" }}>{changed?.name?.charAt(0)}</span></Avatar>
                            </div>
                            <span className="profilename" style={{ color: colors.text.main }}>{changed?.name} #{changed?.id}</span>

                        </div>
                        <div>
                            <div className={changed == user ? "d-none buttonsprofile" : "d-block  buttonsprofile"} style={{ color: colors.warning.main }}>
                                <SaveAsIcon style={{ fontSize: "35px" }}></SaveAsIcon>
                            </div>
                            <div className=" buttonsprofile" onClick={handleEditbutton} style={{ color: colors.info.main }}>
                                <EditNoteIcon style={{ fontSize: "35px" }}></EditNoteIcon>
                            </div>
                            <div className=" buttonsprofile" style={{ color: colors.error.main }}>
                                <DeleteForeverIcon style={{ fontSize: "35px" }}></DeleteForeverIcon>
                            </div>
                        </div>
                        {/* {!editMode ? <span className="profilename">{changed?.name}</span> : <input className="profilename" onChange={handleChange} id="name" value={changed?.name}></input>} */}


                    </div>



                    <div className="h-50 d-flex justify-content-around mx-5">

                        <div className="profilebottombox1">
                            <h4 style={{ color: colors.text.main }} className="text-center">Genel Bilgiler</h4>
                            <div>
                                <span style={{ color: colors.text.main }} className="profilespans">İsim: </span>

                                {!editMode ? <span>{changed?.name}</span> : <input className="profileinput" style={{width: "150px"}} onChange={handleChange} id="name" value={changed?.name}></input>}
                            </div>
                            <div>
                                <span style={{ color: colors.text.main }} className="profilespans">Kullanıcı Adı: </span>

                                {!editMode ? <span>{changed?.username}</span> : <input className="profileinput" style={{width: "100px"}} onChange={handleChange} id="username" value={changed?.username}></input>}

                            </div>
                            <div>
                                <span style={{ color: colors.text.main }} className="profilespans">Telefon: </span>

                                {!editMode ? <span>{changed?.phone}</span> : <input className="profileinput" style={{width: "110px"}} maxLength={11} onChange={handleChange} id="phone" value={changed?.phone}></input>}

                            </div>
                            <div>
                                <span style={{ color: colors.text.main }} className="profilespans">Email: </span>

                                {!editMode ? <span>{changed?.email}</span> : <input className="profileinput" onChange={handleChange} id="email" value={changed?.email}></input>}

                            </div>



                        </div>

                        <div className="profilebottombox1">
                            <h4 style={{ color: colors.text.main }} className="text-center">Özel Bilgiler</h4>


                            <div className={role == "yonetici" ? "d-block": "d-none"}>
                                <span style={{ color: colors.text.main }} className="profilespans">Kreşleri: </span>
                                {changed?.kresler?.map((element) => {
                                    return (<span className="profilelinks" onClick={()=> {navigate("/okullar/"+element.School.id); onClose()} } key={element.School.id}>{element.School.schoolName} </span>)
                                })} 

                            </div>
                            <div className={role == "ogretmen" ? "d-block": "d-none"}>
                                <span style={{ color: colors.text.main }} className="profilespans">Kreşte Öğretmen: </span>
                                <span className="profilelinks" onClick={()=> { navigate("/okullar/"+changed?.kresID); onClose()} } > {changed?.kres}</span>
                                

                            </div>
                            <div className={role == "personel" ? "d-block": "d-none"}>
                                <span style={{ color: colors.text.main }} className="profilespans">Kreşte Personel: </span>
                                <span className="profilelinks" onClick={()=> { navigate("/okullar/"+changed?.kresID); onClose()} } > {changed?.kres}</span>
                                

                            </div>
                            <div className={role == "veli" ? "d-block": "d-none"}>
                                <span style={{ color: colors.text.main }} className="profilespans">Çocuğun Ebeveyni: </span>
                                <span className="profilelinks" onClick={()=> { setOpen2; onClose()} } > {changed?.childName}</span>
                                

                            </div>
                            <div className={role == "ogrenci" ? "d-block": "d-none"}>
                                <span style={{ color: colors.text.main }} className="profilespans">Kreşte Öğrenci: </span>
                                <span className="profilelinks" onClick={()=> { navigate("/okullar/"+changed?.kresID); onClose()} } > {changed?.kres}</span>
                                

                            </div>


                        </div>


                    </div>


                </div>
            </DialogContent>

        </Dialog>
    );
}

export default Profile;
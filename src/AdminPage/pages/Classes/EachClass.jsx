
import "./classes.css"

// import EditNoteIcon from '@mui/icons-material/EditNote';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import SaveIcon from '@mui/icons-material/Save';
import SchoolIcon from '@mui/icons-material/School';
import Face2Icon from '@mui/icons-material/Face2';
import { colors } from "../../color";
import StudentsMenu from "./StudentsMenu";
import { useState } from "react";
function EachClass({ element, index }) {



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const [editMode, setEditMode] = useState(false)

    // const [changed, setChanged] = useState(element);

    // const handleChange = (e) => {
    //     const { id, value } = e.target;
    //     setChanged((prevChanged) => ({
    //         ...prevChanged,
    //         [id]: value,
    //     }));


    // }



    return (
    <div className="siniflarbox cursorpointer" key={element.id}>
        <div onClick={() => handleClickOpen(element?.students)} className="siniflarboximage text-center">
            <SchoolIcon sx={{ width: "100%", height: "100%", color: colors.text.main }}></SchoolIcon>

        </div>
        <div className="siniflarboxbody text-center d-flex flex-column justify-content-around">
            <div onClick={() => handleClickOpen(index)}>

                <p className="fw-bold" style={{ color: colors.text.main }}>{element?.className} (#{element?.id})</p>
                <p><Face2Icon sx={{ color: colors.text.main }}></Face2Icon> {element?.ClassTeachers?.length > 0 && element?.ClassTeachers[0]?.Teacher?.teacherName} {element?.ClassTeachers?.length > 0 && element?.ClassTeachers[0]?.Teacher?.teacherSurname}</p>
                <div className="d-flex justify-content-center">

                    <p className="fw-bold" style={{ color: colors.text.main }}>Kapasite: </p><p> {element?.classStudentNum}</p>
                </div>
                <div className="d-flex justify-content-center">

                    <p className="fw-bold" style={{ color: colors.text.main }}>Öğrenci Sayısı: </p><p> {element?.students?.length || 0 }</p>
                </div>

            </div>


        </div>
        
        <StudentsMenu id={element?.id} open={open} handleClose={handleClose}></StudentsMenu>
    </div>);
}

export default EachClass;
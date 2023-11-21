import "./classes.css"

import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import SchoolIcon from '@mui/icons-material/School';
import Face2Icon from '@mui/icons-material/Face2';
import { useState } from "react";
import { colors } from "../../color";
function EachClass({ element, index, handleClickOpen }) {



    const [editMode, setEditMode] = useState(false)

    const [changed, setChanged] = useState(element);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setChanged((prevChanged) => ({
            ...prevChanged,
            [id]: value,
        }));


    }



    return (<div className="siniflarbox cursorpointer" key={element.id}>
        <div onClick={() => handleClickOpen(index)} className="siniflarboximage text-center">
            <SchoolIcon sx={{ width: "100%", height: "100%", color: colors.text.main }}></SchoolIcon>

        </div>
        <div className="siniflarboxbody text-center d-flex flex-column justify-content-around">
            <div onClick={() => handleClickOpen(index)}>

                <p className="fw-bold" style={{ color: colors.text.main }}>{element.name}</p>
                <p><Face2Icon sx={{ color: colors.text.main }}></Face2Icon> {element.teacherName}</p>
                <div className="d-flex justify-content-center">

                    <p className="fw-bold" style={{ color: colors.text.main }}>Kapasite: </p><p> {element.capacity}</p>
                </div>
                <div className="d-flex justify-content-center">

                    <p className="fw-bold" style={{ color: colors.text.main }}>Öğrenci Sayısı: </p><p> {element.studentCount}</p>
                </div>

            </div>
            <div className="align-self-end">

                <div className="d-flex justify-content-end mb-1">
                    <div className={(element != changed) ? "cursorpointer d-block" : "d-none cursorpointer"} style={{ color: colors.warning.main }}>
                        <SaveIcon></SaveIcon>
                    </div>
                    <div className="cursorpointer" onClick={() => setEditMode(!editMode)} style={{ color: colors.info.main }}>
                        <EditNoteIcon></EditNoteIcon>
                    </div>
                    <div className="cursorpointer" style={{ color: colors.error.main }}>
                        <DeleteForeverIcon></DeleteForeverIcon>
                    </div>
                </div>
            </div>


        </div>
    </div>);
}

export default EachClass;
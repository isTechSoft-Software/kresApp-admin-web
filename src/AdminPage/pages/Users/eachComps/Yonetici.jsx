
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import male from "../../../assets/images/person.png"
import female from "../../../assets/images/femaleperson.png"
import { colors } from '../../../color';

import "../users.css"

function Yonetici({ item , handleClickOpenProfile , setSentToProfileID ,setSentToProfileRole }) {


    const handleClick = () => {
        setSentToProfileID(item.id)
        setSentToProfileRole("yonetici")
        handleClickOpenProfile();
    }


    return (


        <div className="d-flex justify-content-around eachh m-2 ">

            <div className="text-center collar" style={{ color: colors.text.main }}>
                {item.id}
            </div>
            <div className="text-center collar" style={{ color: colors.text.main }}>
                {item.name} {item.surname}
            </div>
            <div className="text-center collar" style={{ color: colors.text.main }}>
                {item.kres}
            </div>
            <div className="text-center collar" style={{ color: colors.text.main }}>
                {item.phone}
            </div>
            <div className="text-center collar" style={{ color: colors.text.main }}>
                {item.email}
            </div>
            <div className="text-center collar" style={{ color: colors.text.main }}>
                02.03.2000
            </div>
            <div className="text-center collar d-flex justify-content-center" style={{ color: colors.text.main }}>

                <div className="cursorpointer mx-1"  onClick={handleClick} style={{ color: colors.info.main }}>
                    <EditNoteIcon></EditNoteIcon>
                </div>
                <div className="cursorpointer" style={{ color: colors.error.main }}>
                    <DeleteForeverIcon></DeleteForeverIcon>
                </div>
            </div>
        </div>
    );
}

export default Yonetici;
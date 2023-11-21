
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import male from "../../../assets/images/person.png"
import female from "../../../assets/images/femaleperson.png"
import { colors } from '../../../color';

function Herkes({item}) {
    return ( 

        
        <div className="row eachh m-2">

        <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
            <img src={item.gender == "Male" ? male : female} style={{ height: "36px" }} alt="" />
        </div>
        <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
            {item.id}
        </div>
        <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
            {item.name} {item.surname}
        </div>
        <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
            {item.phone}
        </div>
        <div className="col-3 text-center collar" style={{ color: colors.text.main }}>
            {item.email}
        </div>
        <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
            02.03.2000
        </div>
        <div className="col-1 text-center collar d-flex justify-content-center" style={{ color: colors.text.main }}>

            <div className="cursorpointer" style={{ color: colors.info.main }}>
                <EditNoteIcon></EditNoteIcon>
            </div>
            <div className="cursorpointer" style={{ color: colors.error.main }}>
                <DeleteForeverIcon></DeleteForeverIcon>
            </div>
        </div>
    </div>
     );
}

export default Herkes;
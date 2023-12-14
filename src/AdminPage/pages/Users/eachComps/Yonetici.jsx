/* eslint-disable react/prop-types */

import { colors } from '../../../color';
import PersonIcon from '@mui/icons-material/Person';
import "../users.css"

function Yonetici({ item , handleClickOpenProfile , setSentToProfile  }) {


    const handleClick = () => {
        handleClickOpenProfile(item);
    }

    const date = new Date(item.School.createdAt);
    const formattedDate = `${date.getUTCDate().toString().padStart(2, '0')}.${(date.getUTCMonth() + 1).toString().padStart(2, '0')}.${date.getUTCFullYear()}`;
    
    return (


        <div onClick={handleClick} className="cursorpointer d-flex justify-content-between  eachh m-2 ">

            <div className="col-lg-1 col-1 text-center collar" style={{ color: colors.text.main }}>
                <PersonIcon></PersonIcon>
            </div>
            <div className="col-lg-1 col-1 text-center collar" style={{ color: colors.text.main }}>
                {item.Owner.id}
            </div>
            <div className="col-lg-2 col-2 text-center collar" style={{ color: colors.text.main }}>
                {item.Owner.ownerName}
            </div>
            <div className="col-lg-2 col-2 text-center collar" style={{ color: colors.text.main }}>
                {item.School.schoolName}
            </div>
            <div className="col-lg-2 col-2 text-center collar" style={{ color: colors.text.main }}>
                {item.Owner.ownerUsername}
            </div>
            <div className="col-lg-2 col-2 text-center collar" style={{ color: colors.text.main }}>
                {item.Owner.ownerMail}
            </div>
            <div className="col-lg-2 col-2 text-center collar" style={{ color: colors.text.main }}>
                {formattedDate}
            </div>
        </div>
    );
}

export default Yonetici;
import { colors } from "../../../color";
import "./school.css"
import PropTypes from 'prop-types'; 
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from "react-router-dom";
function EachSchool({ owner, school }) {
    const createDate = new Date(school?.createdAt);
    const navigate = useNavigate();
    console.log(school);
    const handleClick = () => {
        const data = {
            school,
            owner
        }

        navigate("/okullar/" +data.school.id, {
            state: {
              data
            }
          });
    }

    return (

        <div className="d-flex mt-3 eachscool cursorpointer " onClick={handleClick} style={{ color: colors.text.focus }} >
            <span className="col-lg-1 col-1  sp"><SchoolIcon style={{color: colors.text.main}}></SchoolIcon></span>
            <span className="col-lg-1 col-1  sp">{school.id}</span>
            <span className="col-lg-3 col-3 sp">{school.schoolName}</span>
            <span className="col-lg-2 col-2  sp">{owner.ownerName}</span>
            <span className="col-lg-2 col-2 sp">{owner.ownerUsername}</span>
            <span className="col-lg-3 col-3 sp">{createDate.getDate().toString().padStart(2, '0')}/
                {(createDate.getMonth() + 1).toString().padStart(2, '0')}/
                {createDate.getFullYear()}</span>
        </div>

    );
}
EachSchool.propTypes = {
    owner: PropTypes.shape({
        ownerName: PropTypes.string,
        // Add more validations for owner props if needed
    }),
    school: PropTypes.shape({
        schoolName: PropTypes.string,
        packetID: PropTypes.number,
        createdAt: PropTypes.string, // You can change the type as needed
        // Add more validations for school props if needed
    }),
};
export default EachSchool;
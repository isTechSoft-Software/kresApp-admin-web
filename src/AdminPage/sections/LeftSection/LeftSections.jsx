
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { colors } from "../../color"
import StarIcon from '@mui/icons-material/Star';
import "./leftsections.css"
import QuickAccess from "./QuickAccess";
import { useNavigate } from 'react-router-dom';

function LeftSection() {
    const navigate = useNavigate()
    return (
        <div className="h-100 leftsectionsticky" style={{ backgroundColor: colors.background.default }}>
            <div className="h-100">
                <div>
                    <p style={{color: colors.text.focus}} className="pt-3 text-center cursorpointer" onClick={() =>navigate("/anasayfa")}><ChildCareIcon></ChildCareIcon>Kreş App Admin Panel</p>

                </div>
                <div className="accessdiv">
                    <div className="accessdi">
                        <p style={{ color: colors.text.main }} className="access"><StarIcon className="access"></StarIcon>Hızlı Erişim</p>
                    </div>
                    <QuickAccess></QuickAccess>
                </div>
            </div>

        </div>
    );
}

export default LeftSection;
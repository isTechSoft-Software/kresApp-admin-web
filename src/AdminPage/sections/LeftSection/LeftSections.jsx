
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { colors } from "../../color"
import "./leftsections.css"
import QuickAccess from "./QuickAccess";
import { useNavigate } from 'react-router-dom';
import WrappedMenuItems from './mobileList/MobileList';

function LeftSection() {
    const navigate = useNavigate()

    return (
        <div className="leftsectionsticky" style={{ backgroundColor: colors.background.default }}>
            <div className='w-100'>
                {window.innerWidth < 600 &&
                    <div className='w-100 m-2 d-flex align-items-center'>
                        <div className=''>
                            <WrappedMenuItems></WrappedMenuItems>

                        </div>
                        <div className='m-auto justify-content-center'>

                            <p style={{ color: colors.text.focus }} className="pt-3 d-inline text-center cursorpointer" onClick={() => navigate("/anasayfa")}><ChildCareIcon></ChildCareIcon>Kreş App Admin Panel</p>
                        </div>

                    </div>
                }
                {window.innerWidth > 600 &&
                    <div className='w-100'>
                        <p style={{ color: colors.text.focus }} className="pt-3 text-center cursorpointer" onClick={() => navigate("/anasayfa")}><ChildCareIcon></ChildCareIcon>Kreş App Admin Panel</p>
                        

                    </div>
                }


                {window.innerWidth > 600 ?
                    <div className="accessdiv">

                        {/* <div className="accessdi">
                            <p style={{ color: colors.text.main }} className="access"><StarIcon className="access"></StarIcon>Hızlı Erişim</p>
                        </div> */}
                        <QuickAccess></QuickAccess>

                    </div>


                    :
                    ""
                    // <div className='accessdiv'>

                    //     <div className="accordion-title" onClick={() => setIsActive(!isActive)}>

                    //         <div className="d-flex align-items-center">
                    //             <p style={{ color: colors.text.main }} className="access"><StarIcon className="access"></StarIcon>Hızlı Erişim</p>

                    //         </div>
                    //         <div className="d-flex align-items-center">{isActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</div>
                    //     </div>

                    //     <div className={`accordion-content ${isActive ? 'open' : ''}`}>

                    //         <QuickAccess></QuickAccess>
                    //     </div>
                    // </div>

                }


            </div>

        </div>
    );
}

export default LeftSection;
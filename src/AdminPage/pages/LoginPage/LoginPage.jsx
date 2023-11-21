
import "./loginpage.css"
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { useState } from "react";
import { colors } from "../../color";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/features/login/loginSlice";
function LoginPage() {

    const navigate = useNavigate()

    const [inputtype , setinputtype] = useState("password")
    const onclickhandle = () => {
        if(inputtype == "password"){
            setinputtype("text")
        }else{
            setinputtype("password")

        }
    }
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(setLogin())
        navigate("/anasayfa")
    }

    return (
        <div className="minh100 d-flex justify-content-center align-items-center">
            <div className="w-75 h-75  d-flex logingeneldiv">

                <div className="w-50 d-flex flex-column justify-content-center align-items-center">

                    <h4 className="text-center"><ChildCareIcon style={{fontSize: "50px", color: colors.text.focus}} className="textcolor"></ChildCareIcon></h4>
                    <h4 className="text-center " style={{color: colors.text.focus}}>Kreş APP Admin Giriş</h4>
                    <div className="inputdiv">
                        <label htmlFor="email" className="w-100 lablell d-flex align-items-center justify-content-between"><PersonIcon style={{color: colors.text.focus}}></PersonIcon>
                            <input type="text" placeholder="Email" id="email" className="inputlogin" /></label>

                    </div>
                    <div className="inputdiv">

                        <label htmlFor="pass" className="w-100 lablell d-flex align-items-center justify-content-between">
                            <LockIcon style={{color: colors.text.focus}}></LockIcon>
                            <input type={inputtype} placeholder="Şifre" id="pass" className="inputlogin" />

                            {!(inputtype == "password")?<VisibilityOffIcon  style={{color: colors.text.focus}} className="cursorpointer" onClick={onclickhandle}></VisibilityOffIcon>  : <VisibilityIcon  style={{color: colors.text.focus}} className="cursorpointer" onClick={onclickhandle}></VisibilityIcon>}
                            
                        </label>
                    </div>
                    <button className="buttonlogin" onClick={handleLogin}>Giriş Yap</button>

                </div>
                <div className="imagediv w-75 d-flex justify-content-center align-items-center">
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
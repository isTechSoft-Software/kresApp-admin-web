
import "./leftsections.css"
import AddHomeIcon from '@mui/icons-material/AddHome';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MessageIcon from '@mui/icons-material/Message';
import EmailIcon from '@mui/icons-material/Email';
import { colors } from "../../color"
import React, { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SchoolIcon from '@mui/icons-material/School';
import ManageUser from "./LeftSectionsMenus/ManageUser";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PeopleIcon from '@mui/icons-material/People';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useNavigate } from "react-router-dom";
function QuickAccess() {

    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };



    const navigate = useNavigate();

    return (
        <div>
            <ul className="ullleft">
                <li className="d-flex cursorpointer" onClick={() => navigate("/anasayfa")}>
                    <div className="d-flex align-items-center asdasd">
                        <div className="d-flex p-2 iconss" style={{ backgroundColor: "white" }}>
                            <HomeIcon style={{ color: "#3A416F" }}></HomeIcon>
                        </div>
                        <p style={{ color: colors.text.main }}>Ana sayfa</p>
                    </div>
                </li>
                <li className="d-flex cursorpointer justify-content-between" onClick={() => navigate("/sonsatinalanlar")}>
                    <div className="d-flex align-items-center asdasd">
                        <div className="d-flex p-2 iconss" style={{ backgroundColor: "white" }}>
                            <ShoppingCartIcon style={{ color: "#3A416F" }}></ShoppingCartIcon>
                        </div>
                        <div className="d-flex justify-content-between" style={{ color: colors.text.main }}>
                            <span>Son Satın Alanlar</span>
                        </div>

                    </div>
                    <div className="d-flex align-items-center ">

                        <span className="d-flex align-items-center badgee">4</span>
                    </div>
                </li>

                <li>

                    <div className={isActive ? "d-flex flex-column opened" : "d-flex flex-column"}>
                        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>

                            <div className="d-flex align-items-center">
                                <div className="d-flex p-2 iconss" style={{ backgroundColor: "white" }}>
                                    <SchoolIcon style={{ color: "#3A416F" }}></SchoolIcon>
                                </div>

                                <p style={{ color: colors.text.main }}>Kreş Ayarları</p>

                            </div>
                            <div className="d-flex align-items-center">{isActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</div>
                        </div>
                        <div className={`accordion-content ${isActive ? 'open' : ''}`}>

                            <div className="d-flex align-items-center marginleft-1 cursorpointer" onClick={() => navigate("/okullar/olustur")}>
                                <div className="d-flex p-1 iconss" style={{ backgroundColor: "white" }}>
                                    <AddHomeIcon className="alticons" style={{ color: "#3A416F" }}></AddHomeIcon>
                                </div>
                                <p style={{ color: colors.text.main }}>Kreş Oluştur</p>
                            </div>
                            <div className="d-flex align-items-center marginleft-1 pb-1 cursorpointer" style={{ background: "white" }} onClick={() => navigate("/okullar")}>
                                <div className="d-flex p-1 iconss" style={{ backgroundColor: "white" }} >
                                    <HomeIcon className="alticons" style={{ color: "#3A416F" }}></HomeIcon>
                                </div>
                                <p style={{ color: colors.text.main }}>Kreşleri göster</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>

                    <div className={isActive2 ? "d-flex flex-column opened" : "d-flex flex-column"}>
                        <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>

                            <div className="d-flex align-items-center">
                                <div className="d-flex p-2 iconss" style={{ backgroundColor: "white" }}>
                                    <ManageAccountsIcon style={{ color: "#3A416F" }}></ManageAccountsIcon>
                                </div>

                                <p style={{ color: colors.text.main }}>Kullanıcılar</p>

                            </div>
                            <div className="d-flex align-items-center">{isActive2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</div>
                        </div>
                        <div className={`accordion-content ${isActive2 ? 'open' : ''}`}>

                            <div className="d-flex align-items-center marginleft-1 cursorpointer" onClick={() => navigate("/kullanicilar")}>
                                <div className="d-flex p-1 iconss" style={{ backgroundColor: "white" }} >
                                    <PeopleIcon className="alticons" style={{ color: "#3A416F" }}></PeopleIcon>
                                </div>
                                <p style={{ color: colors.text.main }}>Kullanıcılar</p>
                            </div>
                            <div className="d-flex align-items-center marginleft-1 mb-1  cursorpointer" onClick={handleClickOpen2}>
                                <div className="d-flex p-1 iconss" style={{ backgroundColor: "white" }}>
                                    <PersonSearchIcon className="alticons" style={{ color: "#3A416F" }}></PersonSearchIcon>
                                </div>
                                <p style={{ color: colors.text.main }}>Kullanıcı Ara</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>

                    <div className={isActive3 ? "d-flex flex-column opened" : "d-flex flex-column"}>
                        <div className="accordion-title" onClick={() => setIsActive3(!isActive3)}>

                            <div className="d-flex align-items-center">
                                <div className="d-flex p-2 iconss" style={{ backgroundColor: "white" }}>
                                    <svg style={{ fill: "#3A416F", height: "24px" }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" /></svg>

                                </div>

                                <p style={{ color: colors.text.main }}>Paketler</p>

                            </div>
                            <div className="d-flex align-items-center">{isActive3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</div>
                        </div>
                        <div className={`accordion-content ${isActive3 ? 'open' : ''}`}>

                            <div className="d-flex align-items-center marginleft-1 cursorpointer" onClick={() => navigate("/paketler")}>
                                <div className="d-flex p-1 iconss" style={{ backgroundColor: "white" }}>
                                    <svg style={{ fill: "#3A416F", height: "20px" }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" /></svg>

                                </div>
                                <p style={{ color: colors.text.main }}>Paketleri Göster</p>
                            </div>
                            <div className="d-flex align-items-center marginleft-1 mb-1 cursorpointer" onClick={() => navigate("/paketler/olustur")}>
                                <div className="d-flex p-1 iconss" style={{ backgroundColor: "white" }}>
                                    <AddBoxIcon className="alticons" style={{ color: "#3A416F" }}></AddBoxIcon>
                                </div>
                                <p style={{ color: colors.text.main }}>Paket Oluştur</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>

                    <div className={isActive4 ? "d-flex flex-column opened" : "d-flex flex-column"}>
                        <div className="accordion-title" onClick={() => setIsActive4(!isActive4)}>

                            <div className="d-flex align-items-center">
                                <div className="d-flex p-2 iconss" style={{ backgroundColor: "white" }}>
                                    <NotificationsIcon style={{ color: "#3A416F" }}></NotificationsIcon>
                                </div>

                                <p style={{ color: colors.text.main }}>Bildirimler</p>

                            </div>
                            <div className="d-flex align-items-center">{isActive4 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</div>
                        </div>
                        <div className={`accordion-content ${isActive4 ? 'open' : ''}`}>

                            <div className="d-flex align-items-center marginleft-1 cursorpointer" onClick={() => navigate("/duyuru/sms")}>
                                <div className="d-flex p-1 iconss" style={{ backgroundColor: "white" }}>

                                    <MessageIcon style={{ color: "#3A416F" }}></MessageIcon>
                                </div>
                                <p style={{ color: colors.text.main }}>SMS Gönder</p>
                            </div>
                            <div className="d-flex align-items-center marginleft-1 cursorpointer" onClick={() => navigate("/duyuru/bildirim")}>
                                <div className="d-flex p-1 iconss" style={{ backgroundColor: "white" }}>
                                    <NotificationsIcon style={{ color: "#3A416F" }}></NotificationsIcon>
                                </div>
                                <p style={{ color: colors.text.main }}>Bildirim Gönder</p>
                            </div>
                            <div className="d-flex align-items-center marginleft-1 mb-1 cursorpointer" onClick={() => navigate("/duyuru/mail")}>
                                <div className="d-flex p-1 iconss" style={{ backgroundColor: "white" }}>
                                    <EmailIcon style={{ color: "#3A416F" }}></EmailIcon>
                                </div>
                                <p style={{ color: colors.text.main }}>Email Gönder</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ManageUser handleClose={handleClose2} open={open2}></ManageUser>
        </div>
    );
}

export default QuickAccess;
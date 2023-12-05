import { useEffect, useState } from "react";
import "./users.css"
import SearchIcon from '@mui/icons-material/Search';

import { colors } from "../../color";
import Yonetici from "./eachComps/Yonetici";
import Ogretmen from "./eachComps/Ogretmen";
import Personel from "./eachComps/Personel";
import Veli from "./eachComps/Veli";
import PersonIcon from '@mui/icons-material/Person';
import Ogrenci from "./eachComps/Ogrenci";
import Herkes from "./eachComps/Herkes";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getManagers, getParents, getPersonels, getStudents, getTeachers } from "../../../redux/features/users/users";
import Profile from "../Profile/Profile";
function Users() {

    const [sentToProfileID, setSentToProfileID] = useState();
    const [sentToProfileRole, setSentToProfileRole] = useState();

    const [openProfile, setOpenProfile] = useState(false);

    const handleClickOpenProfile = () => {
        setOpenProfile(true);
    };

    const handleCloseProfile = () => {
        setOpenProfile(false);
    };




    const location = useLocation();

    // get userId
    let searching = location.state?.searching;
    const [selectedButton, setSelectedButton] = useState(searching ? "Herkes" : 'Yöneticiler');

    const [searchValue, setSearchValue] = useState(searching || ''); // Arama değeri
    const handleButtonClick = (buttonValue) => {
        setSelectedButton(buttonValue);
    };

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value); // Arama değerini güncelle
    };

    const dispatch = useDispatch()

    const { personels, managers, teachers, parents, students, all } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getManagers())
        dispatch(getStudents())
        dispatch(getParents())
        dispatch(getPersonels())
        dispatch(getTeachers())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(managers);
    console.log(all);

    return (
        <div>
            
            <div className="pt-3 mx-3" style={{ color: colors.text.focus }}>
                <div>
                    <PersonIcon></PersonIcon>
                    <span style={{ color: "#67748e" }}> / Kullanıcılar</span>
                </div>

            </div>
        <div className="users d-flex justify-content-center align-items-center overflow-auto">
            <div className="col-11 userlists overflow-auto">
                <div className="row h-100">
                    <div className="col-4 col-lg-2 p-3 border-end h-100">
                        <div className="mt-5">
                            <div>
                                <button
                                    className={"tabbutton " + (selectedButton === 'Yöneticiler' ? 'basilibutton' : '')}
                                    onClick={() => handleButtonClick('Yöneticiler')}
                                >
                                    Yöneticiler
                                </button>

                            </div>
                            <div>
                                <button
                                    className={"tabbutton " + (selectedButton === 'Öğretmenler' ? 'basilibutton' : '')}
                                    onClick={() => handleButtonClick('Öğretmenler')}
                                >
                                    Öğretmenler
                                </button>

                            </div>
                            <div>
                                <button
                                    className={"tabbutton " + (selectedButton === 'Personeller' ? 'basilibutton' : '')}
                                    onClick={() => handleButtonClick('Personeller')}
                                >
                                    Personeller
                                </button>

                            </div>
                            <div>
                                <button
                                    className={"tabbutton " + (selectedButton === 'Veliler' ? 'basilibutton' : '')}
                                    onClick={() => handleButtonClick('Veliler')}
                                >
                                    Veliler
                                </button>

                            </div>
                            <div>
                                <button
                                    className={"tabbutton " + (selectedButton === 'Öğrenciler' ? 'basilibutton' : '')}
                                    onClick={() => handleButtonClick('Öğrenciler')}
                                >
                                    Öğrenciler
                                </button>

                            </div>
                            <div>
                                <button
                                    className={"tabbutton " + (selectedButton === 'Herkes' ? 'basilibutton' : '')}
                                    onClick={() => handleButtonClick('Herkes')}
                                >
                                    Herkes
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="ustlistt col-lg-10 col-8 overflow-auto">
                        <div className=" p-3">
                            <div className="aramadiv col-lg-3 col-8 d-flex align-items-center">
                                <SearchIcon></SearchIcon>
                                <input type="text" onChange={handleSearchChange} value={searchValue} placeholder="Arama" className="col-12 aramausers" />
                            </div>


                        </div>
                        <div className={selectedButton == "Yöneticiler" ? "d-block listtt" : "d-none"}>
                            <div className="listust d-flex justify-content-around border-bottom">
                                <span className="mbbild text-center collar" style={{ color: colors.text.main }}>
                                    ID
                                </span>
                                <span className="mbbild text-center collar" style={{ color: colors.text.main }}>
                                    İsim
                                </span>
                                <div className="mbbild text-center collar" style={{ color: colors.text.main }}>
                                    Sahip
                                </div>
                                <div className="mbbild text-center collar" style={{ color: colors.text.main }}>
                                    Telefon
                                </div>
                                <div className="mbbild text-center collar" style={{ color: colors.text.main }}>
                                    Mail
                                </div>
                                <div className="mbbild text-center collar" style={{ color: colors.text.main }}>
                                    Oluşturulma
                                </div>
                                <div className="text-center collar" style={{ color: colors.text.main }}>
                                    Edit
                                </div>
                            </div>

                            <div className="listt">
                                {!(managers.length) > 0 ? <div className="d-flex justify-content-center"><div className="spinner-border"></div></div> :
                                    managers.filter((element) => (element.name.toLowerCase() + " " + element.name.toLowerCase()).includes(searchValue.toLowerCase())) // İsim içinde arama yap
                                        .map((element) => (
                                            <Yonetici handleClickOpenProfile={handleClickOpenProfile} setSentToProfileID={setSentToProfileID} setSentToProfileRole={setSentToProfileRole} item={element} key={element.id}></Yonetici>
                                        ))}
                            </div>


                        </div>
                        <div className={selectedButton == "Öğretmenler" ? "d-block" : "d-none"}>
                            <div className="listust border-bottom row">

                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    ID
                                </div>
                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    İsim
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Çalıştığı Kreş
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Telefon
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Mail
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Oluşturulma
                                </div>
                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    Edit
                                </div>
                            </div>
                            <div className="listt">
                                {!(teachers.length) > 0 ? <div className="d-flex justify-content-center"><div className="spinner-border"></div></div> :
                                    teachers.filter((element) => (element.name.toLowerCase() + " " + element.name.toLowerCase()).includes(searchValue.toLowerCase())) // İsim içinde arama yap
                                        .map((element) => (
                                            <Ogretmen handleClickOpenProfile={handleClickOpenProfile} setSentToProfileID={setSentToProfileID} setSentToProfileRole={setSentToProfileRole} item={element} key={element.id}></Ogretmen>
                                        ))}
                            </div>

                        </div>
                        <div className={selectedButton == "Personeller" ? "d-block" : "d-none"}>
                            <div className="listust border-bottom row">

                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    ID
                                </div>
                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    İsim
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Çalıştığı Kreş
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Telefon
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Mail
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Oluşturulma
                                </div>
                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    Edit
                                </div>
                            </div>
                            <div className="listt">
                                {!(personels.length) > 0 ? <div className="d-flex justify-content-center"><div className="spinner-border"></div></div> :
                                    personels.filter((element) => (element.name.toLowerCase() + " " + element.name.toLowerCase()).includes(searchValue.toLowerCase())) // İsim içinde arama yap
                                        .map((element) => (
                                            <Personel handleClickOpenProfile={handleClickOpenProfile} setSentToProfileID={setSentToProfileID} setSentToProfileRole={setSentToProfileRole} item={element} key={element.id}></Personel>
                                        ))}
                            </div>

                        </div>
                        <div className={selectedButton == "Veliler" ? "d-block" : "d-none"}>
                            <div className="listust border-bottom row">

                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    ID
                                </div>
                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    İsim
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Çocuğu
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Telefon
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Mail
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Oluşturulma
                                </div>
                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    Edit
                                </div>
                            </div>
                            <div className="listt">
                                {!(parents.length) > 0 ? <div className="d-flex justify-content-center"><div className="spinner-border"></div></div> :
                                    parents.filter((element) => (element.name.toLowerCase() + " " + element.name.toLowerCase()).includes(searchValue.toLowerCase())) // İsim içinde arama yap
                                        .map((element) => (
                                            <Veli handleClickOpenProfile={handleClickOpenProfile} setSentToProfileID={setSentToProfileID} setSentToProfileRole={setSentToProfileRole} item={element} key={element.id}></Veli>
                                        ))}
                            </div>

                        </div>
                        <div className={selectedButton == "Öğrenciler" ? "d-block" : "d-none"}>
                            <div className="listust border-bottom row">

                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    ID
                                </div>
                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    İsim
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Bulunduğu Kreş
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Telefon
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Mail
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Oluşturulma
                                </div>
                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    Edit
                                </div>
                            </div>
                            <div className="listt">
                                {!(students.length) > 0 ? <div className="d-flex justify-content-center"><div className="spinner-border"></div></div> :
                                    students.filter((element) => (element.name.toLowerCase() + " " + element.name.toLowerCase()).includes(searchValue.toLowerCase())) // İsim içinde arama yap
                                        .map((element) => (
                                            <Ogrenci handleClickOpenProfile={handleClickOpenProfile} setSentToProfileID={setSentToProfileID} setSentToProfileRole={setSentToProfileRole} item={element} key={element.id}></Ogrenci>
                                        ))}
                            </div>

                        </div>
                        <div className={selectedButton == "Herkes" ? "d-block" : "d-none"}>
                            <div className="listust border-bottom row">

                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    ID
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    İsim
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Telefon
                                </div>
                                <div className="col-3 text-center collar" style={{ color: colors.text.main }}>
                                    Mail
                                </div>
                                <div className="col-2 text-center collar" style={{ color: colors.text.main }}>
                                    Oluşturulma
                                </div>
                                <div className="col-1 text-center collar" style={{ color: colors.text.main }}>
                                    Edit
                                </div>
                            </div>
                            <div className="listt">
                                {!(all.length) > 0 ? <div className="d-flex justify-content-center"><div className="spinner-border"></div></div> :
                                    all.filter((element) => (element.name.toLowerCase() + " " + element.name.toLowerCase()).includes(searchValue.toLowerCase())) // İsim içinde arama yap
                                        .map((element) => (
                                            <Herkes item={element} key={element.name + element.id + element.phone + element.email}></Herkes>
                                        ))}
                            </div>

                        </div>
                    </div>

                </div>



            </div>


            <Profile open={openProfile} onClose={handleCloseProfile} id={sentToProfileID} role={sentToProfileRole}></Profile>
        </div></div>
    );
}

export default Users;
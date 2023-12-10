import { useEffect, useState } from "react";
import "./users.css"
import SearchIcon from '@mui/icons-material/Search';

import { colors } from "../../color";
import Yonetici from "./eachComps/Yonetici";
import PersonIcon from '@mui/icons-material/Person';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getManagers } from "../../../redux/features/users/users";
import Profile from "../Profile/Profile";

import InfiniteScroll from "react-infinite-scroll-component";
function Users() {

    const { managers, usersLoading ,page , hasMore} = useSelector(state => state.users)
    const [sentToProfile, setSentToProfile] = useState();

    const [openProfile, setOpenProfile] = useState(false);

    const handleClickOpenProfile = (element) => {
        setOpenProfile(true);
        setSentToProfile(element);
    };

    const handleCloseProfile = () => {
        setOpenProfile(false);
    };


    const location = useLocation();

    // get userId
    let searching = location.state?.searching;

    const [searchValue, setSearchValue] = useState(searching || ''); // Arama değeri

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value); // Arama değerini güncelle
    };

    const dispatch = useDispatch()


    
    const next = () => {
        dispatch(getManagers(page));
    };

    useEffect(() => {
        dispatch(getManagers(page))

    }, [])

    console.log(managers.Owner);
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

                        <div className="ustlistt col-lg-12 col-12 overflow-auto">
                            <div className=" p-3">
                                <div className="aramadiv col-lg-3 col-8 d-flex align-items-center">
                                    <SearchIcon></SearchIcon>
                                    <input type="text" onChange={handleSearchChange} value={searchValue} placeholder="Arama" className="col-12 aramausers" />
                                </div>


                            </div>
                            <div className="listtt" >
                                <div className="listust d-flex justify-content-between border-bottom">
                                    <span className="col-lg-1 col-1 text-center collar" style={{ color: "#3A416F" }}>

                                    </span>
                                    <span className="col-lg-1  col-1 text-center collar fw-bold" style={{ color: "#3A416F" }}>
                                        ID
                                    </span>
                                    <span className="col-lg-2  col-2 text-center collar fw-bold" style={{ color: "#3A416F" }}>
                                        İsim
                                    </span>
                                    <div className="col-lg-2 col-2 text-center collar fw-bold" style={{ color: "#3A416F" }}>
                                        Sahip
                                    </div>
                                    <div className="col-lg-2 col-2 text-center collar fw-bold" style={{ color: "#3A416F" }}>
                                        Telefon
                                    </div>
                                    <div className="col-lg-2 col-2 text-center collar fw-bold" style={{ color: "#3A416F" }}>
                                        Mail
                                    </div>
                                    <div className="col-lg-2 col-2 text-center collar fw-bold" style={{ color: "#3A416F" }}>
                                        Oluşturulma
                                    </div>
                                </div>

                                <div className="listt">

                                    <InfiniteScroll

                                        dataLength={managers.length} //This is important field to render the next data
                                        next={next}
                                        hasMore={hasMore}
                                        loader={<div className="d-flex justify-content-center mt-3 mb-2"><div style={{ fontSize: "10px" }} className="spinner-border text-center"></div></div>}
                                        // min-height="100vh" // Corrected the syntax here
                                        height="65vh" // Corrected the syntax here
                                        endMessage={<div></div>}>

                                        {!(managers.length) > 0 ? <div className="d-flex justify-content-center"><div className="spinner-border"></div></div> :
                                            managers.filter((element) => (element?.Owner?.ownerName?.toLowerCase() + " " + element?.Owner?.ownerName?.toLowerCase()).includes(searchValue.toLowerCase())) // İsim içinde arama yap
                                                .map((element) => (
                                                    <Yonetici handleClickOpenProfile={() => handleClickOpenProfile(element)} setSentToProfile={setSentToProfile} item={element} key={element.Owner.id}></Yonetici>
                                                ))}

                                    </InfiniteScroll>
                                </div>


                            </div>
                        </div>

                    </div>



                </div>


                <Profile open={openProfile} user={sentToProfile} onClose={handleCloseProfile}></Profile>
            </div></div>
    );
}

export default Users;
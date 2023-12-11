/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./notif.css"
import { colors } from "../../color";
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
function Notif() {


    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files;

        // Dosyaları bir dizi içinde sakla
        setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    };
    const [notification, setnotification] = useState();


    const ip = import.meta.env.VITE_IP;

    const handleChange = (e) => {
        const { id, value } = e.target;
        setnotification((prevChanged) => ({
            ...prevChanged,
            [id]: value,
        }));


    }



    const handleCreate = async () => {
        let formData = new FormData();

        formData.append("title", notification.title);
        formData.append("description", notification.description);

        selectedFiles.forEach((element, index) => {
            formData.append(`documents[${index}]`, element);
        });
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        await fetch(ip + "admin/create-announcement-to-owners", {
            method: "POST",
            body: formData
        });




    }








    const [notifications, setNotifications] = useState();







    const deleteHandle = async (id) => {
        await fetch(ip + "admin/delete-announcement/" + id, {
            method: "DELETE"
        });

        getNotifications();
    }

    const getNotifications = async () => {

        const res = await fetch(ip + "getnotifs");
        const data = await res.json();

        setNotifications(data);

    }


    useEffect(() => {
        getNotifications();
    }, [])



    return (
        <div className="h-100 col-lg-12 col-12">
            <div className="col-lg-12 col-12 height60 border-bottom p-4">

                <h3 className="text-center" style={{ color: colors.text.main }}><NotificationAddIcon></NotificationAddIcon> Duyuru Yayınla</h3>

                <div className="d-flex justify-content-center mt-3">

                    <input onChange={handleChange} className="textarea pb-3" id="title" value={notification?.id} placeholder="Başlık" />
                </div>


                <div className="mt-3 mbdis d-flex justify-content-center flex-column align-items-center">
                    <div className="col-lg-5">

                        <textarea onChange={handleChange} className="textarea" id="description" value={notification?.description} cols={window.innerWidth > 600 ? "55" : "30"} rows="8" placeholder="Mesajınız"></textarea>
                    </div>




                    <div className="d-flex justify-content-center overflow-auto mt-3 col-lg-5 col-11  fileselect">

                        {selectedFiles.length > 0 && selectedFiles.map((element) => {

                            return (<div className="m-2" key={element.lastModified + element.size}>
                                <label htmlFor="file-upload" className="custom-file-upload">
                                    <div className="d-flex cursorpointer flex-column align-items-center justify-content-center filechose">

                                        <CloudUploadIcon />
                                        <div className="aaaaaaa">

                                            {element.name}
                                        </div>
                                    </div>
                                </label>
                                <input id="file-upload" onChange={handleFileChange} type="file" />

                            </div>)

                        })}

                        <div className="m-2">
                            <label htmlFor="file-upload" className="custom-file-upload">
                                <div className="d-flex cursorpointer flex-column align-items-center justify-content-center filechose">

                                    <CloudUploadIcon />
                                    <span>

                                        Dosya Seç
                                    </span>
                                </div>
                            </label>
                            <input id="file-upload" onChange={handleFileChange} type="file" />

                        </div>

                    </div>
                </div>

                {/* <div className="d-flex mt-3">
                    <div className="d-flex flex-column align-items-center mx-1">
                        <label className="switch">
                            <input checked type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <span style={{ color: colors.text.main }}>
                            Yöneticiler
                        </span>

                    </div>
                    <div className="d-flex flex-column align-items-center mx-1">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <span style={{ color: colors.text.main }}>
                            Veliler
                        </span>

                    </div>
                    <div className="d-flex flex-column align-items-center mx-1">
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <span style={{ color: colors.text.main }}>
                            Öğrenciler
                        </span>

                    </div>
                </div> */}
                <div className="d-flex justify-content-center">

                    <button onClick={handleCreate} className="mt-2 px-3 py-1 btngonder" style={{ color: colors.white.main }}>Gönder</button>
                </div>

            </div>
            <div className="asd height40">

                <div className="w-100 h-100 p-4">
                    <div className="w-100 h-100 last ">
                        <div className="xxx">

                            <h5 className="text-center pt-2" style={{ color: colors.text.focus }}>Son Gönderilenler</h5>
                            <div className="d-flex border-bottom mx-3">
                                <div className="col-lg-2 col-2 fw-bold text-center" style={{ color: colors.text.focus }}>
                                    Başlık
                                </div>
                                <div className="col-lg-6 col-6 fw-bold text-center" style={{ color: colors.text.focus }}>
                                    İçerik
                                </div>
                                {/* <div className="col-lg-3 col-3 text-center" style={{ color: colors.text.focus }}>
                                Gönderen
                            </div> */}
                                {/* <div className="col-lg-2 col-3 text-center" style={{ color: colors.text.focus }}>
                                Kime
                            </div> */}
                                <div className="col-lg-1 col-1 fw-bold text-center" style={{ color: colors.text.focus }}>
                                    Dosyalar
                                </div>
                                <div className="col-lg-2 col-2 fw-bold text-center" style={{ color: colors.text.focus }}>
                                    Tarih
                                </div>
                                <div className="col-lg-1 col-1 fw-bold text-center" style={{ color: colors.text.focus }}>

                                </div>
                            </div>

                        </div>
                        <div className="xxxx ">
                            {
                                !(notifications?.data?.length > 0) ? <div className="d-flex justify-content-center"><div className="spinner-border"></div></div> : 
                            
                            
                            notifications?.data?.map((element) => {
                                const date = new Date(element.createdAt)

                                var saat = String(date.getHours()).padStart(2, '0'); // Saat
                                var dakika = String(date.getMinutes()).padStart(2, '0'); // Dakika
                                var gun = String(date.getDate()).padStart(2, '0'); // Gün
                                var ay = String(date.getMonth() + 1).padStart(2, '0'); // Ay (0-based olduğu için +1 eklenir)
                                var yil = date.getFullYear();

                                var formatliTarih = saat + ":" + dakika + " " + gun + "/" + ay + "/" + yil;
                                return (

                                    <div key={element.id} className="d-flex eachsended m-3">
                                        <div className="col-lg-2 col-2 text-center" style={{ color: colors.text.focus }}>
                                            {element.title}
                                        </div>
                                        <div className="col-lg-6 col-6 text-center" style={{ color: colors.text.focus }}>
                                            {element.description}
                                        </div>
                                        <div className="col-lg-1 col-1 text-center" style={{ color: colors.text.focus }}>
                                            {element.documents?.length || "0"}
                                        </div>
                                        {/* <div className="col-lg-3 col-3 mbbild text-center" style={{ color: colors.text.focus }}>
                                        onrgnll
                                    </div> */}
                                        {/* <div className="col-lg-2 mbbild text-center" style={{ color: colors.text.focus }}>
                                        Yöneticiler,Veliler,Öğrenciler
                                    </div> */}
                                        <div className="col-lg-2 col-2 text-center" style={{ color: colors.text.focus }}>
                                            {formatliTarih}
                                        </div>
                                        <div className="col-lg-1 col-1 text-center" style={{ color: colors.text.focus }}>
                                            <div className="cursorpointer d-inline" onClick={() => deleteHandle(element.id)}>
                                                <DeleteIcon style={{ color: colors.error.main }} />
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}

                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Notif;
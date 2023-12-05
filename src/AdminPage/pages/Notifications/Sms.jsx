import { useState } from "react";
import "./notif.css"
import { colors } from "../../color";
import MessageIcon from '@mui/icons-material/Message';

function Sms() {

    const [textValue, settextValue] = useState("");

    const handleChange = (e) => {
        settextValue(e.target.value);
    }


    return (
        <div className="minh100">
            <div className="h-65 border-bottom d-flex justify-content-center align-items-center flex-column">
                <h3 className="mb-2" style={{ color: colors.text.main }}><MessageIcon></MessageIcon> Sms Gönder</h3>
                <textarea onChange={handleChange} className="textarea col-lg-7 col-10" value={textValue} cols="80" rows="8" placeholder="Mesajınız"></textarea>

                <div className="d-flex mt-3">
                    <div className="d-flex flex-column align-items-center mx-1">
                        <label className="switch">
                            <input type="checkbox" />
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
                </div>

                <button className="mt-2 px-3 py-1 btngonder" style={{ color: colors.white.main }}>Gönder</button>

            </div>
            <div className="h-35">

                <div className="w-100 h-100 p-4">
                    <div className="w-100 h-100 last">
                        <h5 className="text-center pt-2" style={{ color: colors.text.focus }}>Son Gönderilenler</h5>
                        <div className="d-flex border-bottom mx-3">
                            <div className="col-lg-7 col-3 text-center" style={{ color: colors.text.focus }}>
                                İçerik
                            </div>
                            <div className="col-lg-2 col-3 text-center" style={{ color: colors.text.focus }}>
                                Gönderen
                            </div>
                            <div className="col-lg-2 col-3 text-center" style={{ color: colors.text.focus }}>
                                Kime
                            </div>
                            <div className="col-lg-1 col-3 text-center" style={{ color: colors.text.focus }}>
                                Tarih
                            </div>
                        </div>
                        <div className="x">

                            <div className="d-flex eachsended m-3">
                                <div className="col-lg-7 mbbild text-center" style={{ color: colors.text.focus }}>
                                    Merhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben OnurMerhabalar Ben Onur
                                </div>
                                <div className="col-lg-2 mbbild text-center" style={{ color: colors.text.focus }}>
                                    onrgnll
                                </div>
                                <div className="col-lg-2 mbbild text-center" style={{ color: colors.text.focus }}>
                                    Yöneticiler,Veliler,Öğrenciler
                                </div>
                                <div className="col-lg-1 text-center" style={{ color: colors.text.focus }}>
                                    06.11.2023
                                </div>
                            </div>
                            <div className="d-flex eachsended m-3">
                                <div className="col-7 text-center" style={{ color: colors.text.focus }}>
                                    Merhabalar Ben Onur
                                </div>
                                <div className="col-2 text-center" style={{ color: colors.text.focus }}>
                                    onrgnll
                                </div>
                                <div className="col-2 text-center" style={{ color: colors.text.focus }}>
                                    Yöneticiler,Veliler,Öğrenciler
                                </div>
                                <div className="col-1 text-center" style={{ color: colors.text.focus }}>
                                    06.11.2023
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Sms;
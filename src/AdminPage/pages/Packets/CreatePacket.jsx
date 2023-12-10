
import { useState } from "react";
import { colors } from "../../color";
import Inventory2Icon from '@mui/icons-material/Inventory2';
function CreatePacket() {


    const [createLoading, setcreateLoading] = useState();

    const ip = import.meta.env.VITE_IP;


    
    const [creatingPacket, setcreatingPacket] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setcreatingPacket((prevChanged) => ({
            ...prevChanged,
            [id]: value,
        }));

    }


    const createButtonHandle = async () => {




        try {
            setcreateLoading(true)
            creatingPacket.packetPrice = parseFloat(creatingPacket.packetPrice)
            await fetch(ip + "admin/create-packet", {
                method: "POST",
                body: JSON.stringify(creatingPacket),

                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
        } catch (error) {
            console.log(error);
        }
        finally {
            setcreateLoading(false)
        }

    }




    return (
        <div>
            <div className="pt-3 mx-3" style={{ color: colors.text.focus }}>
                <div>
                    <svg fill="#67748e" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" /></svg>
                    <span style={{ color: "#67748e" }}> / Paket Oluştur</span>
                </div>

            </div>
            <div className="createpacketdiv col-12 d-flex justify-content-center align-items-center">

                <div className="altcrt col-11 col-lg-7 d-flex justify-content-center align-items-center flex-column">
                    <h2 className="mb-4" style={{ color: colors.text.focus }}><Inventory2Icon style={{ fontSize: "32px" }}></Inventory2Icon> Paket Oluştur</h2>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <input type="text" value={creatingPacket?.packetName} onChange={handleChange} id="packetName" placeholder="Paket İsmi" className="inpp" />
                        <input type="text" value={creatingPacket?.range} onChange={handleChange} id="range" placeholder="Kişi Aralığı örn:1-30" className="inpp" />

                        <input type="number" value={creatingPacket?.packetPrice} onChange={handleChange} id="packetPrice" className="inpp" placeholder="Fiyatı" />
                        <textarea type="text" value={creatingPacket?.packetDescription} onChange={handleChange} id="packetDescription" className="inpp col-lg-12 col-11" placeholder="Açıklama" rows="5" cols="30" />
                        <button onClick={createButtonHandle} className="btncreate">{createLoading? <div className="spinner-border"></div> : "Oluştur"}</button>
                    </div>
                </div>
            </div>
        </div>);
}

export default CreatePacket;
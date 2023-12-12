import { colors } from "../../color";

import packet from "../../assets/images/hediye.jpg"
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
function EachPacket({ packet, getPackets, notify, notify2 }) {

    const [editMode, setEditMode] = useState(false)

    const [changed, setChanged] = useState(packet);

    const ip = import.meta.env.VITE_IP;
    const handleChange = (e) => {
        const { id, value } = e.target;
        setChanged((prevChanged) => ({
            ...prevChanged,
            [id]: value,
        }));

    }


    const handleSaveButton = async (id) => {

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changed)
        };


        await fetch(ip + "admin/update-packet/" + id, options).then(() => {

            notify();
        });

    }


    const handleDeleteButton = async (id) => {
        await fetch(ip + "admin/delete-packet/" + id, {
            method: "DELETE"
        }).then(() => {
            notify2();
        });

        getPackets();

    }


    return (

        <div className="eachpacket m-4">


            <div className="packetimg d-flex justify-content-center align-items-center border-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" height="80%" fill="" viewBox="0 0 512 512">

                    <defs>
                        <linearGradient id="packet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: colors.info.main, stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: colors.error.main, stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>

                    <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" fill="url(#packet-gradient)" />
                </svg>
            </div>



            <div className="packetbody d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-center">

                    {editMode ? <input className="packetinputchange" value={changed?.packetName} onChange={handleChange} id="packetName"></input> : <h5 style={{ color: colors.text.focus }} className="text-center mt-2">{changed?.packetName}</h5>}
                </div>
                <div className="px-2 aciklama aciklamaa">
                    <span className="fw-bold">

                        Açıklama:
                    </span>
                    {editMode ? <textarea className="changedtextarea" value={changed?.packetDescription} onChange={handleChange} id="packetDescription" cols="28" rows="3"></textarea> : <span className="spanaciklama"> {changed?.packetDescription}</span>}

                </div>
                <div className="px-2">

                    <span className="fw-bold">

                        Fiyat:
                    </span>
                    {editMode ? <input style={{ width: "30%" }} className="packetinputchange" value={changed?.packetPrice} onChange={handleChange} id="packetPrice"></input> : <span className="">{changed?.packetPrice} TL</span>}

                </div>
                <div className="px-2">

                    <span className="fw-bold">

                        Kişi Sayısı:
                    </span>
                    {editMode ? <input style={{ width: "30%" }} className="packetinputchange" value={changed?.range} onChange={handleChange} id="range"></input> : <span className="">{changed?.range}</span>}

                </div>
                <div className="d-flex justify-content-between px-4 mb-1">
                    <div className="d-flex">
                        <div onClick={() => handleSaveButton(packet.id)} className={(packet != changed) ? "cursorpointer d-block mx-2" : "d-none cursorpointer"} style={{ color: colors.warning.main }}>
                            <SaveIcon></SaveIcon>
                        </div>
                        <div className="cursorpointer" onClick={() => setEditMode(!editMode)} style={{ color: colors.info.main }}>
                            <EditNoteIcon></EditNoteIcon>
                        </div>

                    </div>
                    <div onClick={() => handleDeleteButton(packet.id)} className="cursorpointer" style={{ color: colors.error.main }}>
                        <DeleteForeverIcon></DeleteForeverIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EachPacket;
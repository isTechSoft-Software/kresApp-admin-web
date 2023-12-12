import { useEffect, useState } from "react";
import EachPacket from "./EachPacket";
import "./packet.css"
import { colors } from "../../color";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Packet() {

    const [packets, setPackets] = useState();
    const [packetsLoading, setPacketsLoading] = useState(true);
    const ip = import.meta.env.VITE_IP;

    const getPackets = async () => {
        try {
            const res = await fetch(ip + "admin/list-packets")
            const data = await res.json();
            if (data.success == 1) {

                setPacketsLoading(false)
            }

            setPackets(data.data[0])

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        getPackets();
    }, [])

    const notify2 = () => toast.success('Paket Başarı ile Silindi', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notify = () => toast.success('Paket Başarı ile kaydedildi', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return (
        <div>
            <div className="pt-3 mx-3" style={{ color: colors.text.focus }}>
                <div>
                    <svg fill="#67748e" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" /></svg>
                    <span style={{ color: "#67748e" }}> / Paketler</span>
                </div>

            </div>
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center genel flex-wrap">
                    {packetsLoading && <div className="d-flex justify-content-center mt-2"><div style={{ fontSize: "10px" }} className="spinner-border "></div></div>}
                    {packets?.length > 0 && packets.map((packet) => {
                        return (<EachPacket notify2={notify2} notify={notify} getPackets={getPackets} key={packet.id} packet={packet}></EachPacket>);
                    })}



                </div>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>);
}

export default Packet;
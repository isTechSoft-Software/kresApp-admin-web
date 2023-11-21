import { useEffect, useState } from "react";
import EachPacket from "./EachPacket";
import "./packet.css"
function Packet() {

    const [packets, setPackets] = useState()
    const ip = import.meta.env.VITE_IP;

    const getPackets = async () => {

        const res = await fetch(ip + "getPackets") 
        const data = await res.json();

        setPackets(data.data)

    }


    useEffect(() => {
       getPackets(); 
    },[])

console.log(packets);
    return (

        <div className="h-100 w-100 d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center genel flex-wrap">
                {packets?.length > 0 && packets.map((packet) => {
                    return (<EachPacket key={packet.id} packet={packet}></EachPacket>);
                })}

                

            </div>
        </div>);
}

export default Packet;

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { colors } from '../../color';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import "./lbnotification.css"
import { useEffect, useState } from 'react';
function LastBoughtNotificationsPage() {

    const [lastBoughtNotReaded, setlastBoughtNotReaded] = useState();
    const [lastBoughtReaded, setlastBoughtReaded] = useState();


    const ip = import.meta.env.VITE_IP;

    const getLastBoughts = async () => {
        try {
            const res = await fetch(ip + "lastBought")
            const data = await res.json();
            setlastBoughtReaded(data.data.filter(item => item.readed === true));
            setlastBoughtNotReaded(data.data.filter(item => item.readed === false));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLastBoughts();
    }, [])


    return (
        <div>

            <div className="pt-3 mx-3" style={{ color: colors.text.focus }}>
                <div>
                    <ShoppingCartIcon style={{ color: "#67748e" }}></ShoppingCartIcon>
                    <span style={{ color: "#67748e" }}> / Son Satın Alınan Hizmetler</span>
                </div>

            </div>


            <div className="lbdiv ">
                <div className='mb-4'>

                    {lastBoughtNotReaded?.length > 0 && <div className='border-bottom gggg'>
                        <InfoIcon style={{ color: "#3A416F" }}></InfoIcon> <span style={{ color: colors.text.main }}>Satın Alınanlar</span>
                    </div>}
                    <div className='overflow-auto notreadeddiv'>
                        {lastBoughtNotReaded && lastBoughtNotReaded.map((element) => {

                            let date = new Date(element.date)
                            return (
                                <div className='d-flex justify-content-between notiflistt border' key={element._id}>
                                    <div>
                                        {element.name} {element.surname}
                                    </div>
                                    <div>
                                        {element.email}
                                    </div>
                                    <div>
                                        {element.kres}
                                    </div>
                                    <div>
                                        {element.packet}
                                    </div>
                                    <div>
                                        {String(date.getHours()).padStart(2, '0')}:{String(date.getMinutes()).padStart(2, '0')} {String(date.getDate()).padStart(2, '0')}/{String(date.getMonth()).padStart(2, '0')}/{date.getFullYear()}

                                    </div>

                                </div>

                            )
                        })}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default LastBoughtNotificationsPage;
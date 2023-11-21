
import { colors } from "../../color";
import Inventory2Icon from '@mui/icons-material/Inventory2';
function CreatePacket() {
    return (
        <div className="createschooldiv d-flex justify-content-center align-items-center">
            <div className="altcrt d-flex justify-content-center align-items-center flex-column">
                <h2 className="mb-4" style={{ color: colors.text.focus }}><Inventory2Icon style={{ fontSize: "32px" }}></Inventory2Icon> Paket Oluştur</h2>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <input type="text" placeholder="Paket İsmi" className="inpp" />
                    <input type="text" placeholder="Kişi Aralığı örn:1-30" className="inpp" />

                    <input type="number" className="inpp" placeholder="Fiyatı" />
                    <textarea type="text" className="inpp" placeholder="Açıklama" rows="5" cols="30" />
                    <button className="btncreate">Oluştur</button>
                </div>
            </div>
        </div>);
}

export default CreatePacket;
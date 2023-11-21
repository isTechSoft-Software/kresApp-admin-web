import "./createschool.css"
import ChildCareIcon from '@mui/icons-material/ChildCare';
import { colors } from "../../../color";
function CreateSchool() {
    return (
        <div className="createschooldiv d-flex justify-content-center align-items-center">
            <div className="altcrt d-flex justify-content-center align-items-center flex-column">
                <h2 className="mb-4" style={{color: colors.text.focus}}><ChildCareIcon style={{fontSize: "32px"}}></ChildCareIcon> Kreş Oluştur</h2>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <input type="text" placeholder="Kreş Adı" className="inpp" />
                    <input type="text" className="inpp" placeholder="Sahip İsmi" />
                    <input type="text" className="inpp" placeholder="Sahip Telefon Numarası"/>
                    
                    <select name="kisi" id="kisi" className='inpp'>
                        <option value="1-30">Başlangıç Paketi (1-30)</option>
                        <option value="30-200">.... Paketi (30-230)</option>
                        <option value="200-600">.... Paketi (200-500)</option>
                        <option value="300-500">.... Paketi (500-1000)</option>
                    </select>
                    <input type="text" className="inpp" placeholder="Payment ID"/>
                    <button className="btncreate">Oluştur</button>
                </div>
            </div>
        </div>
    );
}

export default CreateSchool;
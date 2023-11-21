
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import { colors } from '../../../color';
import SearchIcon from '@mui/icons-material/Search';
import "./menucss.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function ManageUser({ handleClose, open }) {
    const navigate = useNavigate()

    const [value , setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
    }


    const handleclick = () => {
        navigate("/kullanicilar", {state: {searching: value}})
        handleClose();
    }
    return (
        
        <Dialog open={open} onClose={handleClose}>
            <div className='p-3'>
                <div className='mb-3'>

                    <h5 style={{ color: colors.text.focus }}>Kullanıcı Ara</h5>
                </div>
                <div className='mb-3'>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        placeholder="İsim"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={value}
                        onChange={handleChange}
                    />

                </div>
                <div className='d-flex justify-content-end'>

                    <button className='buttsearch' onClick={handleclick}><SearchIcon></SearchIcon>Ara</button>
                </div>
            </div>
        </Dialog>
    );
}

ManageUser.propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool
};
export default ManageUser;
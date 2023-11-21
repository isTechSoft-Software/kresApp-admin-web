
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { colors } from '../../../../color';
import "./ownerprofile.css"

import Avatar from '@mui/material/Avatar';
function ShowOwnerMenu({ handleClose, open, owner }) {

    console.log(owner);
    return (

            <div className='p-5 d-flex'>
                <div className='d-flex'>
                    <Avatar sx={{ height: "128px", width: "128px" }}>{owner.ownerName[0]}</Avatar>
                    <div className=''>
                        <p>

                            İsim: {owner.ownerName}
                        </p>
                        <p>

                            Username: {owner.ownerUsername}
                        </p>

                    </div>
                </div>

            </div>
    );
}

ShowOwnerMenu.propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool
};
export default ShowOwnerMenu;
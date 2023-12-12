import * as React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import AddHomeIcon from '@mui/icons-material/AddHome';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PeopleIcon from '@mui/icons-material/People';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { colors } from '../../../color';
import { useNavigate } from 'react-router-dom';
import ManageUser from '../LeftSectionsMenus/ManageUser';

function MenuSection({ children, label }) {
  return (
    <MenuSectionRoot role="group">
      <MenuSectionLabel>{label}</MenuSectionLabel>
      <ul>{children}</ul>
    </MenuSectionRoot>
  );
}

MenuSection.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};


export default function WrappedMenuItems() {

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const navigate = useNavigate();


  const createHandleMenuClick = (menuItem) => {

    return () => {
      if (menuItem == "kullaniciara") {
        handleClickOpen2();
      } else {

        navigate(menuItem);
      }
    };

  };

  return (
    <Dropdown >
      <MenuButton><svg fill='#3A416F' xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg></MenuButton>
      <Menu slots={{ listbox: Listbox }}>
        <MenuItem onClick={createHandleMenuClick('Anasayfa')}><HomeIcon style={{ color: "#3A416F" }}></HomeIcon> Anasayfa</MenuItem>
        <MenuItem onClick={createHandleMenuClick('satinalinanlar')}><ShoppingCartIcon style={{ color: "#3A416F" }}></ShoppingCartIcon>Satın Alınanlar</MenuItem>

        <MenuSection label="Kreş Ayarları">
          <MenuItem onClick={createHandleMenuClick('okullar/olustur')}>
            <AddHomeIcon style={{ color: "#3A416F" }}></AddHomeIcon>Kreş Oluştur
          </MenuItem>
          <MenuItem onClick={createHandleMenuClick('okullar')}><HomeIcon style={{ color: "#3A416F" }}></HomeIcon>Kreşleri Göster</MenuItem>
        </MenuSection>
        <MenuSection label="Kullanıcılar">
          <MenuItem onClick={createHandleMenuClick('kullanicilar')}><PeopleIcon style={{ color: "#3A416F" }}></PeopleIcon> Kullanıcılar</MenuItem>
          <MenuItem onClick={createHandleMenuClick('kullaniciara')}><PersonSearchIcon style={{ color: "#3A416F" }}></PersonSearchIcon> Kullanıcı Ara</MenuItem>
        </MenuSection>
        <MenuSection label="Paketler">
          <MenuItem onClick={createHandleMenuClick('paketler')}>
            <svg style={{ fill: "#3A416F", height: "20px" }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" /></svg>

            Paketleri Göster
          </MenuItem>
          <MenuItem onClick={createHandleMenuClick('paketler/olustur')}><AddBoxIcon style={{ color: "#3A416F" }}></AddBoxIcon> Paket Oluştur</MenuItem>
        </MenuSection>
        <MenuSection label="Bildirimler">
          <MenuItem onClick={createHandleMenuClick('duyuru/bildirim')}><NotificationsIcon style={{ color: "#3A416F" }}></NotificationsIcon> Duyuru Gönder</MenuItem>
        </MenuSection>
      </Menu>

      <ManageUser handleClose={handleClose2} open={open2}></ManageUser>
    </Dropdown>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Listbox = styled('ul')(
  ({ theme }) => `
  box-sizing: border-box;
  padding: 6px !important;
  margin: 12px 0;
  min-width: 250px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${colors.text.main};
  box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
    };
  z-index: 9999;
  `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 6px !important;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-weight: 600;
  line-height: 1.5;
  padding: 8px 16px !important;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
`,
);

const MenuSectionRoot = styled('li')`
  list-style: none;

  & > ul {
    padding-left: 1em;
  }
`;

const MenuSectionLabel = styled('span')`
  display: block;
  padding: 10px 0 5px 10px;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: ${grey[600]};
`;
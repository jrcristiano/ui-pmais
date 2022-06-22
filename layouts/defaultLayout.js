// components
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import PmaisLogo from './../public/pmais-logo.png';
import Link from 'next/link';

// icons
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Apps from '@mui/icons-material/Apps';
import School from '@mui/icons-material/School';
import Apartament from '@mui/icons-material/Apartment';
import Groups from '@mui/icons-material/Groups';
import AdminPanelSettings from '@mui/icons-material/AdminPanelSettings';
import TouchApp from '@mui/icons-material/TouchApp';
import ReceiptLong from '@mui/icons-material/ReceiptLong';

// hooks
import { useRouter } from 'next/router'

const drawerWidth = 250;

function DefaultLayout(props) {
  const router = useRouter();

  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pathEqualsLink = (link) => router.asPath === link;

  const drawer = (
    <div style={{ borderTop: '8px solid #FAA41F' }}>
      <Toolbar>
        <Image src={PmaisLogo} />
        <Typography
          style={{
            fontWeight: 'bold',
            marginLeft: '10px'
          }}
          color="#323232"
          variant='h6'>
            Pmais
        </Typography>
      </Toolbar>
      <Divider />
      <List style={{
        paddingLeft: 8,
        paddingRight: 8
      }}>
        {[
          {
            icon: <Apps />,
            text: 'Aplicativos',
            link: '/apps'
          },
          {
            icon: <Apartament />,
            text: 'Escolas',
            link: '/escolas'
          },
          {
            icon: <School />,
            text: 'Usuários Escolas',
            link: '/usuarios-escolas'
          },
          {
            icon: <Groups />,
            text: 'Usuários Poliedro',
            link: '/usuarios-poliedro'
          },
          {
            icon: <AdminPanelSettings />,
            text: 'Perfis',
            link: '/perfis'
          },
          {
            icon: <TouchApp />,
            text: 'Recursos',
            link: '/recursos'
          },
          {
            icon: <ReceiptLong />,
            text: 'Termos de uso',
            link: '/termos-de-uso'
          },
        ].map(({icon, text, link}) => (
          <ListItem
            onClick={handleDrawerToggle}
            style={pathEqualsLink(link) ? {
              background: '#1B458D',
              color: '#FFF',
              marginBottom: 5,
              borderRadius: '6px'
            } : {marginBottom: 5}}
            key={text}
            disablePadding>
            <ListItemButton>
              <ListItemIcon
                style={pathEqualsLink(link) ? {color: '#FFF'} : {color: '#1B458D' }}>
                {icon}
              </ListItemIcon>
              <Link href={{pathname: link}}>
                <ListItemText
                    style={pathEqualsLink(link) ? {color: '#FFF'} : {color: '#323232'}}
                    primary={text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{
        backgroundColor: '#fff',
        borderBottom: '1px solid #E3E3E3',
        borderTop: '8px solid #FAA41F'
      }}
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Toolbar>
            <IconButton
              style={{color: '#323232'}}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 0, display: { sm: 'none' } }}
            >
              <MenuIcon />
              <Typography
                style={{
                  fontWeight: 'bold',
                }}
                color="#323232"
                variant='h6'>
                  Pmais
              </Typography>
            </IconButton>
          </Toolbar>
          
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ minWidth: 100 }}>Contact</Typography>
            <Typography sx={{ minWidth: 100 }}>Profile</Typography>
            <Tooltip title="Cristiano Junior">
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar style={{backgroundColor: '#1B458D'}} sx={{ width: 32, height: 32 }} />
              </IconButton>
          </Tooltip>
        </Box>
          
      <Menu anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

DefaultLayout.propTypes = {
  window: PropTypes.func,
};

export default DefaultLayout;

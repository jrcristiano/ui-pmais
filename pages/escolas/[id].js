import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Head from 'next/head';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function edit() {
  const router = useRouter();
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const styleTab = (actualTab) => tab == actualTab ? { fontWeight: 'bold', color: '#323232' } : {};

  return (
    <>
      <Head>
        <title>Poliedro sistema de ensino</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
      </Head>
      
      <div style={{ padding: 10 }} className="container">
        <div style={{ flexWrap: 'wrap' }} className="justify-content-between">
          <div>
            <Typography style={{ paddingBottom: 0 }}
              className="titleMain"
              variant="h5"
              color="#323232"
              textTransform="uppercase"
              noWrap
              component="div">
              <Button onClick={() => router.back()}>
                <ArrowBackIcon style={{ fontSize: 35, color: '#1a4287' }} />
              </Button> Poliedro sistema de ensino
            </Typography>

            <Typography style={{ marginLeft: 72, color: 'rgba(0, 0, 0, 0.6)' }}>Modificado em: 01/01/2022 às 09:30</Typography>
          </div>

          <Box fullWidth style={{ padding: 15 }}>
            <Button className="background-blue button-rounded" variant="contained">
              <CloudDownloadIcon /> <span style={{ marginLeft: 5 }}>Importar usuários escolas</span>
            </Button>
          </Box>
        </div>

        <Box sx={{ width: '100%', marginTop: 5, paddingLeft: 3 }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs TabIndicatorProps={{ style: { background: '#183E7F' } }}
              value={tab}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab style={styleTab(0)} label="Escola" {...a11yProps(0)} />
              <Tab style={styleTab(1)} label="Administradores" {...a11yProps(1)} />
              <Tab style={styleTab(2)} label="Licenças" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={tab} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={tab} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={tab} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </div>
    </>);
}
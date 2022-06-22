import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import CardApp from './../../components/cardApp';

import AvaCover from './../../public/apps/ava.png';
import AvaliacoesCover from './../../public/apps/avaliacoes.png';
import ItinerariosFormativosCover from './../../public/apps/itinerarios-formativos.png';
import BancoQuestoesCover from './../../public/apps/banco-de-questoes.png';
import CatLearningCover from './../../public/apps/cat-learning.png';
import EnvioCartoesCover from './../../public/apps/envio-de-cartoes.png';
import ErratasCover from './../../public/apps/erratas.png';
import EventosCover from './../../public/apps/eventos.png';
import LivroDigitalCover from './../../public/apps/livro-digital.png';
import MatrizBnccCover from './../../public/apps/matriz-bncc.png';
import MktCover from './../../public/apps/mkt-365.png';
import PortalEdrosCover from './../../public/apps/portal-edros.png';

export default function Home() {
  const apps = [
    {
      name: 'AVA',
      image: AvaCover
    },
    {
      name: 'Avaliacoes',
      image: AvaliacoesCover
    },
    {
      name: 'Banco de questões',
      image: BancoQuestoesCover
    },
    {
      name: 'Cat learning',
      image: CatLearningCover
    },
    {
      name: 'Envio de cartões',
      image: EnvioCartoesCover
    },
    {
      name: 'Erratas',
      image: ErratasCover
    },
    {
      name: 'Eventos',
      image: EventosCover
    },
    {
      name: 'Itinerários formativos',
      image: ItinerariosFormativosCover
    },
    {
      name: 'Livro digital',
      image: LivroDigitalCover
    },
    {
      name: 'Matriz BNCC',
      image: MatrizBnccCover
    },
    {
      name: 'MKT 356',
      image: MktCover
    },
    {
      name: 'Portal edros',
      image: PortalEdrosCover
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Pmais · apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Typography
          style={{fontWeight: 'bold', paddingBottom: 15}}
          variant="h5"
          color="#323232"
          noWrap
          component="div">
              Aplicativos
        </Typography>
        <Grid container  spacing={3}>
            {apps.map((app, index) => (
              <Grid
                item
                xs={12}
                md={12}
                lg={4}
                key={index}>
                <CardApp name={app.name} image={app.image} />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
}

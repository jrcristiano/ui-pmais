import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function edit() {
  const router = useRouter();

  return (
    <div className="container">
      <div className="justify-content-between">
        <Typography style={{ padding: 0}}
          className="titleMain"
          variant="h5"
          color="#323232"
          noWrap
          component="div">
          <Button onClick={() => router.back()}>
            <ArrowBackIcon style={{fontSize: 35, color: '#1a4287'}} />
          </Button> Escola {router.query.id}
        </Typography>
        <Button className="background-blue button-rounded" variant="contained">
          Importar usuários escolas
        </Button>
      </div>
    </div>);
}
import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Login = () => {
    const [login, setLogin] = useState('');
    return(      
      <><><><Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="login" variant="outlined" />
        <TextField id="filled-basic" label="senha" variant="filled" />
      </Box><Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack></>

        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '6px', transform: 'scale(0.8)' }}
        >
          
        </Box></><Card sx={{ Width: 150 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Palavra do dia
            </Typography>
           
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              
            </Typography>
            <Typography variant="body2">
             Seja gentil
              <br />
              {'com um sorriso benevolente'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card></>
    );
}
export default Login;
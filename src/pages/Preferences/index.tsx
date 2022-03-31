import React, { useContext, Component } from 'react';
import { PageTitle } from "../../components/PageTitle";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import moment from "moment";
import "moment-timezone";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { AppContext } from '../../contexts';
import FormControl from '@mui/material/FormControl';


const timezones = moment.tz.names();

const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

export const Preferences =() =>{
  const { user } = useContext(AppContext);
  const [timeZone, setTimeZone] = React.useState<string>(user.timeZone);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    // user.timeZone = value ? value : user.timeZone;
    setTimeZone(value);
      console.log('value', value,
      'user.name', user.name,
      'timezone', user.timeZone)
  };

  return (
    <>
      <PageTitle title="Preferences"/>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="User Name" variant="outlined" />
      <TextField id="outlined-basic" label="Mobile Phone" variant="outlined" />
      <TextField id="outlined-basic" label="Country" variant="outlined" />
      
      <Select
        id="demo-multiple-name"
        label="Time Zone"
        value={timeZone}
        onChange={handleChange}
        input={<OutlinedInput label="Time Zone" />}
        MenuProps={MenuProps}
      >
        {timezones.map((name) => (
          <MenuItem
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </Box>
    </>
  );
};
import { useState } from 'react';
import { TextField, Select, MenuItem, Button, Typography, FormControl, InputLabel, Box } from '@mui/material';

function CreateUserBox() {
  const [name, setName] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [userCreated, setUserCreated] = useState(false);
  const [createdUser, setCreatedUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && jabatan) {
      setCreatedUser({ name, jabatan });
      setUserCreated(true);
    }
  };

  return (
    <Box sx={{ padding: 4, fontFamily: 'Arial' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Jayjay Lesson
      </Typography>
      {!userCreated ? (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 300 }}>
          <TextField
            label="Nama User"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <FormControl fullWidth required margin="normal">
            <InputLabel>Pilih Jabatan</InputLabel>
            <Select
              value={jabatan}
              onChange={(e) => setJabatan(e.target.value)}
              label="Pilih Jabatan"
            >
              <MenuItem value="">
                <em>-- Pilih Jabatan --</em>
              </MenuItem>
              <MenuItem value="SPV">SPV</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Administrator">Administrator</MenuItem>
              <MenuItem value="Agen">Agen</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: 'blue', color: 'white', marginTop: 2 }}
          >
            BUAT USER BARU
          </Button>
        </Box>
      ) : (
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6" color="green">
            User Baru Sudah Berhasil Dibuat!
          </Typography>
          <Typography>Nama User: {createdUser.name}</Typography>
          <Typography>Jabatan: {createdUser.jabatan}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default CreateUserBox;
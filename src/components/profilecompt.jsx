import React, { useCallback, useContext, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Grid,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  withTheme,
} from '@mui/material';
import {
  School,
  Badge,
  Edit,
  Save,
} from '@mui/icons-material';

import { userContext } from "../context/usercontext.jsx"

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { User, setUser } = useContext(userContext)
  const [copyUser, setcopyUser] = useState({})

  const handleEdit = useCallback(() => {
    setIsEditing(true);
    setcopyUser({...User})
  }, [isEditing,User]);

  const handleSave = useCallback(async () => {
    try {
      let res = await fetch("")
    } catch (error) {
      
    }
    setIsEditing(false);
  }, [User]);

  const handleChange = useCallback ((field) => (event) => {
    setcopyUser(()=>{
      let update = {...copyUser,[field]: event.target.value}
      return update
    })
    console.log(update)
    setcopyUser(update)
  },[User,copyUser]);

  return (
    <div className="profile-cont">
      <Box>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Profile
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: 'primary.main',
                }}
              >
                {User.full_name && User.full_name.charAt(0)}
              </Avatar>
              <Typography variant="h5" gutterBottom>
                {User.full_name}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {User.department}
              </Typography>
              <Button
                variant="outlined"
                startIcon={isEditing ? <Save /> : <Edit />}
                onClick={isEditing ? handleSave : handleEdit}
                sx={{ mt: 2, backgroundColor: 'black', borderRadius: '3px', color: 'white' }}
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={isEditing ? copyUser.full_name : User.full_name}
                    onChange={handleChange('name')}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={isEditing ? copyUser.email : User.email}
                    onChange={handleChange('email')}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    value={isEditing ? copyUser.phone : User.phone}
                    onChange={handleChange('phone')}
                    disabled={!isEditing}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Student ID"
                    value={User.student_id}
                    disabled
                  />
                </Grid>
              </Grid>

              <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Academic Information
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <List>
                <ListItem>
                  <ListItemIcon>
                    <School />
                  </ListItemIcon>
                  <ListItemText
                    primary="Department"
                    secondary={User.department}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Badge />
                  </ListItemIcon>
                  <ListItemText
                    primary="Year"
                    secondary={User.year}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Profile; 
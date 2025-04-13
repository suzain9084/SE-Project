import React, { useState } from 'react';
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

const mockUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 8900',
  role: 'Student',
  id: 'STU123456',
  department: 'Computer Science',
  year: '3rd Year',
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(mockUser);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to update the user data
  };

  const handleChange = (field) => (event) => {
    setUserData({
      ...userData,
      [field]: event.target.value,
    });
  };

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
              {userData.name.charAt(0)}
            </Avatar>
            <Typography variant="h5" gutterBottom>
              {userData.name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {userData.role}
            </Typography>
            <Button
              variant="outlined"
              startIcon={isEditing ? <Save /> : <Edit />}
              onClick={isEditing ? handleSave : handleEdit}
              sx={{ mt: 2 ,backgroundColor: 'black', borderRadius:'3px', color:'white'}}
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
                  value={userData.name}
                  onChange={handleChange('name')}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  value={userData.email}
                  onChange={handleChange('email')}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  value={userData.phone}
                  onChange={handleChange('phone')}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Student ID"
                  value={userData.id}
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
                  secondary={userData.department}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Badge />
                </ListItemIcon>
                <ListItemText
                  primary="Year"
                  secondary={userData.year}
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
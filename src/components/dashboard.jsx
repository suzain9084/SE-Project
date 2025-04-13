import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  LinearProgress,
} from '@mui/material';
import {
  Report,
  CheckCircle,
  Pending,
  Add,
  TrendingUp,
  TrendingDown,
} from '@mui/icons-material';
import { PieChart } from '@mui/x-charts/PieChart';

const StatCard = ({ title, value, icon, color, trend }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        {icon}
      </Box>
      <Typography variant="h4" component="div" sx={{ mb: 1 }}>
        {value}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {trend > 0 ? <TrendingUp color="success" /> : <TrendingDown color="error" />}
        <Typography variant="body2" color={trend > 0 ? 'success.main' : 'error.main'} sx={{ ml: 1 }}>
          {Math.abs(trend)}% from last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const QuickActionCard = ({ title, description, icon, action }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {icon}
        <Typography variant="h6" sx={{ ml: 1 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" sx={{color:'white',backgroundColor:'black'}} onClick={action}>Take Action</Button>
    </CardActions>
  </Card>
);

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Complaints',
      value: '156',
      icon: <Report sx={{ color: 'primary.main' }} />,
      trend: 12,
    },
    {
      title: 'Resolved',
      value: '89',
      icon: <CheckCircle sx={{ color: 'success.main' }} />,
      trend: 8,
    },
    {
      title: 'Pending',
      value: '67',
      icon: <Pending sx={{ color: 'warning.main' }} />,
      trend: -5,
    },
  ];

  const quickActions = [
    {
      title: 'New Complaint',
      description: 'Submit a new grievance or complaint',
      icon: <Add color="primary" />
    },
    // {
    //   title: 'Track Status',
    //   description: 'Check the status of your submitted complaints',
    //   icon: <Report color="secondary" />
    // },
  ];

  const desktopOS = [
    { id: 0, value: 15, label: 'Resolved', color: '#1976d2' },
    { id: 1, value: 30, label: 'In process', color: '#9c27b0' },
    { id: 2, value: 10, label: 'Pending', color: '#4caf50' }
  ];

  const valueFormatter = (value) => `${value}%`;

  return (
    <div className='profile-cont'>
      <Box>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Dashboard
        </Typography>

        <Grid container spacing={3.1} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StatCard {...stat} />
            </Grid>
          ))}
          <PieChart
            series={[
              {
                data: desktopOS,
                highlightScope: { fade: 'global', highlight: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                valueFormatter,
              },
            ]}
            height={200}
            width={400} />
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Recent Activity
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Complaints Resolution Rate</Typography>
                  <Typography variant="body2">75%</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'black',
                    },
                  }} />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Average Response Time</Typography>
                  <Typography variant="body2">2.5 days</Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={60}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'black',
                    },
                  }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              {quickActions.map((action, index) => (
                <Grid item xs={12} key={index}>
                  <QuickActionCard {...action} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard; 
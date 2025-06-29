import * as React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Login', path: '/login' },
];

interface Props {
  window?: () => Window;
}

export default function MainLayout({ window }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // List of route prefixes where layout should be hidden
  const hiddenRoutePrefixes = ['/auth'];

  const isHidden = hiddenRoutePrefixes.some(prefix =>
    location.pathname.startsWith(prefix)
  );

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        OXYGEN
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavigate(item.path)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* 🔍 Only show AppBar + Drawer if route is not hidden */}
      {!isHidden && (
        <>
          <AppBar component="nav" sx={{ backgroundColor: 'rgb(15 23 42 / 100%)' }}>
            <Container disableGutters sx={{ maxWidth: '1200px', mx: 'auto' }}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  OXYGEN
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {navItems.map((item) => (
                    <Button key={item.label} sx={{ color: '#fff' }} onClick={() => handleNavigate(item.path)}>
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>

          {/* Mobile Drawer */}
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </>
      )}

      {/* Route Content */}
      <Box component="main" sx={{ mt: isHidden ? 0 : { xs: 7, sm: 8 }, width: '100%' }}>
        <Outlet />
        {!isHidden && <Footer />}
      </Box>
    </Box>
  );
}

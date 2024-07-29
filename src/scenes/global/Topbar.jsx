import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material';
import { LightModeOutlinedIcon } from '@mui/icons-material/LightModeOutlined';
import { DarkModeOutlinedIcon } from '@mui/icons-material/DarkModeOutlinedIcon';
import { NotificationsOutlinedIcon } from '@mui/icons-material/NotificationsOutlinedIcon';
import { SettingOutlinedIcon } from '@mui/icons-material/SettingOutlinedIcon';
import { PersonOutlinedIcon } from '@mui/icons-material/PersonOutlinedIcon';
import { SearchIcon } from '@mui/icons-material/Search';

const styledBox = styled(Box)``;

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <IconButton onClick={colorMode.toggleColorMode}>
        <LightModeOutlinedIcon />
      </IconButton>
      <IconButton>
        <NotificationsOutlinedIcon />
      </IconButton>
      <IconButton>
        <SettingOutlinedIcon />
      </IconButton>
      <IconButton>
        <PersonOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default Topbar;

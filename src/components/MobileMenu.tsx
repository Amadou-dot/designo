import { Menu as Burger, MenuOpen as BurgerOpen } from '@mui/icons-material';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id='menu-button'
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {open ? (
          <BurgerOpen className='text-foreground font-bold' fontSize='large' />
        ) : (
          <Burger className='text-foreground font-bold' fontSize='large' />
        )}
      </Button>

      <Menu
        className='mt-6'
        id='menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        marginThreshold={0}
        slotProps={{
          list: {
            'aria-labelledby': 'menu-button',
            style: {
              padding: '16px',
              width: '100%',
              color: 'var(--light-gray)',
            },
          },
          paper: {
            square: true,
            sx: {
              width: '100%',
              maxWidth: '100%',
              left: '0px',
              right: '0px',
              backgroundColor: 'black',
            },
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href='/about' className='text-lg font-light uppercase'>
            Our company
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/locations' className='text-lg font-light uppercase'>
            Locations
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/contact' className='text-lg font-light uppercase'>
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}

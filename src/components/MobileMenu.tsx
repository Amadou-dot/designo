import { Menu as Burger, MenuOpen as BurgerOpen } from '@mui/icons-material';
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
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
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
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href='/about'>Our company</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/locations'>Locations</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href='/contact'>Contact</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

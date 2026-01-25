

import { Box, Typography, type BoxProps } from '@mui/material'

interface NavBarProps extends BoxProps {}

function NavBar(props: NavBarProps) {
  const { children, ...boxProps } = props;

  return (
    <Box bgcolor={'primary.main'} {...boxProps} display={'flex'} alignItems={'center'} >
        <Typography variant={'veritoneLarge'} color='white' pl={2.75}>
            SHOPPING LIST
        </Typography>
    </Box>
  )
}

export default NavBar
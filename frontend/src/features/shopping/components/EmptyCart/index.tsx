import { Box, Stack, Typography, type BoxProps } from '@mui/material'
import VeritoneButton from '../VeritoneButton'

export interface EmptyCartProps extends BoxProps { }

function EmptyCart(props: EmptyCartProps) {
  return (
    <Box {...props} width={614} height={290} border={1} borderColor={'border.primary'}>
      <Stack direction={'column'} pt={11} gap={2} alignItems="center">
        <Typography variant={'veritoneNunito'} color={'text.secondary'} >
          Your shopping list is empty :(
        </Typography>
        <VeritoneButton>
          <Typography variant={'veritoneNunitoSmall'}>Add your first item</Typography>
        </VeritoneButton>
      </Stack>
    </Box>
  )
}

export default EmptyCart
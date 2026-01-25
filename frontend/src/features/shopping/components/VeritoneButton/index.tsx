import { Button, type ButtonProps } from '@mui/material'

export interface VeritoneButtonProps extends ButtonProps { }

function VeritoneButton(props: VeritoneButtonProps) {
    const { children, ...buttonProps } = props;
    return (
        <Button 
            {...buttonProps} 
            variant={'contained'} 
            color={'veritoneLight'}
        >
            {children}
        </Button>
    )
}

export default VeritoneButton
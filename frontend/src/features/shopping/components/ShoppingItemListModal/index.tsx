import { Button, Dialog, DialogActions, DialogContent, Stack, Typography } from '@mui/material'
import LastPageIcon from '@mui/icons-material/LastPage';
import VeritoneButton from '../VeritoneButton';

export interface ShoppingItemListModalProps {
    open: boolean;
    onClose: () => void;
    isEdit: boolean;
    children: React.ReactNode;
}

function ShoppingItemListModal({ open, onClose, isEdit, children }: ShoppingItemListModalProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <Stack direction='row'>
                <Typography variant={'veritoneLarge'}>SHOPPING LIST</Typography>
                <LastPageIcon fontSize="small" />
            </Stack>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button>Cancel</Button>
                <VeritoneButton>
                    <Typography variant={'veritoneNunitoSmall'}>{isEdit ? 'Add Task' : 'Save Item'}</Typography>
                </VeritoneButton>
            </DialogActions>
        </Dialog>
    )
}

export default ShoppingItemListModal
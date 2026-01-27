import { Button, Dialog, DialogActions, DialogContent, Stack, Typography } from '@mui/material'
import LastPageIcon from '@mui/icons-material/LastPage';
import VeritoneButton from '../VeritoneButton';
import { useShoppingItemList } from '../../context/ShoppingItemListContext';

export interface ShoppingItemListModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    mutationActionTitle: string;
}

function ShoppingItemListModal({ open, onClose, mutationActionTitle, children }: ShoppingItemListModalProps) {
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
                    <Typography variant={'veritoneNunitoSmall'}>{mutationActionTitle}</Typography>
                </VeritoneButton>
            </DialogActions>
        </Dialog>
    )
}

export default ShoppingItemListModal
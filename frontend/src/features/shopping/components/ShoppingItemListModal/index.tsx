import { Button, Dialog, DialogActions, DialogContent, Stack, Typography } from '@mui/material'
import LastPageIcon from '@mui/icons-material/LastPage';
import VeritoneButton from '../VeritoneButton';
import ShoppingItemListModalBody from './ShoppingItemListModalBody';

export interface ShoppingItemListModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    mutationActionTitle: string;
    formId: string;
}

function ShoppingItemListModal({ open, onClose, mutationActionTitle, formId, children }: ShoppingItemListModalProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <Stack direction='row'>
                <Typography variant={'veritoneLarge'}>{'SHOPPING LIST'}</Typography>
                <LastPageIcon fontSize="small" />
            </Stack>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{'Cancel'}</Button>
                <VeritoneButton type="submit" form={formId}>
                    <Typography variant={'veritoneNunitoSmall'}>{mutationActionTitle}</Typography>
                </VeritoneButton>
            </DialogActions>
        </Dialog>
    )
}

ShoppingItemListModal.ShoppingItemListModalBody = ShoppingItemListModalBody;
export default ShoppingItemListModal
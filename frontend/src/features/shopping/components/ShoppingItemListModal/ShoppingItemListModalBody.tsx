import { Stack, Typography } from "@mui/material"
import type { ShoppingProductResponse } from "../../../../api/model"

export type ShoppingItemFormValues = {
    name: string
    description: string
    quantity: number
    purchased: boolean
}

export interface ShoppingItemListModalBodyProps {
    modalBodyHeader: string;
    modalBodySubheader: string
    editingProduct?: ShoppingProductResponse | null
}

const MAX_DESC = 100

function ShoppingItemListModalBody({ modalBodyHeader, modalBodySubheader, editingProduct }: ShoppingItemListModalBodyProps) {

    const defaultValues: ShoppingItemFormValues = {
        name: editingProduct?.name ?? '',
        description: editingProduct?.description ?? '',
        quantity: editingProduct?.quantity ?? 1,
        purchased: editingProduct?.purchased ?? false
    }

     

    return (
        <Stack>
            <Stack direction={'column'}>
                <Typography variant={'veritoneNunito'} color={'veritoneTextVariant.primary'}>
                    {modalBodyHeader}
                </Typography>
                <Typography variant={'veritoneNunitoSmall'} color={'veritoneTextVariant.secondary'}>
                    {modalBodySubheader}
                </Typography>
            </Stack>

        </Stack>
    )
}

export default ShoppingItemListModalBody
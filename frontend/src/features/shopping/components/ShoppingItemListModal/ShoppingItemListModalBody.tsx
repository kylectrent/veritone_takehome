import { Box, FormControl, FormHelperText, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import type { ShoppingProductRequest, ShoppingProductResponse } from "../../../../api/model"
import { Controller, useForm } from 'react-hook-form'
import { useCreateShoppingProduct } from "../../api/hooks"
import { useMemo } from "react"

export type ShoppingItemFormValues = {
    name: string
    description: string
    quantity: number
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
    }

    const {
        control,
        /*reset,*/
        handleSubmit,
        formState: { errors, /*isValid*/ },
    } = useForm<ShoppingItemFormValues>({
        defaultValues,
        mode: 'onChange',
    });

    const { createAsync, /*isPending*/ } = useCreateShoppingProduct();

    const onSubmit = async (values: ShoppingItemFormValues) => {
        const payload: ShoppingProductRequest = {
            name: values.name.trim(),
            description: values.description?.trim() ?? '',
            quantity: Number(values.quantity) || 1,
        }

        await createAsync(payload);
    }

    const qtyOptions = useMemo(() => Array.from({ length: 20 }, (_, i) => i + 1), [])

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

            {/* form fields */}
            <Stack component='form' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: 'Item name is required',
                        validate: (v) => (v?.trim().length ? true : 'Item name is required'),
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            value={field.value ?? ''}
                            placeholder="Item Name"
                            fullWidth
                            variant="outlined"
                            error={!!errors.name}
                            helperText={errors.name?.message ?? ' '}
                            slotProps={{
                                htmlInput: {
                                    'aria-label': 'Item Name',
                                },
                            }}
                        />
                    )}
                />
                <Controller
                    name='description'
                    control={control}
                    rules={{
                        maxLength: { value: MAX_DESC, message: `Max ${MAX_DESC} characters` },
                    }}
                    render={(({ field }) => (
                        <Box>
                            <TextField
                                {...field}
                                value={field.value ?? ''}
                                placeholder="Description"
                                fullWidth
                                variant="outlined"
                                multiline
                                minRows={4}
                                error={!!errors.description}
                                helperText={errors.description?.message ?? ' '}
                                slotProps={{
                                    htmlInput: {
                                        maxLength: MAX_DESC,
                                        'aria-label': 'Description',
                                    },
                                }}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Typography>
                                    {(field.value?.length ?? 0)}/{MAX_DESC}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                />
                <Controller
                    name="quantity"
                    control={control}
                    rules={{
                        required: 'Quantity is required',
                        min: { value: 1, message: 'Quantity must be at least 1' },
                    }}
                    render={({ field }) => (
                        <FormControl fullWidth error={!!errors.quantity}>
                            <Select
                                {...field}
                                value={field.value ?? 1}
                                displayEmpty
                                renderValue={(val) => {
                                    if (!val) return <span>How many?</span>
                                    return String(val)
                                }}
                                inputProps={{ 'aria-label': 'Quantity' }}
                            >
                                {qtyOptions.map((n) => (
                                    <MenuItem key={n} value={n}>
                                        {n}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>{errors.quantity?.message ?? ' '}</FormHelperText>
                        </FormControl>
                    )}
                />
            </Stack>

        </Stack>
    )
}

export default ShoppingItemListModalBody
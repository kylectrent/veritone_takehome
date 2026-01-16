package com.kyletrent.veritone.shopping.mapper;

import com.kyletrent.veritone.shopping.VeritoneShoppingProduct;
import com.kyletrent.veritone.shopping.dto.ShoppingProductRequest;
import com.kyletrent.veritone.shopping.dto.ShoppingProductResponse;

// Prevent this class from being extended
public final class ShoppingProductMapper {

    // Prevent this class from being instantiated
    private ShoppingProductMapper() {
    }

    public static ShoppingProductResponse toResponse(VeritoneShoppingProduct e) {
        return new ShoppingProductResponse(
                e.getId(),
                e.getName(),
                e.getDescription(),
                e.getQuantity(),
                e.isPurchased(),
                e.getCreatedAt(),
                e.getUpdatedAt());
    }

    public static VeritoneShoppingProduct toEntity(ShoppingProductRequest r) {
        VeritoneShoppingProduct e = new VeritoneShoppingProduct();
        apply(e, r);
        return e;
    }

    public static void apply(VeritoneShoppingProduct e, ShoppingProductRequest r) {
        e.setName(r.name());
        e.setDescription(r.description());
        e.setQuantity(r.quantity());
        e.setPurchased(r.purchased());
    }
}

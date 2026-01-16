package com.kyletrent.veritone.shopping.dto;

import java.time.Instant;

// Use record here making the DTO more concise and expressive
public record ShoppingProductResponse(
    Long id,
    String name,
    String description,
    Integer quantity,
    boolean purchased,
    Instant createdAt,
    Instant updatedAt
) {}

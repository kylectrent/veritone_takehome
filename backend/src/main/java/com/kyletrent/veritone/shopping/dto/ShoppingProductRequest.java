package com.kyletrent.veritone.shopping.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

// Use record here making the DTO more concise and expressive
public record ShoppingProductRequest(
    @Schema(description = "Name of shopping item")
    @NotBlank String name,

    @Schema(description = "Description of shopping item")
    String description,

    @Schema(description = "Number of items in the shopping list")
    @Positive Integer quantity,

    @Schema(description = "Has the item been purchased or not. Optional defaults to false")
    Boolean purchased
) {}

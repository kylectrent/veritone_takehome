package com.kyletrent.veritone.shopping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.kyletrent.veritone.shopping.dto.ShoppingProductRequest;
import com.kyletrent.veritone.shopping.dto.ShoppingProductResponse;
import com.kyletrent.veritone.shopping.mapper.ShoppingProductMapper;

import io.swagger.v3.oas.annotations.responses.ApiResponse;

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/shopping")
public class VeritoneShoppingProductController {

    // Use constructor injection for easier composition of test suites
    private final VeritoneShoppingProductRepository veritoneShoppingProductRepository;

    // Spring can see this class is a RestController bean, and using the 'hidden' bean created for the repo, autowires this repo 
    public VeritoneShoppingProductController(VeritoneShoppingProductRepository veritoneShoppingProductRepository) {
        this.veritoneShoppingProductRepository = veritoneShoppingProductRepository;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ShoppingProductResponse> getAllVeritoneShoppingProducts() {

        // Sort by most recently created or updated
        return veritoneShoppingProductRepository
                .findAll(Sort.by(Sort.Direction.DESC, "updatedAt"))
                .stream()
                .map(ShoppingProductMapper::toResponse)
                .toList();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ShoppingProductResponse createVeritoneShoppingProduct(
            @Valid @RequestBody ShoppingProductRequest request) {

        VeritoneShoppingProduct entity = ShoppingProductMapper.toEntity(request);
        VeritoneShoppingProduct saved = veritoneShoppingProductRepository.save(entity);

        return ShoppingProductMapper.toResponse(saved);
    }
    
    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ShoppingProductResponse updateVeritoneShoppingProduct(@PathVariable Long id,
            @Valid @RequestBody ShoppingProductRequest request) {

        VeritoneShoppingProduct existingVeritoneShoppingProduct = veritoneShoppingProductRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

        ShoppingProductMapper.apply(existingVeritoneShoppingProduct, request);
        VeritoneShoppingProduct saved = veritoneShoppingProductRepository.save(existingVeritoneShoppingProduct);

        return ShoppingProductMapper.toResponse(saved);
    }

    @DeleteMapping("/{id}")
    @ApiResponse(responseCode = "204", description = "Deleted")
    public ResponseEntity<Void> deleteVeritoneShoppingProduct(@PathVariable Long id) {
        if (!veritoneShoppingProductRepository.existsById(id)) {
            // Spring will return this as a 404 ex
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
        }
        veritoneShoppingProductRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Not UI requirement but standard REST
    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ShoppingProductResponse getById(@PathVariable Long id) {
        VeritoneShoppingProduct veritoneShoppingProduct = veritoneShoppingProductRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

        return ShoppingProductMapper.toResponse(veritoneShoppingProduct);
    }
}

package com.kyletrent.veritone.shopping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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

import jakarta.validation.Valid;

@RestController
@RequestMapping("api/shopping")
public class VeritoneShoppingProductController {

    @Autowired
    private VeritoneShoppingProductRepository veritoneShoppingProductRepository;

    @GetMapping
    public List<VeritoneShoppingProduct> getAllVeritoneShoppingProducts() {

        // Sort by most recently created or updated
        return veritoneShoppingProductRepository.findAll(
                Sort.by(Sort.Direction.DESC, "updatedAt"));
    }

    @PostMapping
    public VeritoneShoppingProduct createVeritoneShoppingProduct(
            @Valid @RequestBody VeritoneShoppingProduct veritoneShoppingProduct) {
        return veritoneShoppingProductRepository.save(veritoneShoppingProduct);
    }

    @PutMapping("/{id}")
    public VeritoneShoppingProduct updateVeritoneShoppingProduct(@PathVariable Long id,
            @Valid @RequestBody VeritoneShoppingProduct veritoneShoppingProduct) {
        VeritoneShoppingProduct existingVeritoneShoppingProduct = veritoneShoppingProductRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
        existingVeritoneShoppingProduct.setName(veritoneShoppingProduct.getName());
        existingVeritoneShoppingProduct.setDescription(veritoneShoppingProduct.getDescription());
        existingVeritoneShoppingProduct.setQuantity(veritoneShoppingProduct.getQuantity());
        existingVeritoneShoppingProduct.setPurchased(veritoneShoppingProduct.isPurchased());
        return veritoneShoppingProductRepository.save(existingVeritoneShoppingProduct);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVeritoneShoppingProduct(@PathVariable Long id) {
        if (!veritoneShoppingProductRepository.existsById(id)) {
            // Spring will return this as a 404 ex
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
        }
        veritoneShoppingProductRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Not UI requirement but standard REST
    @GetMapping("/{id}")
    public VeritoneShoppingProduct getById(@PathVariable Long id) {
        return veritoneShoppingProductRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));
    }
}

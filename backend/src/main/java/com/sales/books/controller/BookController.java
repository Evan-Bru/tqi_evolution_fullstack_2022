package com.sales.books.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sales.books.models.BookModel;
import com.sales.books.models.AnswerModel;
import com.sales.books.service.BookService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    @Autowired
    private BookService ps;

    @DeleteMapping("{id}")
    public ResponseEntity<AnswerModel> remove(@PathVariable long id){
        return ps.remove(id);
    }

    @PutMapping
    public ResponseEntity<?> alter(@RequestBody BookModel pm){
        return ps.createAlter(pm, "alter");
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody BookModel pm){
        return ps.createAlter(pm, "create");
    }

    @GetMapping
    public Iterable<BookModel> list(){
        return ps.list();
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getById(@PathVariable long id) {
        return ps.findById(id);
    }
}
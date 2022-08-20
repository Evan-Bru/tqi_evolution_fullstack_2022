package com.sales.books.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sales.books.repository.BookRepository;
import com.sales.books.models.BookModel;
import com.sales.books.models.AnswerModel;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository pr;

    @Autowired
    private AnswerModel rm;

    public Iterable<BookModel> list() {
        return pr.findAll();
    }

    public ResponseEntity<?> createAlter(BookModel pm, String action) {
        if (pm.getTitle().equals("")) {
            rm.setMsg("The Book's TITLE is required!");
            return new ResponseEntity<AnswerModel>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getAutor().equals("")) {
            rm.setMsg("The Book's AUTOR is required!");
            return new ResponseEntity<AnswerModel>(rm, HttpStatus.BAD_REQUEST);
        } else if (pm.getPublisher().equals("")) {
            rm.setMsg("The PUBLISHER's name is required!");
            return new ResponseEntity<AnswerModel>(rm, HttpStatus.BAD_REQUEST);
        } else {
            if (action.equals("create")) {
                return new ResponseEntity<BookModel>(pr.save(pm), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<BookModel>(pr.save(pm), HttpStatus.OK);
            }
        }
    }


    public ResponseEntity<AnswerModel> remove(long id) {
        pr.deleteById(id);
        rm.setMsg("Book successfully removed!");
        return new ResponseEntity<AnswerModel>(rm, HttpStatus.OK);
    }
    public ResponseEntity<?>  findById(long id) {
        Optional<BookModel> book = pr.findById(id);
        if(book.isEmpty() ) {
            rm.setMsg("Book not found!");
            return new ResponseEntity<AnswerModel>(rm, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<BookModel >(book.get() , HttpStatus.OK);
    }
} 
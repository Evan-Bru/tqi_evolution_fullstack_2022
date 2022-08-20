package com.sales.books.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sales.books.models.BookModel;

@Repository
public interface BookRepository extends  CrudRepository<BookModel, Long>{
}

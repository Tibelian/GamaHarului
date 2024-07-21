package com.tibelian.gamaharului.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tibelian.gamaharului.model.auth.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}

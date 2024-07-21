package com.tibelian.gamaharului.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tibelian.gamaharului.model.auth.User;
import com.tibelian.gamaharului.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public List<User> getAll() {
		return userRepository.findAll();
	}
	
	public User getById(int id) {
		return userRepository.findById(id).orElse(null);
	}
	
	public User create(User track) {
		return userRepository.save(track);
	}
	
	public void delete(int id) {
		userRepository.deleteById(id);
	}
}

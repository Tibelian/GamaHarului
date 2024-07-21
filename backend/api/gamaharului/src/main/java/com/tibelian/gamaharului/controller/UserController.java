package com.tibelian.gamaharului.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tibelian.gamaharului.exception.NotFoundException;
import com.tibelian.gamaharului.model.auth.User;
import com.tibelian.gamaharului.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping
	public List<User> getAll() {
		return userService.getAll();
	}
	
    @GetMapping("/{id}")
    public User getById(@PathVariable int id) {
        User track = userService.getById(id);
        if (track == null) {
        	throw new NotFoundException("Could not find a user with the id " + id);
        }
        return track;
    }
    
    @PostMapping
    public User create(@RequestBody User user) {
        return userService.create(user);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        User user = getById(id);
    	userService.delete(user.getId());
    }
	
}

package com.example.demo.controllers;

import com.example.demo.UserEntity;
import com.example.demo.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;


@Controller
public class UsersController {

    @Autowired
    private UsersService usersService;


    @RequestMapping("/api/users")
    @ResponseBody
    public Object ApiGetUsers() {
        return this.usersService.getUsers();
    }

    @RequestMapping("/api/users/{id}/get")
    @ResponseBody
    public Object ApiGetUser(@PathVariable Integer id) {
        return this.usersService.getUser(id);
    }

    @RequestMapping("/api/users/add")
    @ResponseBody
    public Object ApiAddUser(@RequestParam String name, @RequestParam Integer age){
        return this.usersService.addUser(name, age);
    }

    @RequestMapping("/api/users/{id}/remove")
    @ResponseBody
    public Object ApiRemoveUser(@PathVariable Integer id) {
        return this.usersService.removeUser(id);
    }

}

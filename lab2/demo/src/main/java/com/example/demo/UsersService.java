package com.example.demo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UsersService {
    private Map<Integer, UserEntity> usersMap = new HashMap<>();

    public Object getUsers() {
        List<UserEntity> users = new ArrayList<UserEntity>(usersMap.values());

        return users;
    }

    public Object getUser(Integer id){
        return usersMap.getOrDefault(id, null);
    }

    public Object addUser(String Name, Integer Age) {
        Integer id = usersMap.size() + 1;
        UserEntity newUser = new UserEntity(id, Name, Age);
        usersMap.put(id, newUser);

        return newUser;
    }

    public Object removeUser(Integer id) {
        UserEntity removedUser = usersMap.remove(id);
        return removedUser;
    }


}

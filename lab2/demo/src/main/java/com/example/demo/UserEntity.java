package com.example.demo;

public class UserEntity {
    private Integer Id;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public Integer getAge() {
        return Age;
    }

    public void setAge(Integer age) {
        Age = age;
    }

    private String Name;
    private Integer Age;

    public UserEntity(Integer id, String name, Integer age) {
        Id = id;
        Name = name;
        Age = age;
    }
}

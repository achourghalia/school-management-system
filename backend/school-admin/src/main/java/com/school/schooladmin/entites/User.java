package com.school.schooladmin.entites;

import com.school.schooladmin.dto.StudentDto;
import com.school.schooladmin.enums.UserRole;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@Entity
@Table(name= "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private  String email;
    private String password;

    private String fatherName;

    private String motherName;

    private String studentClass;

    private Date dob;

    private String address;

    private String gender;

    private UserRole role;

    public void setId(Long id) {this.id = id;}

    public void setName(String name) {this.name = name;}

    public void setEmail(String email) {this.email = email;}

    public void setPassword(String password) {this.password = password;}

    public void setRole(UserRole role) {this.role = role;}

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public void setStudentClass(String studentClass) {
        this.studentClass = studentClass;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getFatherName() {
        return fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public String getStudentClass() {
        return studentClass;
    }

    public Date getDob() {
        return dob;
    }

    public String getAddress() {
        return address;
    }

    public String getGender() {
        return gender;
    }

    public UserRole getRole() {
        return role;
    }

    public StudentDto getStudentDto(){
        StudentDto studentDto =new StudentDto();
        studentDto.setId(id);
        studentDto.setName(name);
        studentDto.setEmail(email);
        studentDto.setAddress(address);
        studentDto.setDob(dob);
        studentDto.setStudentClass(studentClass);
        studentDto.setGender(gender);
        studentDto.setFatherName(fatherName);
        studentDto.setMotherName(motherName);
        return studentDto;

   }
}

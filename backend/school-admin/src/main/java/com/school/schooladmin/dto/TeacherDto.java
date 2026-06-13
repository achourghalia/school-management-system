package com.school.schooladmin.dto;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
@Data
public class TeacherDto {

    private Long id;
    private String name;
    private String email;
    private String gender;
    private String department;
    private String qualification;
    private Date dob;
    private String address;
}

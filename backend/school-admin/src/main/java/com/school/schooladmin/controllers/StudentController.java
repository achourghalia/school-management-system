package com.school.schooladmin.controllers;


import com.school.schooladmin.dto.SingleStudentDto;
import com.school.schooladmin.dto.StudentDto;
import com.school.schooladmin.dto.StudentLeaveDto;
import com.school.schooladmin.services.student.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @GetMapping("/{studentId}")
    public ResponseEntity<SingleStudentDto> getStudentById(@PathVariable long studentId){
        SingleStudentDto singleStudentDto =studentService.getStudentById(studentId);
        if (singleStudentDto ==null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(singleStudentDto);

    }

    @PostMapping("/leave")
    public  ResponseEntity<?> applyLeave(@RequestBody StudentLeaveDto studentLeaveDto){
        StudentLeaveDto submittedstudentLeaveDto =studentService.applyLeave(studentLeaveDto);
        if(submittedstudentLeaveDto == null)
            return  new ResponseEntity<>("Something went wrong", HttpStatus.BAD_REQUEST);
        return ResponseEntity.status(HttpStatus.CREATED).body(submittedstudentLeaveDto);
    }

    @GetMapping ("/leave/{studentId}")
    public  ResponseEntity<List<StudentLeaveDto>> getAllAppliedLeavesByStudentId(@PathVariable long studentId){
        List<StudentLeaveDto>studentLeaveDtos =studentService.getAllAppliedLeavesByStudentId(studentId);
        if(studentLeaveDtos == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(studentLeaveDtos);
    }

    @PutMapping("/{studentId}")
    public ResponseEntity <?> updateStudent(@PathVariable Long studentId,@RequestBody StudentDto studentDto){

        StudentDto createdStudentDto = studentService.updateStudent(studentId,studentDto);

        if(createdStudentDto ==null) return new ResponseEntity<>("Something went wrong", HttpStatus.BAD_REQUEST);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdStudentDto);
    }

}

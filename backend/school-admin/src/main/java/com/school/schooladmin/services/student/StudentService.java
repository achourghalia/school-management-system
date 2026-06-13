package com.school.schooladmin.services.student;

import com.school.schooladmin.dto.SingleStudentDto;
import com.school.schooladmin.dto.StudentDto;
import com.school.schooladmin.dto.StudentLeaveDto;

import java.util.List;

public interface StudentService {
    SingleStudentDto getStudentById(long studentId);

    StudentLeaveDto applyLeave(StudentLeaveDto studentLeaveDto);

    List<StudentLeaveDto> getAllAppliedLeavesByStudentId(long studentId);

    StudentDto updateStudent(Long studentId, StudentDto studentDto);
}

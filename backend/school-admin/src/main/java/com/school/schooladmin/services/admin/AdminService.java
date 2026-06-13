package com.school.schooladmin.services.admin;

import com.school.schooladmin.dto.*;

import java.util.List;

public interface AdminService {
    StudentDto postStudent(StudentDto studentDto);

    List<StudentDto> getAllStudents();

    void deleteStudent(Long studentId);

    SingleStudentDto getStudentById(long studentId);

    StudentDto updateStudent(Long studentId, StudentDto studentDto);

   FeeDto payFee(Long studentId, FeeDto feeDto);

    List<StudentLeaveDto> getAllAppliedLeaves();

    StudentLeaveDto changeLeaveStatus(Long leaveId, String status);

    TeacherDto postTeacher(TeacherDto teacherDto);

    List<TeacherDto> getAllTeachers();

    void deleteTeacher(Long teacherId);

    SingleTeacherDto getTeacherById(long teacherId);

    TeacherDto updateTeacher(Long teacherId, TeacherDto teacherDto);
}

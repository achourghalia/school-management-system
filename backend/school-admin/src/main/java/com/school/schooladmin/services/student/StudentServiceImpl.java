package com.school.schooladmin.services.student;

import com.school.schooladmin.dto.SingleStudentDto;
import com.school.schooladmin.dto.StudentDto;
import com.school.schooladmin.dto.StudentLeaveDto;
import com.school.schooladmin.entites.StudentLeave;
import com.school.schooladmin.entites.User;
import com.school.schooladmin.enums.StudentLeaveStatus;
import com.school.schooladmin.repositories.StudentLeaveRepository;
import com.school.schooladmin.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService{

    private final UserRepository userRepository;

    private  final StudentLeaveRepository studentLeaveRepository;


    @Override
    public SingleStudentDto getStudentById(long studentId) {
        Optional<User> optionalUser= userRepository.findById(studentId);
        SingleStudentDto singleStudentDto =new SingleStudentDto();
        optionalUser.ifPresent(user ->singleStudentDto.setStudentDto(user.getStudentDto()) );
        return singleStudentDto;


    }

    @Override
    public StudentLeaveDto applyLeave(StudentLeaveDto studentLeaveDto) {
        Optional<User> optionalUser =userRepository.findById(studentLeaveDto.getUserid());
        if (optionalUser.isPresent()){
            StudentLeave studentLeave =new StudentLeave();
            studentLeave.setSubject(studentLeaveDto.getSubject());
            studentLeave.setBody(studentLeaveDto.getBody());
            studentLeave.setDate(new Date());
            studentLeave.setStudentLeaveStatus(StudentLeaveStatus.Pending);
            studentLeave.setUser(optionalUser.get());
            StudentLeave SubmittedStudentLeave =studentLeaveRepository.save(studentLeave);
            StudentLeaveDto studentLeaveDto1=new StudentLeaveDto();
            studentLeaveDto1.setId(SubmittedStudentLeave.getId());
            return studentLeaveDto1;

        }
        return null;
    }

    @Override
    public List<StudentLeaveDto> getAllAppliedLeavesByStudentId(long studentId) {
        return studentLeaveRepository.findAllByUserId(studentId).stream().map(StudentLeave::getStudentLeaveDto).collect(Collectors.toList());
    }

    @Override
    public StudentDto updateStudent(Long studentId, StudentDto studentDto) {
        Optional<User> optionalUser =userRepository.findById(studentId);
        if(optionalUser.isPresent()){
            User user=optionalUser.get();
            user.setName(studentDto.getName());
            user.setGender(studentDto.getGender());
            user.setAddress((studentDto.getAddress()));
            user.setDob(studentDto.getDob());
            user.setStudentClass(studentDto.getStudentClass());
            user.setFatherName(studentDto.getFatherName());
            user.setMotherName(studentDto.getMotherName());
            user.setEmail(studentDto.getEmail());
            User updatedStudent=userRepository.save(user);
            StudentDto updatedStudentDto=new StudentDto();
            updatedStudentDto.setId(updatedStudent.getId());
            return updatedStudentDto;
        }
        return null;
    }
}

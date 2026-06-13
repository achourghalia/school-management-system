package com.school.schooladmin.repositories;

import com.school.schooladmin.entites.StudentLeave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentLeaveRepository extends JpaRepository<StudentLeave,Long> {
    List<StudentLeave> findAllByUserId(long studentId);
}

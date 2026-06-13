package com.school.schooladmin.repositories;

import com.school.schooladmin.entites.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher,Long> {
}

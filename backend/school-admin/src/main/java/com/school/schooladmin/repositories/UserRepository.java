package com.school.schooladmin.repositories;

import com.school.schooladmin.dto.StudentDto;
import com.school.schooladmin.entites.User;
import com.school.schooladmin.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    User findByRole(UserRole userRole);

    Optional<User> findFirstByEmail(String email);


    List<User> findAllByRole(UserRole userRole);
}

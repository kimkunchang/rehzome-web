package com.rehzome.rehzomeweb.repository

import com.rehzome.rehzomeweb.entity.UserEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository: JpaRepository<UserEntity, String> {

}
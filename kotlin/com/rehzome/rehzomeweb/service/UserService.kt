package com.rehzome.rehzomeweb.service

import com.rehzome.rehzomeweb.entity.UserEntity
import com.rehzome.rehzomeweb.repository.UserRepository
import com.rehzome.rehzomeweb.request.RequestSaveUser
import com.rehzome.rehzomeweb.response.ResSaveUser
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class UserService(@Autowired private val userRepository: UserRepository) {

    fun saveUser(reqSaveUser: RequestSaveUser): ResSaveUser{
        val userEntity = UserEntity(
            email = reqSaveUser.email,
            password = reqSaveUser.password,
            userName = reqSaveUser.userName
        )
        userRepository.save(userEntity)
        return ResSaveUser(
            userId = userEntity.userId,
            email = userEntity.email,
            userName = userEntity.userName
        )
    }
}
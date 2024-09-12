package com.rehzome.rehzomeweb.controller

import com.rehzome.rehzomeweb.request.RequestSaveUser
import com.rehzome.rehzomeweb.response.ResSaveUser
import com.rehzome.rehzomeweb.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class UserController(@Autowired private val userService: UserService) {

    @PostMapping(value = ["/signup"])
    fun saveUser(@RequestBody requestSaveUser: RequestSaveUser): ResponseEntity<ResSaveUser> {
        // 빈값 체크

        // 이미 있는 유저인지 유효성

        // 패스워드 암호화

        return ResponseEntity.ok(userService.saveUser(requestSaveUser))
    }
}
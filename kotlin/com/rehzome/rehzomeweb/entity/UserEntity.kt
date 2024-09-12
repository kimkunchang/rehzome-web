package com.rehzome.rehzomeweb.entity

import jakarta.persistence.*
import java.util.*

@Entity
@Table(name = "TB_USER")
data class UserEntity(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    val userId: String = UUID.randomUUID().toString(),
    var email: String,
    var password: String,
    var userName: String
)

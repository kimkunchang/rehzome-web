package com.rehzome.rehzomeweb.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class TestRestController {

    @PostMapping(value = ["/testData"])
    fun testData(@RequestBody params: List<String>): MutableMap<Int, String> {
        val data = mutableMapOf<Int, String>()
        data[1] = "사과"
        data[2] = "포도"
        data[3] = "바나나"

        var index = 4
        for(param in params){
            data[index] = param
            index++
        }

        return data
    }

    @GetMapping(value = ["/test"])
    fun getTest(): String{
        return "Hello World"
    }
}
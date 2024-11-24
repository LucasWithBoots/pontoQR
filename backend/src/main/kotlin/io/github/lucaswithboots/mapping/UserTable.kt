package com.example.mapping

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.kotlin.datetime.datetime

object UserTable: IntIdTable("user"){
    val id_team = reference("id_team", TeamTable)
    val name = varchar("name", 255)
    val email = varchar("email", 255)
    val password = varchar("password", 255)
    val is_creator = bool("is_creator")
    val date_created = datetime("date_created")
    val active = bool("active")
}
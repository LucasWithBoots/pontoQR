package com.example.mapping

import com.example.model.User
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.kotlin.datetime.datetime

object UserTable: IntIdTable("user"){
    val id_team = reference("id_team", TeamTable).nullable()
    val name = varchar("name", 255)
    val email = varchar("email", 255)
    val password = varchar("password", 255)
    val is_creator = bool("is_creator")
    val date_created = datetime("date_created")
    val active = bool("active")
}

fun mapRowToModel(row: ResultRow) = User(
    id = row[UserTable.id].value,
    id_team = row[UserTable.id_team]?.value,
    name = row[UserTable.name],
    email = row[UserTable.email],
    password = row[UserTable.password],
    is_creator = row[UserTable.is_creator],
    date_created = row[UserTable.date_created],
    active = row[UserTable.active]
)
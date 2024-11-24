package com.example.mapping

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.kotlin.datetime.datetime

object TeamTable: IntIdTable("team"){
    val name = varchar("name", 255)
    val date_created = datetime("date_created")
    val active = bool("active")
}

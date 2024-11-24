package com.example.mapping

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.kotlin.datetime.datetime

object QrCodeTable: IntIdTable("qrcode"){
    val id_creator = reference("id_creator", UserTable)
    val id_team = reference("id_team", TeamTable)
    val title = varchar("title", 255)
    val description = varchar("description", 255)
    val date_created = datetime("date_created")
    val active = bool("active")
}
package com.example.mapping

import com.example.model.QrCode
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.kotlin.datetime.datetime

object QrCodeTable: IntIdTable("qrcode"){
    val id_creator = reference("id_creator", UserTable)
    val id_team = reference("id_team", TeamTable)
    val title = varchar("title", 255)
    val description = varchar("description", 255)
    val date_created = datetime("date_created")
    val active = bool("active")
}

fun mapRowToQrCode(row: ResultRow) = QrCode(
    id = row[QrCodeTable.id].value,
    id_creator = row[QrCodeTable.id_creator].value,
    id_team = row[QrCodeTable.id_team].value,
    title = row[QrCodeTable.title],
    description = row[QrCodeTable.description],
    date_created = row[QrCodeTable.date_created],
    active = row[QrCodeTable.active]
)
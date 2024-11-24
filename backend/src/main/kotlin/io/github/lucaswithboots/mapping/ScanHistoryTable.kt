package com.example.mapping

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.kotlin.datetime.datetime

object ScanHistoryTable : IntIdTable("scan_history") {
    val id_user = reference("id_user", UserTable)
    val id_qrcode = reference("id_qrcode", QrCodeTable)
    val scan_time = datetime("scan_time")
    val location = varchar("location", 255)
}

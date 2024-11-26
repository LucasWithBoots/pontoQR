package com.example.model

import kotlinx.datetime.Clock
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import java.time.LocalDateTime

data class ScanHistory(
    val id: Int,
    val user: User,
    val qrcode: QrCode,
    val scan_time: kotlinx.datetime.LocalDateTime = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()),
    val location: String
)
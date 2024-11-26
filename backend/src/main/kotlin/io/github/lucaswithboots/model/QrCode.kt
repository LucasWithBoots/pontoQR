package com.example.model

import kotlinx.datetime.Clock
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.serialization.Serializable

@Serializable
data class QrCode(
    val id: Int,
    val id_creator: Int,
    val id_team: Int,
    val title: String,
    val description: String,
    val date_created: kotlinx.datetime.LocalDateTime = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()),
    val active: Boolean
)

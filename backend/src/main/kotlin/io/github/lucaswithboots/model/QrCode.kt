package com.example.model

import kotlinx.datetime.Clock
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import java.util.UUID

@Serializable
data class QrCode(
    val id: Int? = null,
    val id_creator: Int,
    val id_team: Int,
    @Contextual
    val payload: UUID = UUID.randomUUID(),
    val title: String,
    val description: String,
    val date_created: kotlinx.datetime.LocalDateTime = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()),
    val active: Boolean = true
)

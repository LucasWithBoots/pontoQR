package com.example.model

import kotlinx.datetime.Clock
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.serialization.Serializable
import java.time.LocalDateTime

@Serializable
data class User (
    val id: Int,
    val team: Team?,
    val name: String,
    val email: String,
    val password: String,
    val is_creator: Boolean,
    val date_created: kotlinx.datetime.LocalDateTime = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()),
    val active: Boolean
)
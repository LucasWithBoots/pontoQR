package com.example.model

import kotlinx.datetime.Clock
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime
import kotlinx.serialization.Serializable

@Serializable
data class Team(
    val id: Int? = null,
    val name: String,
    val date_created: kotlinx.datetime.LocalDateTime = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault()),
    val active: Boolean = true
)

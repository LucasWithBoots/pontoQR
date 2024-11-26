package io.github.lucaswithboots.model.request

import kotlinx.serialization.Serializable

@Serializable
data class UserLogin(
    val email: String,
    val password: String
)

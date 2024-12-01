package io.github.lucaswithboots.plugins

import io.github.lucaswithboots.exceptions.UnauthorizedException
import io.github.lucaswithboots.model.request.ErrorResponse
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*

fun Application.configureStatusPage() {
    install(StatusPages) {
        exception<UnauthorizedException> { call, cause ->
            call.respond(
                HttpStatusCode.Unauthorized,
                ErrorResponse(
                    HttpStatusCode.Unauthorized.value,
                    cause.message ?: "Unauthorized"
                ),
            )
        }
    }
}
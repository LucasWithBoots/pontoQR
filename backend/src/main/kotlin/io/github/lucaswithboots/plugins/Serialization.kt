package io.github.lucaswithboots.plugins

import io.github.lucaswithboots.repositories.qrcode.PostgresQrCodeRepository
import io.github.lucaswithboots.repositories.team.PostgresTeamRepository
import io.github.lucaswithboots.repositories.user.PostgresUserRepository
import io.github.lucaswithboots.routes.qrCodeRoute
import io.github.lucaswithboots.routes.teamRoute
import io.github.lucaswithboots.routes.userRoute
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureSerialization(
    userRepository: PostgresUserRepository,
    teamRepository: PostgresTeamRepository,
    qrCodeRepository: PostgresQrCodeRepository
) {
    install(ContentNegotiation) {
        json()
    }
    routing {
        userRoute(userRepository)
        teamRoute(teamRepository)
        qrCodeRoute(qrCodeRepository)
    }
}

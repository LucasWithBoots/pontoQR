package io.github.lucaswithboots

import io.github.lucaswithboots.plugins.*
import io.github.lucaswithboots.repositories.qrcode.PostgresQrCodeRepository
import io.github.lucaswithboots.repositories.team.PostgresTeamRepository
import io.github.lucaswithboots.repositories.user.PostgresUserRepository
import io.ktor.server.application.*

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    configureHTTP()

    configureSecurity(PostgresUserRepository())

    configureSerialization(
        PostgresUserRepository(),
        PostgresTeamRepository(),
        PostgresQrCodeRepository()
    )
    configureStatusPage()

    configureDatabases(environment.config)
}

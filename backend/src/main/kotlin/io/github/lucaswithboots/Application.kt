package io.github.lucaswithboots

import io.github.lucaswithboots.plugins.configureDatabases
import io.github.lucaswithboots.plugins.configureHTTP
import io.github.lucaswithboots.plugins.configureSecurity
import io.github.lucaswithboots.plugins.configureSerialization
import io.ktor.server.application.*

fun main(args: Array<String>) {
    io.ktor.server.netty.EngineMain.main(args)
}

fun Application.module() {
    configureSerialization()
    configureHTTP()
    configureSecurity()

    configureDatabases(environment.config)
}

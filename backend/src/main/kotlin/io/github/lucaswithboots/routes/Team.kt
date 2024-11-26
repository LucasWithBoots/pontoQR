package io.github.lucaswithboots.routes

import io.github.lucaswithboots.repositories.team.TeamRepository
import io.ktor.http.HttpStatusCode
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route

fun Route.teamRoute(teamRepository: TeamRepository) {
    route("/api/teams") {
        get {
            val teams = teamRepository.allTeams()
            call.respond(teams)
            return@get
        }
    }
}

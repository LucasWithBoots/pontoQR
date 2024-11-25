package io.github.lucaswithboots.routes

import com.example.model.User
import io.github.lucaswithboots.repositories.user.UserRepository
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.route

fun Route.userRoute(userRepository: UserRepository) {
    route("/api/users") {
        get {
            val users = userRepository.allUsers()
            call.respond(users)
            return@get
        }
    }
}


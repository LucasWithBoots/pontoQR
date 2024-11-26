package io.github.lucaswithboots.routes

import com.example.model.User
import io.github.lucaswithboots.repositories.user.UserRepository
import io.ktor.http.HttpStatusCode
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route

fun Route.userRoute(userRepository: UserRepository) {
    route("/api/users") {
        get {
            val users = userRepository.allUsers()
            call.respond(users)
            return@get
        }

        post {
            val user = call.receive<User>()
            userRepository.addUser(user)
            call.respond(HttpStatusCode.OK)
        }
    }
}


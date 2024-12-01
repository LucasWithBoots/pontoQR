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

        get("/me"){
            val authHeader = call.request.headers["Authorization"]

            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                call.respond(HttpStatusCode.Unauthorized, "Token não fornecido ou inválido")
                return@get
            }

            val token = authHeader.removePrefix("Bearer ")
            val user = userRepository.userByToken(token)

            if (user != null) {
                call.respond(user)
            } else {
                call.respond(HttpStatusCode.NotFound, "Usuário não encontrado")
            }
        }

        post {
            val user = call.receive<User>()
            userRepository.addUser(user)
            call.respond(HttpStatusCode.OK)
        }
    }
}


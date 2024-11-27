package io.github.lucaswithboots.plugins

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import io.github.lucaswithboots.model.request.UserLogin
import io.github.lucaswithboots.repositories.user.UserRepository
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import java.util.Date

fun Application.configureSecurity(userRepository: UserRepository) {
    val jwtAudience = environment.config.property("jwt.audience").getString()
    val jwtIssuer = environment.config.property("jwt.issuer").getString()
    val jwtRealm = environment.config.property("jwt.realm").getString()
    val jwtSecret = environment.config.property("jwt.secret").getString()
    authentication {
        jwt {
            realm = jwtRealm
            verifier(
                JWT
                    .require(Algorithm.HMAC256(jwtSecret))
                    .withAudience(jwtAudience)
                    .withIssuer(jwtIssuer)
                    .build()
            )
            validate { credential ->
                if (credential.payload.audience.contains(jwtAudience)) JWTPrincipal(credential.payload) else null
            }
            challenge { defaultScheme, realm ->
                call.respond(HttpStatusCode.Unauthorized, "Your JWT token is not valid or has expired")
            }
        }
    }

    routing {
        post("/api/login"){
            val (email, password) = call.receive<UserLogin>()
            val user = userRepository.userByEmail(email);

            if(user?.password == password){
                val token = JWT.create()
                    .withAudience(jwtAudience)
                    .withIssuer(jwtIssuer)
                    .withClaim("user_id", user.id)
                    .withClaim("isBoss", user.isBoss)
                    .withExpiresAt(Date(System.currentTimeMillis() + 30 * 60 * 1000)) // 30 minutes
                    .sign(Algorithm.HMAC256(jwtSecret))
                call.respond(hashMapOf("token" to token))

                call.respond(HttpStatusCode.OK)
            } else {
                call.respond(HttpStatusCode.Unauthorized, "Incorrect authentication credentials")
            }
        }
    }
}

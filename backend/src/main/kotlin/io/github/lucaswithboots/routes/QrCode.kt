package io.github.lucaswithboots.routes

import com.example.model.QrCode
import com.example.model.User
import io.github.lucaswithboots.repositories.qrcode.QrCodeRepository
import io.github.lucaswithboots.repositories.user.UserRepository
import io.ktor.http.HttpStatusCode
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route

fun Route.qrCodeRoute(qrCodeRepository: QrCodeRepository) {
    route("/api/qrcodes") {
        post {
            val qrcode = call.receive<QrCode>()
            qrCodeRepository.addQrCode(qrcode)
            call.respond(HttpStatusCode.OK)
        }
    }
}
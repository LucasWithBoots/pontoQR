package io.github.lucaswithboots.routes

import com.example.model.QrCode
import io.github.lucaswithboots.repositories.qrcode.QrCodeRepository
import io.ktor.http.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.qrCodeRoute(qrCodeRepository: QrCodeRepository) {
    route("/api/qrcodes") {
        post {
            val qrcode = call.receive<QrCode>()
            val createdQrCode = qrCodeRepository.addQrCode(qrcode)
            call.respond(HttpStatusCode.Created, createdQrCode)
        }
    }
}
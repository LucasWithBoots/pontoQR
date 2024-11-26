package io.github.lucaswithboots.repositories.qrcode

import com.example.model.QrCode

interface QrCodeRepository {
    suspend fun allQrCodes(): List<QrCode>
}
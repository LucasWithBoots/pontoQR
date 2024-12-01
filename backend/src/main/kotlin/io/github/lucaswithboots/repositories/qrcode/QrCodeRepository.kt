package io.github.lucaswithboots.repositories.qrcode

import com.example.model.QrCode

interface QrCodeRepository {
    suspend fun allQrCodes(): List<QrCode>
    suspend fun qrCodeById(id: Int): QrCode?
    suspend fun addQrCode(qrCode: QrCode): QrCode
    suspend fun updateQrCodeById(id: Int, qrCode: QrCode)
    suspend fun removeQrCodeById(id: Int): Boolean
}
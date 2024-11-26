package io.github.lucaswithboots.repositories.qrcode

import com.example.mapping.QrCodeTable
import com.example.model.QrCode
import io.github.lucaswithboots.plugins.suspendTransaction
import org.jetbrains.exposed.sql.insert

class PostgresQrCodeRepository: QrCodeRepository {
    override suspend fun allQrCodes(): List<QrCode> {
        TODO("Not yet implemented")
    }

    override suspend fun qrCodeById(id: Int): QrCode? {
        TODO("Not yet implemented")
    }

    override suspend fun addQrCode(qrCode: QrCode): Unit = suspendTransaction {
        QrCodeTable.insert{
            it[id_creator] = qrCode.id_creator
            it[id_team] = qrCode.id_team
            it[payload] = qrCode.payload
            it[title] = qrCode.title
            it[description] = qrCode.description
            it[date_created] = qrCode.date_created
            it[active] = qrCode.active
        }
    }

    override suspend fun updateQrCodeById(id: Int, qrCode: QrCode) {
        TODO("Not yet implemented")
    }

    override suspend fun removeQrCodeById(id: Int): Boolean {
        TODO("Not yet implemented")
    }
}
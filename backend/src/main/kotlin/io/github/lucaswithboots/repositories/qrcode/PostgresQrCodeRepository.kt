package io.github.lucaswithboots.repositories.qrcode

import com.example.mapping.QrCodeTable
import com.example.mapping.mapRowToQrCode
import com.example.model.QrCode
import io.github.lucaswithboots.plugins.suspendTransaction
import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.selectAll

class PostgresQrCodeRepository : QrCodeRepository {
    override suspend fun allQrCodes(): List<QrCode> = suspendTransaction {
        QrCodeTable.selectAll().map(::mapRowToQrCode)
    }

    override suspend fun qrCodeById(id: Int): QrCode? {
        TODO("Not yet implemented")
    }

    override suspend fun addQrCode(qrCode: QrCode): QrCode = suspendTransaction {
        val id = QrCodeTable.insertAndGetId {
            it[id_creator] = qrCode.id_creator
            it[id_team] = qrCode.id_team
            it[payload] = qrCode.payload
            it[title] = qrCode.title
            it[description] = qrCode.description
            it[date_created] = qrCode.date_created
            it[active] = qrCode.active
        }.value

        QrCode(
            id = id,
            id_creator = qrCode.id_creator,
            id_team = qrCode.id_team,
            payload = qrCode.payload,
            title = qrCode.title,
            description = qrCode.description,
            date_created = qrCode.date_created,
            active = qrCode.active
        )
    }

    override suspend fun updateQrCodeById(id: Int, qrCode: QrCode) {
        TODO("Not yet implemented")
    }

    override suspend fun removeQrCodeById(id: Int): Boolean {
        TODO("Not yet implemented")
    }
}
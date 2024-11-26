package com.example.mapping

import com.example.model.Team
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.kotlin.datetime.datetime

object TeamTable: IntIdTable("team"){
    val name = varchar("name", 255)
    val date_created = datetime("date_created")
    val active = bool("active")
}

fun mapRowToTeam(row: ResultRow) = Team(
    id = row[TeamTable.id].value,
    name = row[TeamTable.name],
    date_created = row[TeamTable.date_created],
    active = row[TeamTable.active]
)
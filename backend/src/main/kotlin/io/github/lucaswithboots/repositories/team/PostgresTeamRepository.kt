package io.github.lucaswithboots.repositories.team

import com.example.mapping.TeamTable
import com.example.mapping.mapRowToTeam
import com.example.model.Team
import io.github.lucaswithboots.plugins.suspendTransaction
import org.jetbrains.exposed.sql.selectAll

class PostgresTeamRepository: TeamRepository {
    override suspend fun allTeams(): List<Team> = suspendTransaction {
        TeamTable.selectAll().map(::mapRowToTeam)
    }

    override suspend fun teamById(id: Int): Team? {
        TODO("Not yet implemented")
    }

    override suspend fun addTeam(team: Team) {
        TODO("Not yet implemented")
    }

    override suspend fun updateTeamById(id: Int, team: Team) {
        TODO("Not yet implemented")
    }

    override suspend fun removeTeamById(id: Int): Boolean {
        TODO("Not yet implemented")
    }

}
package io.github.lucaswithboots.repositories.team

import com.example.model.Team

interface TeamRepository {
    suspend fun allTeams(): List<Team>
    suspend fun teamById(id: Int): Team?
    suspend fun addTeam(team: Team)
    suspend fun updateTeamById(id: Int, team: Team)
    suspend fun removeTeamById(id: Int): Boolean
}
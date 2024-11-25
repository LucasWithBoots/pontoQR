package io.github.lucaswithboots.repositories.user

import com.example.mapping.UserTable
import com.example.mapping.mapRowToModel
import com.example.model.User
import io.github.lucaswithboots.plugins.suspendTransaction
import org.jetbrains.exposed.sql.selectAll

class PostgresUserRepository: UserRepository {
    override suspend fun allUsers(): List<User> = suspendTransaction {
        UserTable.selectAll().map(::mapRowToModel)
    }

    override suspend fun userById(id: Int): User? {
        TODO("Not yet implemented")
    }

    override suspend fun addUser(user: User) {
        TODO("Not yet implemented")
    }

    override suspend fun updateUserById(id: Int, user: User) {
        TODO("Not yet implemented")
    }

    override suspend fun removeUserById(id: Int): Boolean {
        TODO("Not yet implemented")
    }
}
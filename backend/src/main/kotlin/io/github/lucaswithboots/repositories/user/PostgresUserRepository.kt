package io.github.lucaswithboots.repositories.user

import com.example.mapping.UserTable
import com.example.mapping.mapRowToModel
import com.example.model.User
import io.github.lucaswithboots.plugins.suspendTransaction
import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll

class PostgresUserRepository: UserRepository {
    override suspend fun allUsers(): List<User> = suspendTransaction {
        UserTable.selectAll().map(::mapRowToModel)
    }

    override suspend fun userById(id: Int): User? {
        TODO("Not yet implemented")
    }

    override suspend fun addUser(user: User): Unit = suspendTransaction{
        UserTable.insert {
            it[id_team] = user.id_team
            it[name] = user.name
            it[email] = user.email
            it[password] = user.password
            it[isBoss] = user.isBoss
            it[date_created] = user.date_created
            it[active] = user.active
        }
    }

    override suspend fun updateUserById(id: Int, user: User) {
        TODO("Not yet implemented")
    }

    override suspend fun removeUserById(id: Int): Boolean {
        TODO("Not yet implemented")
    }

    override suspend fun userByEmail(email: String): User? = suspendTransaction{
       UserTable.selectAll()
           .where { UserTable.email eq email }
           .map(::mapRowToModel)
           .singleOrNull()
    }
}
package io.github.lucaswithboots.repositories.user

import com.example.model.User

interface UserRepository {
    suspend fun allUsers(): List<User>
    suspend fun userById(id: Int): User?
    suspend fun addUser(user: User)
    suspend fun updateUserById(id: Int, user: User)
    suspend fun removeUserById(id: Int): Boolean
}
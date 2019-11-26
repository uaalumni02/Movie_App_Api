class Db {
    
    static async findUser(model, username) {
      try {
        const user = await model.findOne({ username })
        return user
      } catch (error) {
        throw error;
      }
    }
    static async saveUser(model, user) {
      try {
        const newUser = await model({ ...user });
        return newUser.save();
      } catch (error) {
        throw error;
      }
    }
    static async getAllUsers(model) {
      try {
        const allUsers = await model.find({});
        return allUsers
      } catch (error) {
        throw error;
      }
    }
    static async getUserById(model, id) {
      try {
        const user = await model.findById(id)
        return user
      } catch (error) {
        throw error;
      }
    }
    static async removeUser(model, id) {
      try {
        const deleteUser = await model.findOneAndDelete({ _id: id })
        return {}
      } catch (error) {
        throw error
      }
    }
    static async addMovie(model, data) {
      try {
        const newMovie = await model({ ...data })
        return newMovie.save();
      } catch (error) {
        throw error;
      }
    }
    static async getMovies(model, userId) {
      try {
        const movies = await model.find({userId})
        return movies
      } catch (error) {
        throw error;
      }
    }
    static async removeMovie(model, id) {
      try {
        const deleteMovie = await model.findOneAndDelete({ _id: id })
        return {}
      } catch (error) {
        throw error
      }
    }
    static async updateMovieData(model, userId, movieId, movieData) {
      try {
        // const updateMovie = await model.findOneAndUpdate({ ...data })
        const filter = { _id: movieId, userId }
        const updatedMovie = await model.findOneAndUpdate(filter, movieData, { new: true })
        return updatedMovie
      } catch (error) {
        throw error
      }
    }
  }
  
  
  
  export default Db;
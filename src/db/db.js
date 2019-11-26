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
  }
  
  export default Db;
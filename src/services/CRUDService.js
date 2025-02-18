import db from '../models/index.js';
const { User } = db;

const createNewUser = async (data) => {
  try {
    if (!data.email || !data.name) {
      throw new Error('Missing required fields: name or email');
    }

    const newUser = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    return `User ${newUser.name} created successfully!`;
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }
};

const getAllUser = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error.message);
    throw error;
  }
};

const updateUser = async (id, updatedData) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    await user.update(updatedData);
    return `User ${user.name} updated successfully!`;
  } catch (error) {
    console.error('Error updating user:', error.message);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }

    await user.destroy();
    return `User ${user.name} deleted successfully!`;
  } catch (error) {
    console.error('Error deleting user:', error.message);
    throw error;
  }
};

// ✅ Fix: Export everything as default
export default {
  createNewUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
};

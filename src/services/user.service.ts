import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";

export const userService = {
  getAll() {
    return userRepository.findAll().map(u => new UserModel(u));
  },
  create(data: { name: string; role: string }) {
    // Memanggil fungsi create dari repository
    userRepository.create(data);
  },
  delete(id: number) {
    userRepository.delete(id);
  }
};
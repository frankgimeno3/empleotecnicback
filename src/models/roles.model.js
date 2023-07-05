// src/models/roleModel.js
import mongoose from 'mongoose'; 

export const ROLES = ["empleado", "empresa", "admin"];

const roleSchema = new mongoose.Schema(
    {
        name: String,
      },
      {
        versionKey: false,
      });

const role = mongoose.model('role', roleSchema);

export default role;
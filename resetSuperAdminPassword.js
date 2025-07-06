// resetSuperAdminPassword.js
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import User from './models/userModel.js'
import connectDB from './db.js'

dotenv.config()
await connectDB()

const email = 'dkedubus1997@gmail.com'
const newPassword = '123456'

const user = await User.findOne({ email })

if (user) {
  user.password = await bcrypt.hash(newPassword, 10)
  await user.save()
  console.log('✅ Super Admin password has been reset to 123456')
} else {
  console.log('❌ Super Admin not found')
}

process.exit()

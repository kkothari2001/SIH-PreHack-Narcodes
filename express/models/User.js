import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        age: {
            type: Number
        },
        number: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        tutor: {
            type: Boolean
        },
        bio: {
            type: String
        },
        keywords: {
            type: Object
        },
        searched_keywords: {
            type: Object
        }
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    const user = this;
    try {
      if (!user.isModified("password")) {
        return next();
      }
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      return next();
    } catch (err) {
      return next(err);
    }
});

userSchema.pre("findOneAndUpdate", async function (next) {
    const user = this._update;
    try {
      if (!user.password) {
        return next();
      }
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      return next();
    } catch (err) {
      return next(err);
    }
  });
  
  const comparePassword = async function (candidatePassword, next) {
    try {
      const isMatch = await bcrypt.compare(candidatePassword, this.password);
      return isMatch;
    } catch (err) {
      next(err);
      return false;
    }
  };
  
  userSchema.methods.comparePassword = comparePassword;

const User = mongoose.model("User", userSchema);
export default User;
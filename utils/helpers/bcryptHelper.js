import bcrypt from "bcryptjs";

export const hashValue = async (value, saltRounds = 10) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(value, salt);
  return hashedPassword;
};

export const compareValue = async (value, hashedValue) => {
  const isPasswordCorrect = await bcrypt.compare(value, hashedValue);
  return isPasswordCorrect;
};

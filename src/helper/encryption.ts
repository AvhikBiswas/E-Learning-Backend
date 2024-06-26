import bcrypt from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10; 
    return await bcrypt.hash(password, saltRounds);
  }

  export async function comparePasswords(plaintextPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plaintextPassword, hashedPassword);
  }
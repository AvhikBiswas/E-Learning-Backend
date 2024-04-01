export interface UserPayload {
  email: string;
  name: string;
  password: string;
  profilePicture?: string;
}

export interface userUpdatePayload {
  id: string;
  newEmail?: string;
  newName?: string;
  newPassword?: string;
  newProfilePicture?: string;
}

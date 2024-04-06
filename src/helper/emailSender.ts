import { Resend } from "resend";

const resend = new Resend("re_WQfi1K9A_3Fe9X3o5SrpviGqNUXMZimYL");

export const sendRegistrationConfirmationEmail = async (
  email: string,
  name: string
) => {
try {
   return resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Welcome to Our Application!",
      html: `<p>Hi ${name},</p>
             <p>Thank you for registering with us. Your account has been successfully created!</p>
             <p>Best regards,</p>
             <p>The Application Team</p>`,
    });
} catch (error) {
  return error
  
}
};

export const sendPasswordResetEmail = async (email: string, OTP: string) => {
  await resend.emails.send({
    from: "support@resend.dev",
    to: email,
    subject: "Password Reset Request",
    html: `<p>Hello,</p>
           <p>You have requested to reset your password. enter this ${OTP} to reset your password.</p>
           <p>If you did not request this, please ignore this email.</p>
           <p>Best regards,</p>
           <p>The Application Team</p>`,
  });
};

export const sendCourseEnrollmentNotification = (
  email: string,
  courseName: string
) => {
  resend.emails.send({
    from: "notifications@resend.dev",
    to: email,
    subject: "Course Enrollment Notification",
    html: `<p>Hi,</p>
           <p>You have successfully enrolled in the course "${courseName}".</p>
           <p>Best regards,</p>
           <p>The Application Team</p>`,
  });
};

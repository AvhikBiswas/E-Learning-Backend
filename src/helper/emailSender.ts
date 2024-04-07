import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendRegistrationConfirmationEmail = async (
  email: string,
  name: string
) => {
  try {
     resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Welcome to Our Application!",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #333; text-align: center;">Welcome ${name}!</h2>
        <p style="font-size: 16px; color: #555;">Thank you for registering with us. Your account has been successfully created!</p>
        <p style="font-size: 16px; color: #555;">Best regards,</p>
        <p style="font-size: 16px; color: #555;">The Application Team</p>
      </div>
      `,
    });
  } catch (error) {
    return error;
  }
};

export const sendPasswordResetEmail = async (email: string, OTP: string) => {
  await resend.emails.send({
    from: "support@resend.dev",
    to: email,
    subject: "Password Reset Request",
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #333; text-align: center;">Password Reset Request</h2>
      <p style="font-size: 16px; color: #555;">Hello,</p>
      <p style="font-size: 16px; color: #555;">You have requested to reset your password. Please use this OTP: <strong><span style="background-color: #ffcc00; padding: 3px; border-radius: 5px; cursor: pointer;" onclick="copyToClipboard('${OTP}')">${OTP}</span></strong> to reset your password.</p>
      <p style="font-size: 16px; color: #555;">If you did not request this, please ignore this email.</p>
      <p style="font-size: 16px; color: #555;">Best regards,</p>
      <p style="font-size: 16px; color: #555;">The Application Team</p>
    </div>
    <script>
      function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
        alert('OTP copied to clipboard!');
      }
    </script>
    `,
  });
};

export const sendCourseEnrollmentNotification = async(
  email: string,
  courseName: string
) => {
try {
  return await resend.emails.send({
      from: "notifications@resend.dev",
      to: email,
      subject: "Course Enrollment Notification",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #333; text-align: center;">Course Enrollment Notification</h2>
        <p style="font-size: 16px; color: #555;">Hi,</p>
        <p style="font-size: 16px; color: #555;">You have successfully enrolled in the course "${courseName}".</p>
        <p style="font-size: 16px; color: #555;">Best regards,</p>
        <p style="font-size: 16px; color: #555;">The Application Team</p>
      </div>
      `,
    });
} catch (error) {
  return error;
  
}
};

export function calcPasswordStrength(password) {
  if (!password) {
    return 0; // No password provided
  }

  let strength = 0;
  const length = password.length;

  // Check length
  if (length >= 8) {
    strength += 1; // Length criteria met
  }

  // Check for uppercase letters
  if (/[A-Z]/.test(password)) {
    strength += 1; // Uppercase letter criteria met
  }

  // Check for lowercase letters
  if (/[a-z]/.test(password)) {
    strength += 1; // Lowercase letter criteria met
  }

  // Check for numbers
  if (/\d/.test(password)) {
    strength += 1; // Number criteria met
  }

  // Check for special characters
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    strength += 1; // Special character criteria met
  }

  // Check for common patterns (e.g., "1234", "password")
  const commonPatterns = ["1234", "password"];

  for (const pattern of commonPatterns) {
    if (password.includes(pattern)) {
      strength -= 1; // Reduce strength for common patterns
    }
  }

  // Ensure strength is not negative
  if (strength < 0) {
    strength = 0;
  }

  
  // Cap strength at a maximum value (e.g., 5)
  if (strength > 5) {
    strength = 5;
  }

  // Return the result with different text and styles
  let text = "";
  let style = "";
  let width = "w-0";

  switch (strength) {
    case 1:
      text = "Very Weak";
      style = "bg-red-500";
      width = "w-1/5";
      break;
    case 2:
      text = "Fair";
      style = "bg-orange-500";
      width = "w-2/5";
      break;
    case 3:
      text = "Good";
      style = "bg-yellow-500";
      width = "w-3/5";
      break;
    case 4:
      text = "Strong";
      style = "bg-lime-500";
      width = "w-4/5";
      break;
    case 5:
      text = "Very Strong";
      style = "bg-green-500";
      width = "w-full";
      break;

    default:
      text = "No Password";
      style = "bg-gray-500";
      width = "w-0";
  }

  return { strength, text, style, width };
}

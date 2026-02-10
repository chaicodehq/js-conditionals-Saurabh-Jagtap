/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  if (typeof password !== 'string' || password == "") {
    return "weak"
  }

  let criteria = 0;
  let uppercase = Boolean
  let uppercount = 0;

  let lowercase = Boolean
  let lowercount = 0;

  let number = Boolean
  let numbercount = 0

  let specialchar = Boolean
  const specialCharsRegex = /[^\w\s]/;
  let specialcount = 0

  let passlength = 0;

  if (password.length >= 8) {
    passlength++
  }

  for (const i of password) {
    uppercase = /[A-Z]/.test(i)
    lowercase = /[a-z]/.test(i)
    specialchar = specialCharsRegex.test(i)
    number = /[0-9]/.test(i)

    if (uppercase === true && uppercount == 0) {
      uppercount++
    } else if (lowercase === true && lowercount == 0) {
      lowercount++
    } else if (number === true && numbercount == 0) {
      numbercount++
    } else if (specialchar === true && specialcount == 0) {
      specialcount++
    }
  }

  criteria = passlength + uppercount + lowercount + numbercount + specialcount

  if (criteria <= 1) {
    return "weak"
  } else if (criteria <= 3) {
    return "medium"
  } else if (criteria == 4) {
    return "strong"
  } else {
    return "very strong"
  }
}

import {z} from 'zod';
import {msg} from '@lit/localize';

const phoneRegex = /^05[0-9]{9}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
};

export const EmployeeSchema = z.object({
  firstName: z
    .string()
    .min(2, msg('First name must be at least 2 characters'))
    .max(50, msg('First name must be at most 50 characters'))
    .regex(
      /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/,
      msg('First name can only contain letters')
    ),

  lastName: z
    .string()
    .min(2, msg('Last name must be at least 2 characters'))
    .max(50, msg('Last name must be at most 50 characters'))
    .regex(
      /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/,
      msg('Last name can only contain letters')
    ),

  dateOfBirth: z
    .string()
    .refine(isValidDate, msg('Please enter a valid date of birth'))
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 18;
    }, msg('Must be at least 18 years old')),

  dateOfEmployment: z
    .string()
    .refine(isValidDate, msg('Please enter a valid employment date'))
    .refine((date) => {
      const employmentDate = new Date(date);
      const today = new Date();
      return employmentDate <= today;
    }, msg('Employment date cannot be in the future')),

  phone: z
    .string()
    .regex(
      phoneRegex,
      msg('Please enter a valid phone number (e.g., 05325999999)')
    ),

  email: z
    .string()
    .email(msg('Please enter a valid email address'))
    .regex(emailRegex, msg('Please enter a valid email format')),

  department: z.string().min(1, msg('Please select a department')),

  position: z
    .enum(['Junior', 'Medior', 'Senior'])
    .refine((val) => val !== undefined, msg('Please select a valid position')),
});

export const validateEmployeeForm = (data) => {
  return EmployeeSchema.safeParse(data);
};

export const getFieldError = (errors, fieldName) => {
  const fieldError = errors.issues.find((error) =>
    error.path.includes(fieldName)
  );
  return fieldError?.message || '';
};

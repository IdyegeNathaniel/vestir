import { z } from "zod";

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.email().min(1, "Email is required!"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits!")
    .max(11, "Phone number must be between 7 and 10 digits!")
    .regex(/^\d+$/, "Phone number must contain only numbers"),
  address: z.string().min(3, "Address is required!"),
  city: z.string().min(3, "City is required!"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  holdername: z.string().min(4, "Holder name is required!"),
  cardnumber: z
    .string()
    .min(15, "Card number must be between 15-17 !")
    .max(17, "Card number must be between 15-17!")
    .regex(/^\d+$/, "Card number must contain only numbers"),
  expirationdate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in the MM/YY format!"),
  cvv: z.string().min(3, "cvv is required!").max(3, "cvv is required!"),
});                                 

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

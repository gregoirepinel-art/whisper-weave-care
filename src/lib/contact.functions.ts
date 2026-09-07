import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom.").max(120),
  email: z.string().trim().email("Adresse e-mail invalide.").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  audience: z.enum(["particulier", "entreprise"]),
  message: z.string().trim().min(10, "Merci de détailler un peu votre demande.").max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabase.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      audience: data.audience,
      message: data.message,
    });

    if (error) {
      throw new Error("L'envoi a échoué. Merci de réessayer ou d'appeler le cabinet.");
    }

    return { ok: true as const };
  });

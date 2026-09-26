import { ContactFormProvider } from "@/app/providers/ContactFormProvider";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContactFormProvider>
      {children}
    </ContactFormProvider>
  );
}
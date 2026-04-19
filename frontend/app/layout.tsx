import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/contexts/auth';

export const metadata: Metadata = {
  title: 'The Rich Look Saloon - Book Your Beauty Appointment',
  description: 'Premium salon management platform with easy appointment booking, expert stylists, and beautiful service experiences.',
  keywords: 'salon, beauty, haircut, appointment booking, styling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
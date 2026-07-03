import type { Metadata } from 'next';
import { Inter, Sora, Space_Mono, Poppins } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteMetadata, softwareAppSchema, faqSchema } from '@/config/site';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins-google',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-google',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora-google',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono-google',
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${inter.variable} ${sora.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


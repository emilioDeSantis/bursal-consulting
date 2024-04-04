import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";

export const revalidate = 1;

export const metadata = {
    openGraph: {
        title: 'Building Success Through Expertise | Bursal Consulting and Management',
        description: 'Led by President Zeynep Bursal, Bursal Consulting and Management offers multifaceted construction services including project management, estimating, risk assessment, and scheduling. Proudly DBE and WBE certified, we bring precision and reliability to every project.',
      url: 'https://www.bursalconsulting.com/',
      siteName: 'bursalconsulting.com',
      images: [
        {
          url: 'https://bursal-consulting.vercel.app/opengraph-image.png',
          width: 600,
          height: 900,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    title: 'Building Success Through Expertise | Bursal Consulting and Management',
    description: 'Led by President Zeynep Bursal, Bursal Consulting and Management offers multifaceted construction services including project management, estimating, risk assessment, and scheduling. Proudly DBE and WBE certified, we bring precision and reliability to every project.',
  };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

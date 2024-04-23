import "./globalStyle/reset.css";
import "./globalStyle/globals.css";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import Intro from "./../components/intro/index.js";
import Header from "./../components/header/index.js";
import Footer from "./../components/footer/index.js";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Arthur Rabelo",
  description: "Desenvolvedor web apaixonado por tecnologia, cursando Análise e Desenvolvimento de Software no IESB, em busca de oportunidades para inovar.",
  author: "Arthur Rabelo",
  ogTitle: "Portfolio - Arthur Rabelo",
  ogDescription: "Desenvolvedor web apaixonado por tecnologia, cursando Análise e Desenvolvimento de Software no IESB, em busca de oportunidades para inovar.",
  ogImage: "https://avatars.githubusercontent.com/u/76632630?s=400&u=7d5ac67ee731cae098da14491e34de9f30ff18de&v=4",
  ogUrl: "https://arthurrabelo.com.br",
  appleTouchIconHref: "/favicon/apple-touch-icon.png",
  icon32Href: "/favicon/favicon-32x32.png",
  icon16Href: "/favicon/favicon-16x16.png",
  manifestHref: "/favicon/site.webmanifest",
  maskIconHref: "/favicon/safari-pinned-tab.svg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="author" content={metadata.author} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.ogUrl} />
        <link rel="apple-touch-icon" sizes="180x180" href={metadata.appleTouchIconHref} />
        <link rel="icon" type="image/png" sizes="32x32" href={metadata.icon32Href} />
        <link rel="icon" type="image/png" sizes="16x16" href={metadata.icon16Href} />
        <link rel="manifest" href={metadata.manifestHref} />
        <link rel="mask-icon" href={metadata.maskIconHref} color="#5bbad5" />
        <link rel="stylesheet" href={inter.url} />
      </head>

      <body className={inter.className}>
        <Intro />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

// app/layout.js
import "../styles/global.scss";
import Script from "next/script";
import React from "react";

// Meta tags are placed inside metadata object in Next.js 14
export const metadata = {
  title: "RealEstatePro",
  description: "RealEstatePro",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 3,
    minimumScale: 0.5,
  },
  themeColor: "#fd5632",
  applicationName: "RealEstatePro",
  appleMobileWebAppCapable: "yes",
  mobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "black-translucent",
  appleMobileWebAppTitle: "RealEstatePro",
  msapplicationNavbuttonColor: "#fd5632",
  msapplicationStarturl: "/",
  icons: {
    icon: "/media/static/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NM1QZT2140"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NM1QZT2140');
            `,
          }}
        />
      </head>
      <body>
        {/* Your page content */}
        {children}
      </body>
    </html>
  );
}

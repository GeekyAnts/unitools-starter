"use client";

import { Inter,Cedarville_Cursive } from "next/font/google";
import StyledJsxRegistry from "./registry";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "@unitools/fonts";


const inter = Inter({ subsets: ["latin"] ,variable:'--inter'});
const cursive = Cedarville_Cursive({ subsets: ["latin"] ,weight:'400',variable:'--cursive'});

const fonts=[inter,cursive]

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loaded, error, variables } = useFonts(fonts);
  return (
    <html lang="en">
      <body className={variables} style={{ display: "flex" ,flex:1,minHeight:'100vh',minWidth:'100vw',justifyContent:'center',alignItems:'center'}}>
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light">{children}</GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}

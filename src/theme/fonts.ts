import { Montserrat, Inter, Allerta, Poppins } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const allerta = Allerta({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
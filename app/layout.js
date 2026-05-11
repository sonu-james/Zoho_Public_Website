
import "./globals.css";

export const metadata = {
  title: "Dubai Luxury Properties",
  description: "UAE Luxury Real Estate Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app/layout.tsx
import "./globals.css"; // ← ADD THIS LINE

export const metadata = {
  title: "Dimas Prayoga — Data Analyst",
  description: "Portfolio of Dimas Prayoga (SQL, Python, BI)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

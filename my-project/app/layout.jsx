export const metadata = {
  title: "Website Sedang Dalam Perkembangan",
  description: "Kami sedang memperbarui tampilan dan fitur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}

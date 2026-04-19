export const metadata = {
  title: "Mimi Essence",
  description: "A digital self portrait"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:'Arial, sans-serif',background:'#000',color:'#fff'}}>
        {children}
      </body>
    </html>
  );
}

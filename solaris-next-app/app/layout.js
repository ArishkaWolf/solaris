import "./globals.css";
import Header from './components/Header';

export const metadata = {
  title: "Новошахтинский драматический театр",
  description: "Мобильный сайт театра",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

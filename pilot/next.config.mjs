import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'app.jimibrasil.com.br',
            port: '',
            pathname: '/assets/img/logo_jimi.png',
          },
        ],
      },
};
 
export default withNextIntl(nextConfig);
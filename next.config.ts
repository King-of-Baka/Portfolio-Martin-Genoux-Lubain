import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sécurisation via les headers HTTP
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN' // Empêche ton site d'être affiché dans une iframe (anti-clickjacking)
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff' // Empêche le navigateur de deviner le type de fichier
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
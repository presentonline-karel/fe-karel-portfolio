/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    domains: [
      "be-karel-portfolio.int"
    ],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "be-karel-portfolio",
			},
		],
	},
};

module.exports = nextConfig;

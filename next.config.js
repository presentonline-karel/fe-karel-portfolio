/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
            "be-karel-portfolio.int",
            "cms-portfolio.presentonline.be"
        ],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "be-karel-portfolio",
			},
            {
				protocol: "https",
				hostname: "cms-portfolio.presentonline.be",
			},
		],
	},
};

module.exports = nextConfig;

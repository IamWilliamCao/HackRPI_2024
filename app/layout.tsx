import { Metadata } from "next";
export const metadata: Metadata = {
	title: "HackRPI 2024",
	description:
		"HackRPI is RPI&apos;s annual intercollegiate hackathon hosted by students for students. Get swag and free food as you compete for exciting prizes! With a broad range of workshops and mentors on-site, there’s no experience necessary to attend.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

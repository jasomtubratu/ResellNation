import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import {
	DiscordIcon,
} from "@/components/icons";
import Image from "next/image";


export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="xl" shouldHideOnScroll>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Image src={"/logo.webp"} width={64} height={64} alt={"Logo"}/>
						<p className="font-bold text-inherit">ResellNation.eu</p>
					</NextLink>
				</NavbarBrand>
				
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href="/discord" aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href="/discord" aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
								</NavbarContent>

			
		</NextUINavbar>
	);
};

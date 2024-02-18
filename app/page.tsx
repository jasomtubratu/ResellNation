"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import { Accordion, AccordionItem, Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider, Textarea, Image, Spacer, ScrollShadow, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { MailIcon } from "@/components/Mailcon";
import Starfield from "@/components/StarField";


export default function Home() {
	const [buttonLoading, setButtonLoading] = useState(false);
	const [formInfo, setformInfo] = useState("");

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: ""
	})

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const urlParams = new URLSearchParams(window.location.search);
			const affiliate = urlParams.get('af');

			if (affiliate) {
				localStorage.setItem("af", affiliate);
			}
		}
	}, []);

	async function submitContact() {
		setButtonLoading(true)

		try {
			const response = await fetch("/api/sendcontact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData)
			});
			if (response.ok) {
				setformInfo("The message has been successfully sent to our team")
			} else {
				setformInfo("There was an error when sending the message :(")
			}
		} catch (e) {
			console.error(e)
		}
		setButtonLoading(false)
	}

	return (
		<>
			<div aria-hidden="true" className="pointer-events-none absolute -top-[30rem] right-1/2 h-[80rem] w-[113.125rem] max-w-full translate-x-1/2 touch-none overflow-visible">
				<img alt="bg gradient" className="h-full w-full overflow-visible object-none opacity-50" loading="lazy" src="/gradient.webp" />
			</div>
			<div
				aria-hidden="true"
				className="pointer-events-none fixed top-0 left-0 h-screen w-screen z-[-1]"
			>
				<img
					alt="bg gradient"
					className="h-full w-full object-cover opacity-50"
					loading="lazy"
					src="/gradient.webp"
				/>
			</div>

			<Starfield
				starCount={1000}
				starColor={[255, 255, 255]}
				speedFactor={0.05}
				backgroundColor="black"
			/>

			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Make Money with the&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>EASY WAY&nbsp;</h1>
					<br />

					<h2 className={subtitle({ class: "mt-4" })}>
						Make money with reselling tickets!
					</h2>
				</div>

				<div className="flex gap-3">
					<Link
						isExternal
						href={"/discord"}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						Join our Discord server
					</Link>

				</div>
			</section>

			<Divider className="my-4" />
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h2 className={title({ class: "mt-4" })}>What is ResellNation?</h2>
					<Card style={{ marginTop: "20px", maxWidth: "500px" }}>
						<CardBody>
							<ScrollShadow className="h-[300px]">
								<h5 style={{ textAlign: "center" }}>
									We at Resell Nation are united by our love of ticket reselling and our desire to impart our expertise to you. Resell Nation is a community of people where everyone can find a place, not just a business. Our past goes far into the realm of events, where we learned things and made the decision to share them with others. We've established a space for those who wish to push the envelope and learn more about the possibilities of ticket reselling.
								</h5>
								<br />
								<h5 style={{ textAlign: "center" }}>
									Our team comprises seasoned experts who will not only impart industry knowledge to you but also cultivate a supportive and cooperative atmosphere. We make huge purchases and sales every day.
								</h5>
								<br />
								<h5 style={{ textAlign: "center" }}>
									We research and then purchase different sporting events or concerts around the world. We think that each and every one of you can make such progress with our help!Come join us and be a part of this special community where sharing your excitement and accomplishments and realizing your full potential go hand in hand with tickets.
								</h5>
							</ScrollShadow>
						</CardBody>
					</Card>
				</div>
			</section>


			<Divider className="my-4" />
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<h2 className={title({ class: "mt-4" })}>The results of our work</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto" style={{ marginTop: "20px" }}>
					<Card isFooterBlurred radius="lg" className="border-none">
						<Image
							alt="Woman listening to music"
							className="object-cover"
							height={200}
							src="/party.webp"
							width={200}
						/>
						<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
							<p className="text-tiny text-white/80">Bruno mars</p>
							<Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
								2318€
							</Button>
						</CardFooter>
					</Card>
					<Card isFooterBlurred radius="lg" className="border-none">
						<Image
							alt="Woman listening to music"
							className="object-cover"
							height={200}
							src="/taylor.webp"
							width={200}
						/>
						<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
							<p className="text-tiny text-white/80">Taylor Swift</p>
							<Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
								4325€
							</Button>
						</CardFooter>
					</Card>
					<Card isFooterBlurred radius="lg" className="border-none">
						<Image
							alt="Woman listening to music"
							className="object-cover"
							height={200}
							src="/euro.svg"
							width={200}
						/>
						<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
							<p className="text-tiny text-white/80">EuroVision</p>
							<Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
								5854€
							</Button>
						</CardFooter>
					</Card>
				</div>
			</section>


			<Divider className="my-4" />
			<section className="flex flex-col items-center py-8 md:py-10">
				<div className="max-w-lg text-center justify-center mb-4">
					<h2 className={title({ class: "mt-4" })}>Our reviews</h2>
				</div>

				<div className="grid gap-4 md:flex md:flex-row md:gap-0">
					<Card className="flex-shrink-0 max-w-full md:max-w-[400px]">
						<CardHeader className="flex gap-3">
							<Avatar />
							<div className="flex flex-col">
								<p className="text-md">Thomas</p>
							</div>
						</CardHeader>
						<Divider />
						<CardBody>
							<ScrollShadow className="h-[200px]">
								<p>
									Resell Nation has redefined my ticket reselling experience. The team's expertise not only provides valuable insights into the industry but also fosters a supportive community. Their global-scale operations and commitment to individual growth make Resell Nation stand out as a game-changer in the reselling landscape. If you're seeking more than just transactions – a community that celebrates success and shares knowledge – Resell Nation is the ideal platform. Highly recommended for anyone looking to elevate their ticket reselling endeavors.
								</p>
							</ScrollShadow>
						</CardBody>
					</Card>
					<Spacer x={4} className="hidden md:block" />
					<Card className="flex-shrink-0 max-w-full md:max-w-[400px]">
						<CardHeader className="flex gap-3">
							<Avatar />
							<div className="flex flex-col">
								<p className="text-md">Lukáš</p>
							</div>
						</CardHeader>
						<Divider />
						<CardBody>
							<p>Resell Nation helped me a lot! I was afraid at the beginning, but now I don't regret it, I recommend everyone to at least try it. The team was happy to help me whenever and their tips and tricks were also understandable.</p>
						</CardBody>
					</Card>
					<Spacer x={4} className="hidden md:block" />
					<Card className="flex-shrink-0 max-w-full md:max-w-[400px]">
						<CardHeader className="flex gap-3">
							<Avatar />
							<div className="flex flex-col">
								<p className="text-md">Martin</p>
							</div>
						</CardHeader>
						<Divider />
						<CardBody>
							<p>I love resellnation so much! You can't even imagine how they helped me! They will tell you everything from the basics! It's quite an experienced team! I definitely recommend, don't miss this unique opportunity.</p>
						</CardBody>
					</Card>
				</div>

			</section>

			<Divider className="my-4" />
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h2 className={title({ class: "mt-4" })}>Frequently Asked Questions</h2>
				</div>
				<Accordion variant="shadow" style={{ marginTop: "20px" }}>
					<AccordionItem key="1" aria-label="What should be the initial capital for ticket resale business?" title="What should be the initial capital for ticket resale business?">
						• We recommend having at least €300 set aside, but it is possible to start with €100.
					</AccordionItem>
					<AccordionItem key="2" aria-label="Why aren't my tickets selling?" title="Why aren't my tickets selling?">
						• This is a very unusual situation because there are several ways you can sell your tickets, and in the worst case, you can sell them for face value.
					</AccordionItem>
					<AccordionItem key="3" aria-label="How can I deliver tickets that are sold all over the world?" title="How can I deliver tickets that are sold all over the world?">
						• You will be buying electronic tickets that you can download from anywhere you are.
					</AccordionItem>
					<AccordionItem key="4" aria-label="What types of events will I be able to buy tickets for?" title="What types of events will I be able to buy tickets for?">
						• You will have access to various types of events, including sports and music events.
					</AccordionItem>
				</Accordion>
			</section>

			<Divider className="my-4" />

			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h2 className={title({ class: "mt-4" })}>Contact Us</h2>
				</div>
				<Card className="w-full md:w-[800px]">
					<CardHeader className="flex flex-col md:flex-row gap-3">
						<Avatar />
						<div className="flex flex-col">
							<div className="flex flex-col md:flex-row gap-4">
								<Input
									type="name"
									label="Name"
									value={formData.name}
									onValueChange={(value) => setFormData({ ...formData, name: value })}
									placeholder="Your Name"
									labelPlacement="outside"
									startContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
								/>
								<Input
									type="email"
									label="Email"
									value={formData.email}
									onValueChange={(value) => setFormData({ ...formData, email: value })}
									placeholder="you@example.com"
									labelPlacement="outside"
									startContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
								/>
							</div>
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
						<Textarea
							isRequired
							label="Message"
							value={formData.message}
							onValueChange={(value) => setFormData({ ...formData, message: value })}
							labelPlacement="outside"
							placeholder="Enter your message, you want to send us"
							width={"100%"}
						/>
					</CardBody>
					<Divider />
					<CardFooter className="flex flex-col md:flex-row items-center">
						<Button color="primary" variant="bordered" isLoading={buttonLoading} onClick={() => submitContact()}>
							Send a message
						</Button>
						<p className="text-gray-500 text-sm md:ml-4 mt-2 md:mt-0">
							By sending a message, you automatically consent to the <a href="/privacy" className="text-purple-500">Processing of Personal Data</a>.
						</p>
					</CardFooter>
					<p
						className={`text-center text-lg mt-3 ${formInfo.includes("successfully sent") ? "text-green-500" : "text-red-500"
							}`}
						style={{ marginBottom: "20px" }}
					>
						{formInfo}
					</p>
				</Card>
			</section>

		</>
	);
}

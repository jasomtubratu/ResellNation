"use client"

import { title, subtitle } from "@/components/primitives";

export default function Discord() {

    return (
        <>
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Our&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>Privacy Policy...&nbsp;</h1>
					<br />

				</div>

			</section>
            <p>
                    I consent to the processing of my personal data in accordance with the following terms:
<br/>
- Personal data such as name, email address, and message will be processed solely for the purpose of communicating and responding to your message.<br/>
- Your personal data will not be shared with third parties without your consent.<br/>
- Personal data will be retained for as long as necessary to achieve the purpose of processing.<br/>
- You have the right to request access to your personal data and to have it corrected or deleted.<br/>
<br/>
If you have any questions or requests regarding the processing of your personal data, please contact us.<br/>
                    </p>
        </>
    )
}
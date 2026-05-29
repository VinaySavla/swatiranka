"use client";

import Image from "next/image";
import { testimonials } from "@/lib/mockData";

export default function Testimonials() {
	return (
		<section className="py-12 lg:py-16 bg-white">
			<div className="page-width">
				<h2 className="font-heading text-[2.6rem] lg:text-[3rem] font-light text-[#121212] tracking-wide mb-8">
					Testimonials
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
					{testimonials.map((testimonial, idx) => (
						<article
							key={testimonial.id}
							className="bg-[#f2f2f2] px-6 pt-6 pb-10 text-center"
						>
							<div className="bg-[#f2f2f2] p-4 mb-6">
								<div
									className="relative w-full overflow-hidden"
									style={{ paddingBottom: "90%" }}
								>
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										fill
										sizes="(min-width: 990px) 33vw, (min-width: 750px) 50vw, 100vw"
										className="object-cover"
										style={{ objectPosition: testimonial.objectPosition }}
										loading={idx === 0 ? "eager" : "lazy"}
									/>
								</div>
							</div>

							<h3 className="font-heading text-[1.8rem] font-light text-[#121212] mb-4 tracking-wide">
								{testimonial.name}
							</h3>
							<p className="text-[1.45rem] text-[rgba(0,0,0,0.72)] font-body leading-relaxed tracking-wide">
								&ldquo;{testimonial.text}&rdquo;
							</p>
						</article>
					))}
          
				</div>
			</div>
		</section>
	);
}

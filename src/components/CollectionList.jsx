import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/mockData";

export default function CollectionList() {
	return (
		<section className="py-12 lg:py-16 bg-white">
			<div className="page-width">
				<h2 className="font-heading text-[2.8rem] lg:text-[3.2rem] font-light text-[#121212] tracking-wide mb-8">
					Artworks by Style and Subject
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
					{collections.map((collection, idx) => (
						<Link
							key={collection.id}
							href={`/collections/all?category=${collection.handle}`}
							className="group block text-center"
						>
							<div className="relative w-full overflow-hidden bg-[#f3f3f3]">
								<div style={{ paddingBottom: "68%" }} className="relative">
									<Image
										src={collection.image}
										alt={collection.title}
										fill
										sizes="(min-width: 990px) 33vw, (min-width: 750px) 50vw, 100vw"
										className="object-cover"
										style={{ objectPosition: collection.objectPosition }}
										loading={idx === 0 ? "eager" : "lazy"}
									/>
								</div>
							</div>
							<p className="font-heading text-[1.8rem] lg:text-[2rem] font-light text-[#121212] mt-4 tracking-wide">
								{collection.title} <span aria-hidden="true">&#8594;</span>
							</p>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

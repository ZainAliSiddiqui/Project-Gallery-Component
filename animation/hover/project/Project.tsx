"use client";

import { TprojectProps } from "@types";

export default function Project({ index, title, setModal }: TprojectProps) {
	return (
		<div
			onMouseEnter={() => {
				setModal({ active: true, index });
			}}
			onMouseLeave={() => {
				setModal({ active: false, index });
			}}
			className="flex w-full justify-between items-center py-[50rem] rem-[100rem] border-t-[1rem] border-[#c9c9c9] cursor-pointer transition-all duration-[0.2s] last-of-type:border-b-[1rem] last-of-type:border-[#c9c9c9]  hover:opacity-[0.5] group">
			<h2 className="text-[60rem] m-0 font-medium transition-all duration-[0.4s] group-hover:translate-x-[-10rem]">
				{title}
			</h2>
			<p className="font-normal text-[15rem] transition-all duration-[0.4s] group-hover:translate-x-[10rem]">
				Design & Development
			</p>
		</div>
	);
}

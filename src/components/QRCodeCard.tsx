import React from "react";

interface QRCodeCardProps {
	qrCodeSrc?: string;
	title?: string;
	description?: string;
}

const QRCodeCard: React.FC<QRCodeCardProps> = ({
	qrCodeSrc = "./images/image-qr-code.png",
	title = "Improve your front-end skills by building projects",
	description = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
}) => {
	return (
		<article className=" bg-white flex flex-col max-w-[300px] items-center justify-center rounded-[16px] p-3 shadow-xl">
			{/* Blue top area */}
			<figure className="rounded-lg overflow-hidden">
				<img
					src={qrCodeSrc}
					alt="QR code"
					className="w-full object-cover aspect-square aspect"
				/>
			</figure>
			{/* White content area */}
			<div className="p-5 text-center">
				<h1 className="text-slate-900 text-lg md:text-xl font-bold mb-3 leading-tight">
					{title}
				</h1>
				<p className="text-slate-500 text-sm  leading-relaxed">{description}</p>
			</div>
		</article>
	);
};

export default QRCodeCard;

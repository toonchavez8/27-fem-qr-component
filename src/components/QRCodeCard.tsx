import React from "react";

interface QRCodeCardProps {
	qrCodeSrc?: string;
	title?: string;
	description?: string;
}

const QRCodeCard: React.FC<QRCodeCardProps> = ({
	qrCodeSrc = "/images/image-qr-code.png",
	title = "Improve your front-end skills by building projects",
	description = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
}) => {
	return (
		<div className="min-h-screen bg-slate-300 flex items-center justify-center p-6 ">
			<div className="bg-white rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.15)] max-w-[320px] w-full">
				{/* Blue top area */}
				<div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-t-2xl p-6 flex items-center justify-center">
					<div className="bg-blue-600/0 rounded-lg w-full max-w-[240px] p-6 flex items-center justify-center">
						<div className="bg-blue-400 rounded-lg p-4 w-full flex items-center justify-center">
							<img
								src={qrCodeSrc}
								alt="QR code"
								className="w-40 h-40 object-cover rounded-md"
							/>
						</div>
					</div>
				</div>

				{/* White content area */}
				<div className="p-6 text-center">
					<h1 className="text-slate-900 text-lg md:text-xl font-bold mb-3 leading-tight">
						{title}
					</h1>
					<p className="text-slate-500 text-sm md:text-base leading-relaxed">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default QRCodeCard;

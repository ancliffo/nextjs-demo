import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
	return (
		<>
			<h1>Felix Anderson Clifford</h1>
			<div className={'col'} style={{ maxWidth: '300px' }}>
				<Image
					src="/images/felix1.jpg" // Route of the image file
					width={300}
					height={398}
					alt="Felix Anderson Clifford"
				/>
			</div>
			<h2>
				<Link href="/">Back to home</Link>
			</h2>
		</>
	);
}

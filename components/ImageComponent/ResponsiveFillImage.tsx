import Image from 'next/image';
const ResponsiveFillImage = () => {
  return (
    <div className="relative w-full h-96 lg:h-80 sm:h-72">
      <Image
        src="https://images.unsplash.com/photo-1620287341260-a9ecadfe7a17"
        fill
        alt="blogImage"
        className="object-contain"
      />
    </div>
  );
};

export default ResponsiveFillImage;

import Image from 'next/image';

const RemoteImage = () => {
  return (
    <Image
      src="https://images.unsplash.com/photo-1620287341260-a9ecadfe7a17"
      width={7748}
      height={5168}
      alt="blogImage"
      //   placeholder="blur"
      // sizes="100vw"
    />
  );
};

export default RemoteImage;

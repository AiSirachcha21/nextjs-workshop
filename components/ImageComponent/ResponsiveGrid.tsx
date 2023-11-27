import Image from 'next/image';
import blogImg from '../../public/images/blog.jpg';

const ResponsiveGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {[blogImg, blogImg, blogImg].map(img => (
        <Image
          key={img.src}
          src={img}
          alt="blogImage"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ))}
    </div>
  );
};

export default ResponsiveGrid;

import Image from 'next/image';
import blogImg from '../../public/images/blog.jpg';
const StaticImage = () => {
  return (
    <div>
      <Image src={blogImg} alt="blogImage" placeholder="blur" />
      <div className="m-auto">
        <ul>
          <li>src: {blogImg.src}</li>
          <li>width: {blogImg.width}</li>
          <li>height: {blogImg.height}</li>
          <li>blurDataURL: {blogImg.blurDataURL}</li>
        </ul>
      </div>
    </div>
  );
};

export default StaticImage;

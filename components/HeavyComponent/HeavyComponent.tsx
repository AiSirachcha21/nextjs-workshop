import uniq from 'lodash/uniq';
import { FaExclamation } from 'react-icons/fa';

const users = ['Aaron', 'John', 'Mary', 'John', 'Angel', 'Mary'];

export const SayWelcome = () => {
  return <div>Welcome to my application</div>;
};

const HeavyComponent = () => {
  return (
    <div className="m-auto bg-pink-300 p-3 shadow-md rounded-md w-full h-full">
      <h1 className="flex font-semibold text-purple-600 items-center justify-center">
        Hello <span className="animate-waving-hand">👋🏻</span>, LogRocket Blog
      </h1>
      <p className="flex items-center justify-center text-center p-3">
        Welcome <FaExclamation />
      </p>
      <h1 className="text-center">Random names</h1>
      <div className="flex justify-center text-xl">
        <ul className="p-3">
          {uniq(users).map(user => (
            <li className="text-white">{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeavyComponent;

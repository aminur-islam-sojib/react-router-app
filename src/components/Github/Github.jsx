import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();
  return (
    <div className="flex items-center justify-center min-h-screen bg-blur">
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform hover:scale-101 transition-transform duration-300">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">{data.name}</h2>
          <span className="text-indigo-500 font-mono text-sm">
            @{data.login}
          </span>
          <p className="mt-2 text-gray-600 italic">
            {data.bio ? data.bio : 'No bio available.'}
          </p>
        </div>
        <div className="flex justify-around mt-6 mb-4">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400">Followers</span>
            <span className="font-bold text-indigo-600 text-lg">
              {data.followers}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400">Following</span>
            <span className="font-bold text-indigo-600 text-lg">
              {data.following}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400">Repos</span>
            <span className="font-bold text-indigo-600 text-lg">
              {data.public_repos}
            </span>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 text-white rounded-lg shadow text-center font-semibold transition-colors duration-300"
          >
            View Profile
          </a>
          <a
            href={`https://github.com/${data.login}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 px-4 py-2 bg-white border border-indigo-300 hover:bg-indigo-50 text-indigo-600 rounded-lg shadow text-center font-semibold transition-colors duration-300"
          >
            Follow
          </a>
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-pink-400 opacity-20 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default Github;

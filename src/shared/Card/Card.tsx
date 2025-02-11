import { IRepos } from "../../models/IRepos";
import { CiStar } from "react-icons/ci";
import { FaCodeFork } from "react-icons/fa6";
const Card = ({ repo, ref }: { repo: IRepos; ref?: any }) => {
  return (
    <div
      className="repo__card duration-300 hover:scale-105 w-[49%] flex flex-col justify-between p-3 bg-[#1d2838] border rounded-md border-gray-300"
      ref={ref}
    >
      {/* Card Header */}
      <div className="card__header border-b pb-2 border-gray-600 flex items-center justify-between">
        <div className="card__title text-gray-300 flex items-center gap-2">
          {/* Owner profile avatar */}
          <div className="profile__img">
            <img
              src={repo.owner.avatar_url}
              className="w-8 h-8 rounded-full"
              alt=""
            />
          </div>
          <div className="repo__title">
            <a
              className="duration-300 hover:text-white"
              href={repo.owner.html_url}
            >
              {repo.owner.login}
            </a>
            /
            <a className="duration-300 hover:text-white" href={repo.html_url}>
              {repo.name}
            </a>
            <span className="ml-1 text-xs">{repo.visibility}</span>
          </div>
        </div>
        <div className="card__header--details">
          <div className="forks__count flex items-center text-gray-400 gap-1">
            <FaCodeFork />
            <span>{repo.forks_count}</span>
          </div>
        </div>
      </div>
      {/* Card content */}
      <div className="card__content py-1 flex flex-wrap">
        <div className="card__content--desc text-white w-3/4">
          {!repo.description ? "No description available" : repo.description}
        </div>
        <div className="card__content--options flex items-center gap-4 ml-auto justify-between text-white">
          <a
            href={repo.html_url}
            className="flex items-center gap-0.5 py-1 px-2 border border-gray-400 rounded-md text-sm duration-300 hover:bg-black"
          >
            <CiStar /> Star
          </a>
          <a
            href={repo.html_url}
            className="flex items-center gap-0.5 py-1 px-2 border border-gray-400 rounded-md text-sm duration-300 hover:bg-black"
          >
            <FaCodeFork /> Fork
          </a>
        </div>
      </div>
      {/* Card Footer */}
      <div className="card__footer flex items-center gap-4 py-1 border-t border-gray-600">
        <div className="stars__count flex items-center text-sm">
          <span className="text-yellow-300">
            <CiStar />
          </span>
          <span className="text-gray-400">{repo.stargazers_count}</span>
        </div>
        <div className="license">
          <span className="text-gray-400">
            {repo.license ? repo.license.name : "No license"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

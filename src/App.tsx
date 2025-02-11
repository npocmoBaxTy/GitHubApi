import "./App.css";
import Header from "./components/Header/Header";
import { useInView } from "react-intersection-observer";
import Card from "./shared/Card/Card";
import { useEffect, useState } from "react";
import useRepositories from "./hooks/useRepositories";
import { IRepos } from "./models/IRepos";
import Search from "./components/Search/Search";

function App() {
  const { ref, inView } = useInView();
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  // Дебаунс для запроса
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    // Очистка таймера при изменении query
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // React-Query запросы
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useRepositories(debouncedQuery);

  // Запуск подгрузки данных при достижении конца списка
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, debouncedQuery]);

  return (
    <div className="wrapper min-h-full overflow-hidden pb-10">
      <Header />
      <main className="main__page--container z-10 mt-20 container max-w-[1300px] mx-auto">
        <h1 className="text-2xl font-bold text-center my-10">
          Репозитории Гит-Хаба
        </h1>

        <div className="header__search--form w-full flex justify-center px-3 sm:px-10">
          <Search query={query} handleSearch={handleSearchChange} />
        </div>
        {status === "pending" ? (
          <p className="text-center">Loading...</p>
        ) : status === "error" ? (
          <span className="text-red-500 text-center block">
            Error: {error?.message}
          </span>
        ) : (
          <>
            <div className="repos__list--container mt-6 flex flex-wrap gap-3 justify-between">
              {data?.pages.map((page, pageIndex) =>
                page.data.map((repo: IRepos, repoIndex: number) => (
                  <Card
                    repo={repo}
                    ref={
                      pageIndex === data.pages.length - 1 &&
                      repoIndex === page.data.length - 1
                        ? ref
                        : null
                    }
                  />
                ))
              )}
            </div>
          </>
        )}
        {isFetchingNextPage && (
          <p className="text-center mt-4">Loading more...</p>
        )}
      </main>
    </div>
  );
}

export default App;

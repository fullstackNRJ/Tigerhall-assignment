import searchContent, { Content } from "@/api/searchContent";
import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { Response } from "@/app/util";

//@TODO add types here
const useContentSearch = () => {
  const [results, setResults] = useState<Array<Response> | []>([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const { debounceAsync } = useDebounce();
  //initial results
  useEffect(() => {
    (async () => {
      setLoadingResults(true);
      const results = await searchContent();
      if (results?.length) {
        setResults(results);
      }
      setLoadingResults(false);
    })();

    return () => setLoadingResults(false);
  }, []);

  const performSearch = async (query: string) => {
    if (!query || !query.length) return;
    setLoadingResults(true);
    const debouncedSearch = debounceAsync(searchContent, 300);
    const results = await debouncedSearch(query);
    // console.log("Results", results);
    //@ts-ignore
    if (results?.length) {
      setResults(results);
    }
    setLoadingResults(false);
  };
  return { performSearch, results, loadingResults };
};

export default useContentSearch;

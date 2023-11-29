import Loading from "../../components/Layouts/Loading";
import { useEffect, useState } from "react";
import * as S from "../../styles/News/NewsList-style";
import Wordcloud from "../../components/Wordcloud";

const Keyword = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Your loading logic here
      setTimeout(() => {
        setIsLoading(false); // Set loading to false after the data is fetched
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <S.NewsListBlock>{isLoading ? <Loading /> : <Wordcloud />}</S.NewsListBlock>
  );
};

export default Keyword;

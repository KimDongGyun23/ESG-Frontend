import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 1rem 1rem;
  padding: 1rem 1rem;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1); /* 오른쪽 아래로 그림자 추가 */

  .thumbnail {
    padding: 1rem 1rem;
    margin-right: 1rem;
    img {
      display: block;
      width: 15rem;
      height: 15rem;
      object-fit: cover;
    }
  }

  .contents {
    margin: 1rem 1rem;
    display: inline;
    h2 {
      margin: 0;
      font-size: 2rem;
      a {
        color: #0291db;
        text-decoration: none;
      }
    }
    p {
      line-height: 1.5;
      font-size: 1.2rem;
      margin-top: 1rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, author, publishedAt } = article;
  const date = publishedAt.split("T")[0];
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
        <p>
          {author} / {date}
        </p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;

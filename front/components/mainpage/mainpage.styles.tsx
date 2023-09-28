import Link from "next/link";
import styled from "styled-components";

export const MainpageContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const MinusFixed = styled.div`
  height: 50px;
`;

export const MainpageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const MainFlexContent = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 300px;
  max-height: 340px;
  @media screen and (max-width: 768px) {
    min-height: 150px;
    max-height: 160px;
  }
`;

export const MainTitle = styled.h1`
  width: 70%;
  padding: 0 0 0 2.5rem;
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const MainImage = styled.div`
  width: 30%;
  padding: 0 2.5rem;
  @media screen and (max-width: 768px) {
    padding: 0 2.5rem;
  }
`;

export const MainContentsBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 380px;
  max-height: 400px;
  padding: 0 2.5rem;
  order: 1;
  @media screen and (max-width: 768px) {
    min-height: 240px;
    order: 0;
  }
`;

export const MainContentHead = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0;
`;

export const SectionHeader = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const SectionSeeMore = styled(Link)`
  font-size: 12px;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const MainLineContents = styled.div`
  height: 4px;
  background-color: #000;
`;

export const MainLine = styled.div`
  height: 5px;
  width: 100%;
  margin-bottom: 8px;
  background-color: #000;
  @media screen and (max-width: 768px) {
    height: 4px;
  }
`;

export const MainContentsMaps = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  @media screen and (max-width: 768px) {
    gap: 8px;
  }
`;

export const MainArticle = styled.button`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  &:hover {
    scale: 101%;
    opacity: 90%;
  }

`;

export const MainContentsImg = styled.div`
  width: 100%;
  height: 200px;
  background-color: grey;
  margin: 15px 0;
  @media screen and (max-width: 1024px) {
    height: 150px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 4px;
    height: 80px;
  }
`;

export const MainContentsHeader = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const MainContentsDays = styled.span`
  font-size: 12px;
`;

export const MainContentsContext = styled.p`
  font-size: 13px;
  padding-top: 3px;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 768px) {
    -webkit-line-clamp: 2;
  }
`;

export const MainOtherBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainCategoryBox = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  max-height: 280px;
  padding: 0 2.5rem;
  @media screen and (max-width: 768px) {
    min-height: 180px;
    max-height: 200px;
  }
`;

export const MainTags = styled.div`
  width: 100%;
  height: 100%;
  margin: 2px 0;
  @media screen and (max-width: 768px) {
    min-height: 110px;
    max-height: 200px;
  }
`

export const TagList = styled.button`
  font-size: 14px;
  cursor: pointer;
`

export const MainCommentBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 230px;
  max-height: 280px;
  padding: 0 2.5rem;
  @media screen and (max-width: 768px) {
    min-height: 180px;
    max-height: 200px;
  }
`;

export const MainComments = styled.div`
  width: 100%;
  height: 100%;
  margin: 2px 0;
  max-width: 300px;
  @media screen and (max-width: 768px) {
    min-height: 110px;
    max-height: 160px;
  }
`

export const CommentList = styled.button`
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
`
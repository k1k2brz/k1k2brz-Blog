import React from 'react';
import {
  CommentList,
  MainArticle,
  MainCategoryBox,
  MainCommentBox,
  MainComments,
  MainContentHead,
  MainContentsBox,
  MainContentsContext,
  MainContentsDays,
  MainContentsHeader,
  MainContentsImg,
  MainContentsMaps,
  MainFlexContent,
  MainHeader,
  MainImage,
  MainLine,
  MainLineContents,
  MainOtherBox,
  MainTags,
  MainTitle,
  MainpageContainer,
  MainpageWrapper,
  MinusFixed,
  SectionHeader,
  SectionSeeMore,
  TagList,
} from './mainpage.styles';
import Link from 'next/link';

const Mainpage = () => {
  return (
    <MainpageContainer>
      <MainpageWrapper>
        <MinusFixed />
        <MainHeader>
          <MainTitle>
            안녕하세요.
            <br />
            <span style={{ color: '#7C3E66' }}>k1k2brz</span>의 블로그입니다.
          </MainTitle>
          <MainImage>Image</MainImage>
        </MainHeader>
        <MainFlexContent>
          <MainContentsBox>
            <MainContentHead>
              <SectionHeader>Contents</SectionHeader>
              <SectionSeeMore href="/contents">더보기</SectionSeeMore>
            </MainContentHead>
            <MainLineContents />
            <MainContentsMaps>
              <MainArticle>
                <MainContentsImg></MainContentsImg>
                <MainContentsHeader>게시글 제목</MainContentsHeader>
                <MainContentsDays>2023.05.11</MainContentsDays>
                <MainContentsContext>커커커커커커커커커커커컼커아아</MainContentsContext>
              </MainArticle>
              <MainArticle>
                <MainContentsImg></MainContentsImg>
                <MainContentsHeader>2</MainContentsHeader>
                <MainContentsDays>3</MainContentsDays>
                <MainContentsContext>4</MainContentsContext>
              </MainArticle>
              <MainArticle>
                <MainContentsImg></MainContentsImg>
                <MainContentsHeader>2</MainContentsHeader>
                <MainContentsDays>3</MainContentsDays>
                <MainContentsContext>4</MainContentsContext>
              </MainArticle>
            </MainContentsMaps>
          </MainContentsBox>
          <MainOtherBox>
            <MainCategoryBox>
              <MainContentHead>
                <SectionHeader>Categories</SectionHeader>
                <SectionSeeMore href="/categories">더보기</SectionSeeMore>
              </MainContentHead>
              <MainLine />
              <MainTags>
                <TagList>태그리스트</TagList>
              </MainTags>
            </MainCategoryBox>
            <MainCommentBox>
              <MainContentHead>
                <SectionHeader>Recent Comments</SectionHeader>
                <SectionSeeMore href="/recnetcomment">더보기</SectionSeeMore>
              </MainContentHead>
              <MainLine />
              <MainComments>
                <CommentList>Comment</CommentList>
                <CommentList>Commentㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</CommentList>
              </MainComments>
            </MainCommentBox>
          </MainOtherBox>
        </MainFlexContent>
      </MainpageWrapper>
    </MainpageContainer>
  );
};

export default Mainpage;

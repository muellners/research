import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  About Research @ Muellners <br /> GitHub: <a href="https://github.com/muellners/research"></a>
                </h5>
                <p>
                  As an organization, we maintain a portfolio of research projects driven by our
                  fundamental research goals, new product innovations, product contribution, and infrastructure goals.
                   
                   We strive to create an environment conducive to many different types of research across
                   many different time scales and levels of risk.
                </p>
                <p>
                  Our goal is to create a research environment, rich in opportunities for product impact, to build a
                  product environment that actively benefits from research, and to provide our staff the freedom to
                  work on important research problems that are not tied to immediate product needs.
                  Some of the most exciting research enables new products, or even new businesses,
                  that we cannot imagine today. Given the diversity of
                  research projects that we pursue, we have found it useful to define four types of work to
                   help crystalize the goals of projects and allow us to measure progress.
                   Although the organization as a whole needs to include all four types of work, teams or
                   individuals typically emphasize a subset of them.
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;

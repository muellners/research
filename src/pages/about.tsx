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
                  About "Research Blog"  
                </h5>
                <p>
                As an organization, we maintain a portfolio of research projects driven by our zeal for
                fundamental research, new product innovations, open contribution and sustainable goals.
                 </p>
                <p>
                 We strive to create an environment helpful to many different types of projects across
                 many different time scales, sectors and industries.
                </p>
                <p>
                Our goal is to create a research environment, rich in opportunities & product impact, to build a
                product environment that actively benefits from this research, and to provide our team the freedom to
                  work and share their ideas on problems of humanity.
                </p>
                <p>
                Some of the most exciting research enables new products, or even new businesses,
                that we cannot imagine today. Given the diversity of our endevours
                that we pursue, we have found it useful to publish our work on this blog.
                </p>
                <h3>Impressum </h3> 
                <p> Muellners® ApS; Copenhagen, Denmark CVR: 41548304;</p>
                <p>Muellners® New Delhi, India CIN: U72900DL2019PTC344870;</p>
                <p> Muellners® Foundation Copenhagen, Denmark CVR:41008407</p> 
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

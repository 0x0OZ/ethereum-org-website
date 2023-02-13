import React from "react"
import { Center, Heading } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { useIntl } from "react-intl"
import { graphql, PageProps } from "gatsby"

import PageHero from "../components/PageHero"
import Translation from "../components/Translation"
import Callout from "../components/Callout"
import Link from "../components/Link"
import ButtonLink from "../components/ButtonLink"
import PageMetadata from "../components/PageMetadata"
import HorizontalCard from "../components/HorizontalCard"
import CardList from "../components/CardList"
import {
  CardContainer,
  Content,
  Divider,
  GrayContainer,
  Page,
  StyledCard,
  TwoColumnContent,
} from "../components/SharedStyledComponents"
import FeedbackCard from "../components/FeedbackCard"
import QuizWidget from "../components/Quiz/QuizWidget"

import { translateMessageId } from "../utils/translations"
import { getImage, getSrc } from "../utils/image"
import { Context } from "../types"
import { Box, Flex, chakra } from "@chakra-ui/react"
import { cover } from "polished"

// const StyledTwoColumnContent = styled(TwoColumnContent)`
//   margin-bottom: -2rem;
//   margin-top: 2rem;
// `

const StyledTwoColumnContent = chakra(TwoColumnContent)

const LeftColumn = styled.div`
  flex: 0 1 50%;
  margin-right: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    max-width: 100%;
    margin-right: 0;
    margin-top: 0;
  }
`

const RightColumn = styled.div`
  flex: 0 1 50%;
  margin-left: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 3rem;
    max-width: 100%;
    margin-left: 0;
  }
`

const StyledRightColumn = styled(RightColumn)`
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 0rem;
  }
`

const StyledGrayContainer = styled(GrayContainer)`
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 1rem;
  }
`

const SubtitleTwo = styled.div`
  font-size: 1.25rem;
  line-height: 140%;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.text300};
`

const SubtitleThree = styled.div`
  font-size: 1.25rem;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
`

// const FindWallet = styled(GatsbyImage)`
//   margin-top: 2rem;
//   max-width: 800px;
//   background-size: cover;
//   background-repeat: no-repeat;
//   width: 100%;
// `

const FindWallet = chakra(GatsbyImage)

// const Intro = styled(Content)`
//   padding-bottom: 0;
//   h2 {
//     margin-bottom: 0;
//   }
// `

const Intro = chakra(Content)

// const IntroTwoColumnContent = styled(TwoColumnContent)`
//   margin-bottom: 0;
//   padding-bottom: 0;
// `

const IntroTwoColumnContent = chakra(TwoColumnContent)

// const GradientContainer = styled(GrayContainer)`
//   background: linear-gradient(
//     49.21deg,
// rgba(127, 127, 213, 0.2) 19.87%,
// rgba(134, 168, 231, 0.2) 58.46%,
// rgba(145, 234, 228, 0.2) 97.05%
//   );
//   margin: 3rem 0rem;
//   width: 100%;
// `

const GradientContainer = chakra(GrayContainer)

// const CodeBox = styled.div`
//   background: #000000;
//   padding: 0.5rem;
//   margin-bottom: 1rem;
//   border-radius: 4px;
// `

// const Code = styled.p`
//   font-family: monospace;
//   color: #ffffff;
//   margin-bottom: 0rem;
// `

// const ChecklistItem = styled(HorizontalCard)`
//   border: 0px;
//   display: flex;
//   align-items: flex-start;
//   margin-bottom: 1rem;
// `

const ChecklistItem = chakra(HorizontalCard)

// const WalletType = styled(HorizontalCard)`
//   min-width: 100%;
//   margin: 0.5rem 0rem;
//   border-radius: 0px;
//   align-items: center;
// `

const WalletType = chakra(HorizontalCard)

// const StyledCallout = styled(Callout)`
//   flex: 1 1 424px;
//   min-height: 100%;
// `

const StyledCallout = chakra(Callout)

// const CentralColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 2rem;
// `

// const CalloutCardContainer = styled(CardContainer)`
//   margin-top: 4rem;
// `

const CalloutCardContainer = chakra(CardContainer)

// const H2 = styled.h2`
//   /* margin: 0; */
// `

const cards = [
  {
    emoji: ":dollar:",
    title: <Translation id="page-wallets-manage-funds" />,
    description: <Translation id="page-wallets-manage-funds-desc" />,
  },
  {
    emoji: ":frame_with_picture:",
    title: <Translation id="page-wallets-your-ethereum-account" />,
    description: <Translation id="page-wallets-your-ethereum-account-desc" />,
  },
  {
    emoji: ":bust_in_silhouette:",
    title: <Translation id="page-wallets-your-login" />,
    description: <Translation id="page-wallets-your-login-desc" />,
  },
]

const types = [
  {
    emoji: ":cd:",
    description: <Translation id="page-wallets-cd" />,
  },
  {
    emoji: ":mobile_phone:",
    description: <Translation id="page-wallets-mobile" />,
  },
  {
    emoji: ":globe_with_meridians:",
    description: <Translation id="page-wallets-web-browser" />,
  },
  {
    emoji: ":globe_with_meridians:",
    description: <Translation id="page-wallets-web-browser-extension" />,
  },
  {
    emoji: ":desktop_computer:",
    description: <Translation id="page-wallets-desktop" />,
  },
]

const articles = [
  {
    title: <Translation id="page-wallets-protecting-yourself" />,
    description: "MyCrypto",
    link: "https://support.mycrypto.com/staying-safe/protecting-yourself-and-your-funds",
  },
  {
    title: <Translation id="page-wallets-keys-to-safety" />,
    description: <Translation id="page-wallets-blog" />,
    link: "https://www.coinbase.com/learn/crypto-basics/how-to-secure-crypto",
  },
  {
    title: <Translation id="page-wallets-how-to-store" />,
    description: "ConsenSys",
    link: "https://media.consensys.net/how-to-store-digital-assets-on-ethereum-a2bfdcf66bd0",
  },
]

const guides = [
  {
    title: (
      <Translation id="additional-reading-how-to-register-an-ethereum-account" />
    ),
    link: "/guides/how-to-register-an-ethereum-account/",
  },
  {
    title: <Translation id="additional-reading-how-to-use-a-wallet" />,
    link: "/guides/how-to-use-a-wallet/",
  },
]

const WalletsPage = ({
  data,
}: PageProps<Queries.WalletsPageQuery, Context>) => {
  const intl = useIntl()

  const heroContent = {
    title: translateMessageId("page-wallets-title", intl),
    header: translateMessageId("page-wallets-slogan", intl),
    subtitle: translateMessageId("page-wallets-subtitle", intl),
    image: getImage(data.hero)!,
    alt: translateMessageId("page-wallets-alt", intl),
    buttons: [
      {
        to: "/wallets/find-wallet/",
        content: translateMessageId("page-wallets-find-wallet-link", intl),
      },
    ],
  }

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("page-wallets-meta-title", intl)}
        description={translateMessageId("page-wallets-meta-description", intl)}
        image={getSrc(data.ogImage)}
      />
      <PageHero content={heroContent} isReverse />
      <StyledGrayContainer>
        <Intro paddingBottom={0} sx={{ h2: { mb: 0 } }}>
          <Heading m="0">
            <Translation id="page-wallets-whats-a-wallet" />
          </Heading>
        </Intro>
        <IntroTwoColumnContent marginBottom={0} paddingBottom={0}>
          <LeftColumn>
            <p>
              <Translation id="page-wallets-description" />
            </p>
            <p>
              <Translation id="page-wallets-desc-2" />{" "}
            </p>
            <CardList content={guides} />
          </LeftColumn>
          <StyledRightColumn>
            <p>
              <Translation id="page-wallets-desc-3" />
            </p>
            <p>
              <Translation id="page-wallets-desc-4" />
            </p>
          </StyledRightColumn>
        </IntroTwoColumnContent>
        <Content>
          <CardContainer>
            {cards.map((card, idx) => (
              <StyledCard
                key={idx}
                emoji={card.emoji}
                title={card.title}
                description={card.description}
              />
            ))}
          </CardContainer>
        </Content>
      </StyledGrayContainer>
      <StyledTwoColumnContent marginBottom={-8} marginTop={8}>
        <Box flexGrow="0" flexShrink="1" flexBasis="50%" mr="8">
          //leftcolumn
          <Heading m="0">
            <Translation id="page-wallets-accounts-addresses" />
          </Heading>
          <p>
            <Translation id="page-wallets-accounts-addresses-desc" />
          </p>
          <ul>
            <li>
              <p>
                <Translation id="page-wallets-ethereum-account" />
              </p>
            </li>
            <li>
              <p>
                <Translation id="page-wallets-accounts-ethereum-addresses" />
              </p>
            </li>
            <li>
              <p>
                <Translation id="page-wallets-ethereum-wallet" />
              </p>
            </li>
          </ul>
          <p>
            <Translation id="page-wallets-most-wallets" />
          </p>
        </Box>
        <RightColumn>
          <Heading m="0">
            <Translation id="page-wallets-types" />
          </Heading>
          <p>
            <Translation id="page-wallets-types-desc" />
          </p>
          <div>
            {types.map((type, idx) => (
              <WalletType
                minWidth="100%"
                marginTop={2}
                marginBottom={2}
                marginLeft={0}
                marginRight={0}
                key={idx}
                emoji={type.emoji}
                description={type.description}
                emojiSize={2.5}
              />
            ))}
          </div>
        </RightColumn>
      </StyledTwoColumnContent>
      <GradientContainer
        bgGradient="linear-gradient(49.21deg, rgba(127, 127, 213, 0.2) 19.87%,
    rgba(134, 168, 231, 0.2) 58.46%,
    rgba(145, 234, 228, 0.2) 97.05%)"
      >
        <Content>
          <Flex flexDirection="column" alignItems="center" mb="8">
            //central column
            <Heading m="0">
              <Translation id="page-wallets-features-title" />
            </Heading>
            <SubtitleThree>
              <Translation id="page-wallets-features-desc" />
            </SubtitleThree>
            <ButtonLink to="/wallets/find-wallet/">
              <Translation id="page-wallets-find-wallet-btn" />
            </ButtonLink>
            <FindWallet
              image={getImage(data.findWallet)!}
              alt=""
              marginTop={8}
              maxWidth="800px"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              width="100%"
            />
          </Flex>
        </Content>
      </GradientContainer>
      <TwoColumnContent>
        <LeftColumn>
          <Heading m="0">
            <Translation id="page-wallets-stay-safe" />
          </Heading>
          <SubtitleTwo>
            <Translation id="page-wallets-stay-safe-desc" />
          </SubtitleTwo>
          <div>
            <ChecklistItem
              border={0}
              display="flex"
              alignItems="flex-start"
              marginBottom={4}
              key="0"
              emoji=":white_check_mark:"
              title={translateMessageId(
                "page-wallets-take-responsibility",
                intl
              )}
              description={translateMessageId(
                "page-wallets-take-responsibility-desc",
                intl
              )}
            />
            <ChecklistItem
              border={0}
              display="flex"
              alignItems="flex-start"
              marginBottom={4}
              key="1"
              emoji=":white_check_mark:"
              title={translateMessageId("page-wallets-seed-phrase", intl)}
              description={translateMessageId(
                "page-wallets-seed-phrase-desc",
                intl
              )}
            >
              <p>
                <Translation id="page-wallets-seed-phrase-example" />
              </p>
              <Box bg="black" p="2" mb="4" borderRadius="base">
                <Box fontFamily="monospace" color="white" mb="0">
                  <Translation id="page-wallets-seed-phrase-snippet" />
                </Box>
              </Box>
              <p>
                <Translation id="page-wallets-seed-phrase-write-down" />
              </p>
            </ChecklistItem>
            <ChecklistItem
              border={0}
              display="flex"
              alignItems="flex-start"
              marginBottom={4}
              key="2"
              emoji=":white_check_mark:"
              title={translateMessageId("page-wallets-bookmarking", intl)}
              description={translateMessageId(
                "page-wallets-bookmarking-desc",
                intl
              )}
            />
            <ChecklistItem
              border={0}
              display="flex"
              alignItems="flex-start"
              marginBottom={4}
              key="3"
              emoji=":white_check_mark:"
              title={translateMessageId("page-wallets-triple-check", intl)}
              description={translateMessageId(
                "page-wallets-triple-check-desc",
                intl
              )}
            />
          </div>
        </LeftColumn>
        <RightColumn>
          <Heading m="0">
            <Translation id="page-wallets-tips" />
          </Heading>
          <SubtitleTwo>
            <Translation id="page-wallets-tips-community" />
          </SubtitleTwo>
          <CardList content={articles} />
        </RightColumn>
      </TwoColumnContent>
      <Content>
        <Divider />
        <Heading m="0">
          <Translation id="page-wallets-explore" />
        </Heading>
        <CalloutCardContainer marginTop={16}>
          <StyledCallout
            flex="1 1 424px"
            minH="full"
            image={getImage(data.eth)}
            titleKey="page-wallets-get-some"
            alt={translateMessageId("page-wallets-get-some-alt", intl)}
            descriptionKey="page-wallets-get-some-desc"
          >
            <div>
              <ButtonLink to="/get-eth/">
                <Translation id="page-wallets-get-some-btn" />
              </ButtonLink>
            </div>
          </StyledCallout>
          <StyledCallout
            flex="1 1 424px"
            minH="full"
            image={getImage(data.dapps)}
            titleKey="page-wallets-try-dapps"
            alt={translateMessageId("page-wallets-try-dapps-alt", intl)}
            descriptionKey="page-wallets-try-dapps-desc"
          >
            <div>
              <ButtonLink to="/dapps/">
                <Translation id="page-wallets-more-on-dapps-btn" />
              </ButtonLink>
            </div>
          </StyledCallout>
        </CalloutCardContainer>
      </Content>
      <Content>
        <Center w="100%">
          <QuizWidget quizKey="wallets" />
        </Center>
      </Content>
      <Content>
        <FeedbackCard />
      </Content>
    </Page>
  )
}

export default WalletsPage

export const calloutImage = graphql`
  fragment calloutImage on File {
    childImageSharp {
      gatsbyImageData(
        height: 200
        layout: FIXED
        placeholder: BLURRED
        quality: 100
      )
    }
  }
`

export const listImage = graphql`
  fragment listImage on File {
    childImageSharp {
      gatsbyImageData(
        height: 20
        layout: FIXED
        placeholder: BLURRED
        quality: 100
      )
    }
  }
`

export const query = graphql`
  query WalletsPage {
    hero: file(relativePath: { eq: "wallet.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
    }
    findWallet: file(relativePath: { eq: "wallets/find-wallet.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    ogImage: file(relativePath: { eq: "wallet-cropped.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 738
          layout: FIXED
          placeholder: BLURRED
          quality: 100
        )
      }
    }
    eth: file(relativePath: { eq: "eth-logo.png" }) {
      ...calloutImage
    }
    dapps: file(relativePath: { eq: "doge-computer.png" }) {
      ...calloutImage
    }
  }
`

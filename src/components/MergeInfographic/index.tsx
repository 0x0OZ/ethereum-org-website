import { AspectRatio, Box, chakra, Icon } from "@chakra-ui/react"

// TODO: Re-enable after i18n implemented
// import Translation from "./Translation"
import { Background } from "./Background" 

const Text = chakra("text", {
  baseStyle: {
    textAnchor: "start",
    fill: "currentColor",
  },
})

export interface SvgProps {}

const SvgText: React.FC<SvgProps> = () => {
// TODO: Re-enable after i18n implemented
// const { t } = useTranslation()
  const [sm, lg] = ["7px", "8px"]

  return (
    <Icon
      position="absolute"
      zIndex={1}
      width="100%"
      height="100%"
      viewBox="0 0 250 110"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
    >
      <Text x="2%" y="35%" fontSize={lg}>
        ⛏ Proof-of-work{/* t("docs-nav-proof-of-work") */}
      </Text>
      <Text x="47%" y="35%" fontSize={lg}>
        🌱 Proof-of-stake{/* t("docs-nav-proof-of-stake") */}
      </Text>
      <Text x="11%" y="70%" fontSize={sm}>
        🚀 Beacon chain{/* t("beacon-chain") */}
      </Text>
      <Text x="43%" y="12.5%" fontSize={sm}>
        🐼 The Merge{/* t("page-upgrades-get-involved-ethresearch-2") */}
      </Text>
      <Text x="63%" y="95%" fontSize={sm}>
        🌳 Sharding{/* t("page-upgrades-get-involved-ethresearch-1") */}
      </Text>
    </Icon>
  )
}

export interface IProps {
  className?: string
}

const MergeInfographic: React.FC<IProps> = ({ className }) => {
  // TODO: Re-enable after i18n implemented
  // const { t } = useTranslation()

  return (
    <AspectRatio
      className={className}
      role="img"
      // TODO: Re-enable after i18n implemented
      // aria-label={t("page-upgrades-merge-infographic-alt-text")}
      aria-label="Infographic illustrating how the Beacon Chain merges into Ethereum's execution layer during the transition from proof-of-work to proof-of-stake."
      position="relative"
      width="100%"
      ratio={25 / 11}
      sx={{
        isolation: "isolate",
      }}
    >
      <Box>
        <Box
          position="absolute"
          top="40%"
          left="2%"
          width="81%"
          height="18%"
          margin={0}
          padding={0}
          zIndex={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          lineHeight="1em"
          textAlign="center"
          maxHeight="2em"
          color="background.base"
          fontSize={{
            base: "0.625em",
            sm: "0.875em",
            md: "1.125em",
            lg: "1.375em",
          }}
          aria-hidden="true"
        >
          {/* TODO: Re-enable after i18n implemented */}
          {/* <Translation id="page-upgrades-merge-infographic-el" /> */}
          Ethereum State: transactions, apps, contracts, balances
        </Box>
        <SvgText />
        <Background
          aria-hidden="true"
          position="absolute"
          width="100%"
          height="100%"
          zIndex={0}
        />
      </Box>
    </AspectRatio>
  )
}

export default MergeInfographic

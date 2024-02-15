import { useTranslation } from "next-i18next"
import { MdInfoOutline } from "react-icons/md"
import { Box, Heading, HStack, Icon, Stack } from "@chakra-ui/react"

import {
  GreenCheckProductGlyphIcon,
  WarningProductGlyphIcon,
} from "@/components/icons/staking"

import walletFilterData from "../../../data/wallets/wallet-filters"
import Text from "../../OldText"
import Tooltip from "../../Tooltip"

import { DropdownOption } from "./useWalletTable"

interface WalletMoreInfoCategoryProps {
  wallet: any
  orderedFeatureDropdownItems: DropdownOption[]
  headingLabel: any
  sectionName: string
}

export const WalletMoreInfoCategory = ({
  wallet,
  orderedFeatureDropdownItems,
  headingLabel,
  sectionName,
}: WalletMoreInfoCategoryProps) => {
  const { t } = useTranslation("page-wallets-find-wallet")

  return (
    <Box width="full" mt={4} _first={{ mt: 2 }}>
      <Heading
        as="h4"
        lineHeight={1.4}
        fontSize="md"
        fontWeight={500}
        mx="0.2rem"
        mb={2}
      >
        {headingLabel}
      </Heading>
      <Stack gap={2} wrap="wrap">
        {orderedFeatureDropdownItems.map((feature) => {
          const featureColor = wallet[feature.filterKey!] ? "text" : "secondary"

          if (feature.category === sectionName)
            return (
              <HStack
                key={feature.label}
                spacing="0.2rem"
                fontSize="0.9rem"
                lineHeight={1}
                p="0.2rem"
                mx={4}
                width="200px"
                sx={{
                  p: {
                    color: featureColor,
                    flex: "none",
                    mb: 0,
                  },
                  "span + p": {
                    textDecor: "none",
                  },
                  "p + div, div + div": {
                    svg: {
                      width: 6,
                      fill: "secondary",
                      pe: 2,
                    },
                  },
                }}
              >
                <Icon
                  as={
                    wallet[feature.filterKey!]
                      ? GreenCheckProductGlyphIcon
                      : WarningProductGlyphIcon
                  }
                  fontSize="1rem"
                  color={featureColor}
                />
                <p>{feature.label}</p>
                <Tooltip
                  content={
                    <Text lineHeight={1.2}>
                      {t(walletFilterData[feature.filterKey].description)}
                    </Text>
                  }
                >
                  <Icon as={MdInfoOutline} color={featureColor} />
                </Tooltip>
              </HStack>
            )
        })}
      </Stack>
    </Box>
  )
}

import type { ReactNode } from "react"
import {
  Box,
  type BoxProps,
  Flex,
  HStack,
  LinkBox,
  LinkOverlay,
  type StackProps,
  useColorModeValue,
} from "@chakra-ui/react"

import { Image, type ImageProps } from "@/components/Image"
import { BaseLink } from "@/components/Link"

import * as url from "@/lib/utils/url"

import { useRtlFlip } from "@/hooks/useRtlFlip"

export type CardListItem = {
  title?: ReactNode
  description?: ReactNode
  caption?: ReactNode
  link?: string
  id?: string
  image?: ImageProps["src"]
  alt?: string
}

const CardContainer = (props: StackProps) => (
  <HStack
    spacing={4}
    p={4}
    color="text"
    border="1px solid"
    borderColor="border"
    _hover={{
      borderRadius: "base",
      boxShadow: "0 0 1px var(--eth-colors-primary)",
      background: "tableBackgroundHover",
    }}
    {...props}
  />
)

type CardProps = CardListItem & Omit<StackProps, "title" | "id">

const Card = ({
  title,
  description,
  caption,
  link,
  image,
  alt,
  ...props
}: CardProps) => {
  const { flipForRtl } = useRtlFlip()
  const isLink = !!link
  const isExternal = url.isExternal(link || "")

  const descriptionColor = useColorModeValue("gray.500", "gray.400")

  return (
    <CardContainer {...props}>
      {image && (
        <Image
          src={image}
          alt={alt ?? ""}
          sizes="20px"
          style={{ width: "20px", height: "auto" }}
        />
      )}
      <Flex flex="1 1 75%" direction="column">
        {isLink ? (
          <LinkOverlay
            as={BaseLink}
            href={link}
            hideArrow
            color="text"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            {title}
          </LinkOverlay>
        ) : (
          <Box>{title}</Box>
        )}

        <Box fontSize="sm" mb={0} color={descriptionColor}>
          {description}
        </Box>
      </Flex>
      {caption && (
        <Flex flex="1 0 25%" align="center" wrap="wrap" me={4}>
          <Box fontSize="sm" mb={0} opacity={0.6}>
            {caption}
          </Box>
        </Flex>
      )}
      {isExternal && <Box transform={flipForRtl}>↗</Box>}
    </CardContainer>
  )
}

export type CardListProps = BoxProps & {
  items: CardProps[]
  clickHandler?: (idx: string | number) => void
}

const CardList = ({
  items,
  clickHandler = () => null,
  ...props
}: CardListProps) => (
  <Box bg="background.base" w="full" {...props}>
    {items.map((listItem, idx) => {
      const { link, id } = listItem
      const isLink = !!link

      return isLink ? (
        <LinkBox key={id || idx}>
          <Card {...listItem} />
        </LinkBox>
      ) : (
        <Card
          key={idx}
          onClick={() => clickHandler(idx)}
          mb={4}
          {...listItem}
        />
      )
    })}
  </Box>
)

export default CardList

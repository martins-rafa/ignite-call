import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Appointments made easy | Ignite Call"
        description="Connect your calendar and let your customers book an appointment in
        your available time."
      />

      <Container>
        <Hero>
          <Heading size="4xl" as="h1">
            Appointments made easy
          </Heading>
          <Text size="xl">
            Connect your calendar and let your customers book an appointment in
            your available time.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            alt="Calendar symbolizing the app"
            height={400}
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </>
  )
}

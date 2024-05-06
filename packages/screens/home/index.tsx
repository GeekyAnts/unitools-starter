import React from 'react'
import { View, Text, Linking, Platform, Pressable } from 'react-native'
import Link from '@unitools/link'

const useLink = ({ href }: { href: string }) => {
  if (Platform.OS === 'web') {
    return {
      href,
      role: 'link',
      target: '_blank',
    }
  }

  return {
    onPress: () =>
      Linking.openURL(href).catch((err) =>
        console.error('An error occurred', err)
      ),
    role: 'button',
  }
}

const Home = () => {
  const linkProps = useLink({
    href: 'https://unitools.geekyants.com/packages/link',
  })
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
      }}
    >
      <View
        style={{
          width: '70%',
        }}
      >
        <Text
          style={{
            fontWeight: '700',
            color: 'white',
            fontSize: 24,
            textAlign: 'center',
          }}
        >
          Welcome to the Unitools starter template. Here, you can explore how to
          naviagte between screens using {/* @ts-ignore */}
          <Pressable {...linkProps}>
            <Text
              style={{
                fontWeight: '700',
                color: 'pink',
                textDecorationLine: 'underline',
              }}
            >
              @unitools/link.
            </Text>
          </Pressable>{' '}
          🔗
        </Text>
        <Link
          href="/users"
          push
          style={{
            fontWeight: '700',
            fontSize: 24,
            textAlign: 'center',
            color: 'pink',
            marginTop: 32,
            textDecorationLine: 'underline',
          }}
        >
          Users List
        </Link>
      </View>
    </View>
  )
}

export default Home

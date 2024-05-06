import Link from '@unitools/link'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import Image from '@unitools/image'
const USERS_LIST_ENDPOINT = 'https://dummyjson.com/users'

const User = ({
  firstName,
  lastName,
  image,
}: {
  firstName: string
  lastName: string
  image: string
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#262626',
        flexDirection: 'row',
        gap: 20,
        borderRadius: 12,
        paddingVertical: 24,
        paddingHorizontal: 32,
      }}
    >
      <View style={{ width: 48, height: '100%' }}>
        <Image
          source={image}
          alt={`${firstName}'s image`}
          height={48}
          width={48}
          style={{
            flex: 1,
            width: '100%',
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          gap: 4,
        }}
      >
        <Text
          style={{
            fontWeight: '700',
            color: 'white',
            fontSize: 16,
          }}
        >{`${firstName} ${lastName}`}</Text>
        <Text
          style={{
            fontWeight: '700',
            color: 'white',
            fontSize: 12,
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, sed
          earum optio reprehenderit vitae ipsum perspiciatis distinctio dolore
          recusandae ut et eaque similique. Suscipit a ratione aut inventore?
          Fuga, ipsam!
        </Text>
      </View>
    </View>
  )
}

const Users = () => {
  const [users, setUsers] = useState<
    Array<{
      id: number
      firstName: string
      lastName: string
      image: string
    }>
  >([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch(USERS_LIST_ENDPOINT)
      const data = await response.json()
      setUsers(data?.users)
    })()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
      }}
    >
      <SafeAreaView />
      <Link
        href="/"
        style={{
          fontWeight: '700',
          color: 'white',
          fontSize: 24,
          marginTop: 32,
          textDecorationLine: 'underline',
        }}
      >
        Back to home
      </Link>
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <View
          style={{
            gap: 16,
            marginTop: 32,
            width: '90%',
          }}
        >
          {users.map((user) => {
            return (
              <User
                key={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                image={user.image}
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Users

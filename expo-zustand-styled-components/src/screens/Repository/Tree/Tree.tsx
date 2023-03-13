import React from 'react'
import { View, Text } from 'react-native'

import { RepoStackScreenProps } from '../../../../types'

import Button from '../../../components/Button'

const Tree = ({ navigation }: RepoStackScreenProps<'Tree'>) => {
  return (
    <View>
      <Text>Tree</Text>
      <Button title='Go to Code tab' onPress={() => navigation.navigate('Code')} />
      <Button title='Go to PR tab' onPress={() => navigation.navigate('PullRequests')} />
      <Button title='Go to Issues' onPress={() => navigation.navigate('Issues')} />
      <Button title='Go to Blob' onPress={() => navigation.navigate('Blob')} />
    </View>
  )
}

export default Tree
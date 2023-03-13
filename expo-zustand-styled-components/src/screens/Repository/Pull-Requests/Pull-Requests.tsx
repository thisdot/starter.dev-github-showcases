import React from 'react'
import { View, Text } from 'react-native'

import { RepoStackScreenProps } from '../../../../types'

import Button from '../../../components/Button'

const PullRequest = ({ navigation }: RepoStackScreenProps<'PullRequests'>) => {
  return (
    <View>
      <Text>PullRequest</Text>
      <Button title='Go to Code tab' onPress={() => navigation.navigate('Code')} />
      <Button title='Go to Issues' onPress={() => navigation.navigate('Issues')} />
      <Button title='Go to Tree' onPress={() => navigation.navigate('Tree')} />
      <Button title='Go to Blob' onPress={() => navigation.navigate('Blob')} />
    </View>
  )
}

export default PullRequest
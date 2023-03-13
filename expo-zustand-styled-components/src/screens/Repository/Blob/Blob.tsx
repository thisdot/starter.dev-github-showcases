import React from 'react'
import { View, Text } from 'react-native'

import { RepoStackScreenProps } from '../../../../types'

import Button from '../../../components/Button'

const Blob = ({ navigation }: RepoStackScreenProps<'Blob'>) => {
  return (
    <View>
      <Text>Blob</Text>
      <Button title='Go to Code tab' onPress={() => navigation.navigate('Code')} />
      <Button title='Go to PR tab' onPress={() => navigation.navigate('PullRequests')} />
      <Button title='Go to Tree' onPress={() => navigation.navigate('Tree')} />
      <Button title='Go to Issues' onPress={() => navigation.navigate('Issues')} />
    </View>
  )
}

export default Blob
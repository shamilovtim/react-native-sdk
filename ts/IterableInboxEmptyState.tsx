'use strict'

import React from 'react'
import {
   View,
   Text,
   StyleSheet,
} from 'react-native'

import { IterableInboxCustomizations } from '.'

type emptyStateProps = {
   customizations: IterableInboxCustomizations,
   tabBarHeight: number,
   tabBarPadding: number,
   navTitleHeight: number,
   contentWidth: number,
   height: number,
   isPortrait: boolean
}

const IterableInboxEmptyState = ({
   customizations,
   tabBarHeight,
   tabBarPadding,
   navTitleHeight,
   height,
   isPortrait
}: emptyStateProps) => {
   const defaultTitle = "No saved messages"
   const defaultBody = "Check again later!"

   const emptyStateTitle = customizations.noMessagesTitle
   const emptyStateBody = customizations.noMessagesBody

   let {
      container,
      title,
      body
   } = styles

   container = { ...container, height: height - navTitleHeight - tabBarHeight - tabBarPadding }

   if (!isPortrait) {
      container = { ...container, height: height - navTitleHeight }
   }

   return (
      <View style={container}>
         <Text style={title}>
            {emptyStateTitle ? emptyStateTitle : defaultTitle}
         </Text>
         <Text style={body}>
            {emptyStateBody ? emptyStateBody : defaultBody}
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: 0,
      backgroundColor: 'whitesmoke',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },

   title: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingBottom: 25
   },

   body: {
      fontSize: 15,
      color: 'grey'
   }
})

export default IterableInboxEmptyState
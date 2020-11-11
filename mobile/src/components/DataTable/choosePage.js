import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Cell } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ExampleFour() {
  const nav = useNavigation()

  const tableData =
    [
      ['Amido de arroz', '0'],
      ['Arroz Branco Cozido', '1'],
      ['Arroz carreteiro', '2'],
      ['Arroz doce', '3'],
      ['Arroz integral cozido', '4'],
    ]

  const element = (data, index) => (
    <TouchableOpacity style={styles.button} onPress={() => {nav.navigate('Porcao')}}>
      <View>
        <Icon
          name='arrow-forward'
          color='#777'
          size={22}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <Table borderStyle={{ borderColor: 'transparent' }}>
      {
        tableData.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {
              rowData.map((cellData, cellIndex) => (
                <Cell key={cellIndex} data={cellIndex === 1 ? element(cellData, index) : cellData} textStyle={styles.textRow} />
              ))
            }
          </TableWrapper>
        ))
      }
    </Table>
  )
}

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#6dddd0',
  },

  head: {
    height: 40,
    backgroundColor: '#ebebeb',
  },

  row: {
    flexDirection: 'row',

    height: 50,
    backgroundColor: '#ebebeb',

    borderBottomWidth: 0.5,
    borderColor: '#ddd'
  },

  textHead: {
    fontSize: 13,
    padding: '5%',
    color: '#777'
  },

  textRow: {
    fontSize: 14,
    padding: '5%',
  },

  button: {
    padding: '5%',
    alignItems: 'flex-end',
  },

  btnText: {
    color: '#000',
    fontWeight: 'bold'
  }

})

import React from "react";
import { Text, Button, ScrollView, TouchableOpacity,StyleSheet, View, FlatList,Platform, TextInput } from "react-native";
import { createStackNavigator } from 'react-navigation';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


class maintenance2 extends React.Component {
    static navigationOptions = {
        title: '',
    };
    constructor(props) {
        super(props);

        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        // this.onCancel = this.onCancel.bind(this);
        // this.setModalVisible = this.setModalVisible.bind(this);
        // this.setEditModalVisible = this.setEditModalVisible.bind(this);
        // this.onReject = this.onReject.bind(this);
        // this.setRejectModalVisible = this.setRejectModalVisible.bind(this);
        this.state = {
            item_data: [],
            // user_email: this.props.navigation.state.params.Email,
            // user_password: '',
            // error: '',
            // loading: true,
            // loading2: true,
            // text: '',
            // item_code: 'Item Value',
            // des: 'Description',
            // editable: false,
            // editable1: false,
            // editable2: false,
            // data: [],
            // item_data: [],
            // value1: '',
            // value2: '',
            // value3: '',
            // hideText: true,
            // count: 0,
            // modalVisible: false,
            // modalVisible2: false,
            // modalVisible3: false,
            // underlineColorAndroid: 'transparent',
            // job_level: '',
            // job_code: '',
            // qty: '',
            // Delivery_Date: '',
            // code: ''
            tableTitle: ['oil change', 'tune-up', 'adjust', 'plate-change'],
            tableData: [
              ['maintenance details', '6months', '70000km', '5000km/6months', '40000'],
             // ['col2', '1', '2', '3', '4'],
             // ['col3', 'a', 'b', 'c', 'd']
            ]
        };
    }

    onButtonPress() {
        console.log("Working");
        //const { navigate } = this.props.navigation;
        // navigate('Home');
    }
    flatListView() {
        finalPakageDetails = this.state.item_data;
        // if (this.state.loading2) {
        //     return (
        //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //             <Spinner size="large" spinnerStyle={styles.spinnerStyle} />
        //         </View>
        //     );
        // }
        return (
            <FlatList
                data={finalPakageDetails}
                renderItem={this.tableView}
               // keyExtractor={(item, index) => item.Item_Code}
                scrollEnabled={false}
            />
        );
    }

    tableView = ({ item }) => {
        // Moment.locale('en');
        // var fullDate = Moment(item.Delivery_Date.date).format('YYYY/MM/DD');
        return (
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1 }} key={item.Item_Code}>
                <View style={{ flex: 3, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.dataStyle}>"b"</Text>
                </View>
                <View style={{ flex: 1, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.dataStyle}>c</Text>
                </View>
                <View style={{ flex: 1, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.dataStyle}>a</Text>
                </View>
                <View style={{ flex: 2, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.dataStyle}>d</Text>
                </View>
                <View style={{ flex: 2, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: 25, width: 40, backgroundColor: '#6FC7FA', borderRadius: 2, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.setEditModalVisible(!this.state.modalVisible3, item.Qty_Required, item.Delivery_Date.date, item.Item_Code)}>
                        <Text style={{ fontSize: 12, color: '#fff' }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
                  
                  )
              }
           
            
    render() {
        const state = this.state;
        
            return (
                <View style={styles.container}>
                <Table style={{flexDirection: 'row'}}>
                  {/* Left Wrapper */}
                  <TableWrapper style={{width: 200}}>
                    <Cell data="" style={styles.singleHead}/>
                    <TableWrapper style={{flexDirection: 'row'}}>
                      <Col data={['Engine', 'clutch']} style={styles.head} heightArr={[60, 60]} textStyle={styles.text} />
                      <Col data={state.tableTitle} style={styles.title} heightArr={[30, 30, 30, 30]} textStyle={styles.titleText}></Col>
                    </TableWrapper>
                  </TableWrapper>
         
                  {/* Right Wrapper */}
                  <TableWrapper style={{flex:1}}>
                    <Cols data={state.tableData} heightArr={[40, 30, 30, 30, 30]} textStyle={styles.text}/>
                  </TableWrapper>
                </Table>
              </View>
            );
        }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        buttonContainer: {
            margin: 20
        },
        dataStyle: {
            color: '#000',
            fontSize: 12
        },
        container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
        singleHead: { width: 200, height: 40, backgroundColor: '#c8e1ff' },
        head: { flex: 1, backgroundColor: '#c8e1ff' },
        title: { flex: 1, backgroundColor: '#f6f8fa' },
        titleText: { marginRight: 6, textAlign:'right' },
        text: { textAlign: 'center' },
        btn: { width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
        btnText: { textAlign: 'center' }
    });

    export default maintenance2;

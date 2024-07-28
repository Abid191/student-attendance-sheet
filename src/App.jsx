
import './App.css'
import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'


const styles = StyleSheet.create({
  page: {
    position: 'relative',
    padding: 30,
    justifyContent: ' flex-start'
  },
  header: {
    flexDirection: 'row',
    color: 'white',
    marginTop: 10
  },
  img: {
    width: 88,
    height: 90
  },
  headerTitle: {
    color: 'grey',
    marginLeft: 7,
    marginTop: 25
  },
  Title: {

  },
  TitleAddress: {
    fontSize: 12,
    marginTop: 4
  },
  divider: {
    marginTop: 3,
    marginBottom: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'grey',
    borderBottomStyle: 'solid',
  },
  Middle: {
    textAlign: 'center'
  },
  MiddleTitle: {
    textAlign: 'center'
  },
  dividerTwo: {
    marginHorizontal: 202,
    borderBottom: 2,
    borderStyle: 'dashed',
    width: 345
  },
  table: {
    marginTop: 10,
    display: 'table',
    width: 'auto',
  },

  tableRow: {
    flexDirection: 'row',
    width: 'auto',
    // paddingHorizontal: 5
  },

  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 0.8,
    height: 'auto',
    padding: 5,
  },
  tableText: {
    fontSize: 9,
    textAlign: 'left',
    marginLeft: 0,
    width: 'auto',
  },
  Sectable: {
    display: 'table',
    marginTop: 10,
  },
  SectableRow: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    padding: 8,
  },
  SectableCol: {

  },
  StudentID:{
    fontSize:11,
    paddingHorizontal:9
  },
  StudentRoll:{
    fontSize:10,
    paddingHorizontal:7
  },
  StudentName:{
    fontSize:11,
    paddingHorizontal:9
  },
  SectableTextName: {
    marginLeft:0,
    fontSize: 11,
    width:'auto',
    color: 'white',
    marginRight: 10,
  },
  SectableText: {
    marginLeft: 5,
    fontSize: 9,
    color: 'white',
  },
  ThrdtableRow:{
    flexDirection:'row',
  },
  ThrdtableCol:{
    borderStyle: 'solid',
    borderWidth: 0.4,
    height: 'auto',
    padding:5
  },
  ThrdtableText:{
    fontSize: 6,
  },
  tableID:{
    fontSize:10,
    paddingHorizontal:12
  },
  tableRoll:{
    fontSize:10,
    paddingHorizontal:0
  },
  tableName:{
    fontSize:10,
    paddingHorizontal:12
  },


})

const MyApp = () => {
  return (
    <div>
      <PDFViewer width={1200} height={760}>
        <MyDocument></MyDocument>
      </PDFViewer>
    </div>
  )
}

const MyDocument = () => {
  return (
    <Document title='Student-Attendance-sheet'>
      <Page size="A4" orientation='landscape' style={styles.page}>
        <View>
          <View style={styles.header} >
            <View>
              <Image style={styles.img} src='../src/assets/img/download.jfif'></Image>
            </View>
            <View style={styles.headerTitle}>
              <Text style={styles.Title}>IDEAL MODEL ACADEMY</Text>
              <Text style={styles.TitleAddress}>Dapunia, Mymensingh Sadar, Mymensingh</Text>
            </View>
          </View>
          <View style={styles.divider} />

          {/* Header End */}


          {/* Middle Start */}
          <View style={styles.Middle}>
            <Text style={styles.MiddleTitle}>Student Attendance Sheet</Text>
            <View style={styles.dividerTwo} />
          </View>

          {/* Middle End */}

          {/* First Table Start */}

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> Academic Year </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> 2024 </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> Class: </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> SSL </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> Shift: </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> Morning </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> Section: </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> A </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> Month </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> February </Text>
              </View>
            </View>
          </View>

          {/* First Table End */}

          {/* Second Table */}

          <View style={styles.Sectable}>
            <View style={styles.SectableRow}>
              <View style={styles.SectableCol}>
                <Text style={styles.StudentID}> Student Id </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.StudentRoll}> Roll </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.StudentName}> Name </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 01 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 02 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 03 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 04 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 05 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 06 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 07 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 08 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 09 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 10 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 11 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 12 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 13 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 14 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 15 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 16 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 17 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 18 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 19 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 20 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 21 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 22 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 23 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 24 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 25 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 26 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 27 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 28 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 29 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 30 </Text>
              </View>
              <View style={styles.SectableCol}>
                <Text style={styles.SectableText}> 31 </Text>
              </View>
            </View>

            {/* Second Table End */}


            {Array.from({ length: 1 }).map((_, i) => (
              <View style={styles.ThrdtableRow} key={i}>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.tableID}> 6834124</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.tableRoll}> 1111</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.tableName}>Mr. Nayeem</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
                <View style={styles.ThrdtableCol}>
                  <Text style={styles.ThrdtableText}>ABS</Text>
                </View>
              </View>
            ))}

          </View>

        </View>
      </Page>
    </Document>
  )
}

export default MyApp

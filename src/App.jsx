
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
    marginHorizontal: 225,
    borderBottom: 2,
    borderStyle: 'dashed',
    width: 325
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
  tableOne: {
    marginTop: 8,
    display: 'table',
    width: 'auto',
  },
  tableRowOne: {
    flexDirection: 'row',
  },
  tableColOne: {
    borderStyle: 'solid',
    borderWidth: 0.8,
    height: 'auto',
    padding: 5,
    backgroundColor: 'grey'
  },
  headerText: {
    fontSize: 5,
    width: 10,
  },
  headerTextStu: {
    fontSize: 6,
    width: 100,

  },
  tableColTwo: {
    borderStyle: 'solid',
    borderWidth: 0.8,
    height: 'auto',
    padding: 5,
  },
  headerTextTwo: {
    fontSize: 5.5,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    display: 'block',
    bottom: 20,
    borderTop: ' 1px dashed black',
    width: '100%',
    fontSize: 10,
    justifyContent: 'space-between',
    // marginTop: 20,
    marginLeft: 30,
  },
  footerText: {
    fontSize:8,
    marginTop: 5,
    marginLeft: 0
  },
  pageNumber: {
    fontSize:8,
    marginTop: 5,
  },
  printDateTime: {
    fontSize:8,
    marginTop: 5,
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

          <View style={styles.tableOne}>
            <View style={styles.tableRowOne}>
              <View style={styles.tableColOne}>
                <Text style={styles.headerTextStu}> Student ID</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerTextStu}> Roll </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerTextStu}> Student Name</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 01</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 02</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 03</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 04</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 05</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 06</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 07</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 08</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 09</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 10</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 11</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 12</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 13</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 14</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 15</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 16</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 17</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 18</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 19</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 20</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 21</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 22</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 23</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 24</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 25</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 26</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 27</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 28</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 29</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 30</Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.headerText}> 31</Text>
              </View>
            </View>
            {Array.from({ length: 1 }).map((_, i) => (
              <View style={styles.tableRow} key={i} wrap={false}
                pageBreak="avoid">
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextStu}> 655465</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextStu}> 01</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerTextStu}> Abid Hasan Purno</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
                <View style={styles.tableColTwo}>
                  <Text style={styles.headerText}> ab</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <Footer></Footer>
      </Page>
    </Document>
  )
}

const Footer = () => (
  <View style={styles.footer} fixed >
    <Text style={styles.footerText}>Design and developed by: Walton Group</Text>
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => ` ${pageNumber} / ${totalPages}`} />
    <Text style={styles.printDateTime}>Print Date and Time: Monday, 8 July 2024 11: 57: 44 AM</Text>
  </View>
)

export default MyApp

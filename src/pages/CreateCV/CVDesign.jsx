import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
} from '@react-pdf/renderer';

Font.register({
  family: 'STIX Two Text',
  src: '/fonts/STIX_Two_Text/STIXTwoText-VariableFont_wght.ttf',
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
    fontFamily: 'STIX Two Text',
  },
  title: { fontSize: '20', fontWeight: '700', textAlign: 'center' },
  section: {
    marginBottom: 10,
  },
  divider: {
    borderBottom: '1px solid black',
    marginVertical: 5,
  },
});

export const PDFDocument = ({
  name,
  contact,
  description,
  experiences,
  skills,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.title}>
        <Text>{name}</Text>
      </View>
      <View style={styles.section}>
        <Text>{contact.location}</Text>
        <Link src={contact.linkedin}>{contact.linkedin}</Link>
        <Link src={contact.portfolio}>{contact.portfolio}</Link>
        <Text>{contact.phone}</Text>
        <Text>{contact.email}</Text>
      </View>
      <View style={styles.divider}></View>
      <View>
        <Text>{description}</Text>
      </View>
      <View style={styles.section}>
        <Text>Experiencia Profesional</Text>
        {experiences.map((exp, index) => (
          <View key={index}>
            <Text>{exp.title}</Text>
            {exp.tasks.map((task, taskIndex) => (
              <Text key={taskIndex}>- {task}</Text>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

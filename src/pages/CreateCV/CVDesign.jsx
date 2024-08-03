import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
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
        <Text>{contact}</Text>
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

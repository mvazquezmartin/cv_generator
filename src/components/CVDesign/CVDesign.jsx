import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
} from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

Font.register({
  family: 'STIX Two Text',
  fonts: [
    { src: '/fonts/STIX_Two_Text/STIXTwoText-VariableFont_wght.ttf' },
    {
      src: '/fonts/STIX_Two_Text/STIXTwoText-Italic-VariableFont_wght.ttf',
      fontStyle: 'italic',
    },
    {
      src: '/fonts/STIX_Two_Text/static/STIXTwoText-Bold.ttf',
      fontWeight: 'bold',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
    fontFamily: 'STIX Two Text',
  },
  title: { fontSize: 24, fontWeight: 700, textAlign: 'center' },
  subTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    borderBottom: '1px solid #aaa',
  },
  position: {
    fontSize: 11,
    fontWeight: 'normal',
    padding: '0 5',
    color: '#666',
  },
  contact: {
    fontSize: 11,
    textAlign: 'center',
    marginVertical: '7',
    borderBottom: '1px solid #aaa',
  },
  description: {
    fontSize: 10.5,
    fontFamily: 'STIX Two Text',
    fontStyle: 'italic',
    padding: '0 5',
  },
  section: {
    marginBottom: 10,
  },
  experience: {
    fontSize: 12,
    marginBottom: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 5,
  },
  titleDate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 11,
  },
  italic: {
    fontStyle: 'italic',
  },
  tasks: {
    fontSize: 10.5,
    display: 'list-item',
    listStyleType: 'none',
    paddingLeft: 15,
    marginTop: 5,
    textIndent: 0,
  },
  task: {
    paddingRight: 8,
    marginVertical: 2,
  },
});

export const PDFDocument = ({
  name,
  position,
  contact,
  description,
  experiences,
  education,
  skills,
}) => {
  const { t } = useTranslation();

  const formatUrl = (url) => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`;
    }
    return url;
  };

  const isValidUrl = (string) => {
    return !string.includes(' ') && string.includes('.');
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.title}>
          <Text>{name}</Text>
          <Text style={styles.position}>{position}</Text>
        </View>
        <View style={styles.contact}>
          <Text>
            {contact.location} ·{' '}
            <Link src={formatUrl(contact.linkedin)}>{contact.linkedin}</Link> ·{' '}
            <Link src={formatUrl(contact.portfolio)}>{contact.portfolio}</Link>{' '}
            · {contact.phone} · {contact.email}
          </Text>
        </View>
        <View style={styles.description}>
          <Text>{description}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subTitle}>{t('cv.experience')}</Text>
          {experiences.map((exp, index) => (
            <View key={index} style={styles.experience}>
              <View style={styles.header}>
                <Text>{exp.company}</Text>
                <Text>{exp.location}</Text>
              </View>
              <View style={styles.titleDate}>
                {isValidUrl(exp.position) ? (
                  <Link src={formatUrl(exp.position)}>{exp.position}</Link>
                ) : (
                  <Text>{exp.position}</Text>
                )}
                <Text style={styles.italic}>
                  {exp.startDate} - {exp.endDate}
                </Text>
              </View>
              <View style={styles.tasks}>
                {exp.tasks.map((task, taskIndex) => (
                  <Text style={styles.task} key={taskIndex}>
                    {task}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.subTitle}>{t('cv.education')}</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.experience}>
              <View style={styles.header}>
                <Text>{edu.institution}</Text>
                <Text>{edu.location}</Text>
              </View>
              <View style={styles.titleDate}>
                <Text>{edu.title}</Text>
                <Text style={styles.italic}>{edu.date}</Text>
              </View>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.subTitle}>{t('cv.skills')}</Text>
          <View style={styles.tasks}>
            {skills.map((skill, index) => (
              <Text style={styles.task} key={index}>
                {skill}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

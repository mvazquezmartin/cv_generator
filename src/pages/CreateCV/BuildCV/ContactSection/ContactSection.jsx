import { CVContext } from '@/context/CVContext';
import { EditableField } from '@/pages/CreateCV/BuildCV/EditableField/EditableField';
import { useContext, Fragment } from 'react';

export const ContactSection = ({ cvData }) => {
  const { handleContactChange } = useContext(CVContext);
  return (
    <div className="contact-container">
      {Object.keys(cvData.contact).map((key, index) => (
        <Fragment key={key}>
          <EditableField
            value={cvData.contact[key]}
            onChange={(value) => handleContactChange(key, value)}
            className="contact"
          />
          {index < Object.keys(cvData.contact).length - 1 && '·'}
        </Fragment>
      ))}
    </div>
  );
};

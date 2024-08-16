import { CVContext } from '@/context/CVContext';
import { EditableField } from '@/pages/CreateCV/BuildCV/EditableField/EditableField';
import { useContext } from 'react';

export const NameSection = ({ cvData }) => {
  const { setCvData } = useContext(CVContext);
  return (
    <div className="title-name">
      <EditableField
        value={cvData.name}
        onChange={(name) => setCvData((prevData) => ({ ...prevData, name }))}
      />
      <EditableField
        value={cvData.position}
        onChange={(position) =>
          setCvData((prevData) => ({ ...prevData, position }))
        }
      />
    </div>
  );
};
